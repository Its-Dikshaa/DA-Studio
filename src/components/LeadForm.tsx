"use client";

import { useState, FormEvent } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({
        text: "A few required details are missing.",
        type: "error",
      });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      company: formData.get("company")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      service: formData.get("service")?.toString() || "",
      budget: formData.get("budget")?.toString() || "",
      timeline: formData.get("timeline")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        form.reset();
        setStatus({
          text: "Lovely. Your note is on its way — we’ll reply in 1–2 working days.",
          type: "success",
        });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus({
        text: "Could not send this just now. Please email hello@da-studio.in instead.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="lead-form"
      id="lead-form"
      name="da-project-inquiry"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="da-project-inquiry" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="form-row">
        <label>
          Name <b>*</b>
          <input required name="name" autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          Work email <b>*</b>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Company / brand{" "}
          <input
            name="company"
            autoComplete="organization"
            placeholder="Where you work"
          />
        </label>
        <label>
          Phone / WhatsApp{" "}
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Optional"
          />
        </label>
      </div>
      <label>
        What could we help with? <b>*</b>
        <select required name="service" defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          <option value="UX strategy & research">UX strategy & research</option>
          <option value="Product & UI/UX design">Product & UI/UX design</option>
          <option value="Web design & development">Web design & development</option>
          <option value="Brand systems & motion">Brand systems & motion</option>
          <option value="Not sure yet — let’s talk">Not sure yet — let’s talk</option>
        </select>
      </label>
      <div className="form-row">
        <label>
          Estimated budget
          <select name="budget" defaultValue="">
            <option value="">Choose a range</option>
            <option value="Under ₹50k">Under ₹50k</option>
            <option value="₹50k – ₹1.5L">₹50k – ₹1.5L</option>
            <option value="₹1.5L – ₹5L">₹1.5L – ₹5L</option>
            <option value="₹5L+">₹5L+</option>
            <option value="Let’s discuss">Let’s discuss</option>
          </select>
        </label>
        <label>
          Ideal start
          <select name="timeline" defaultValue="">
            <option value="">Choose a timeline</option>
            <option value="ASAP">ASAP</option>
            <option value="Within a month">Within a month</option>
            <option value="1–3 months">1–3 months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </label>
      </div>
      <label>
        Tell us the good stuff <b>*</b>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="What are you building? What’s getting in the way?"
        ></textarea>
      </label>
      <label className="checkbox">
        <input required type="checkbox" name="privacy" />
        <span>
          I’m okay with DA using these details to reply to my enquiry. <b>*</b>
        </span>
      </label>
      <button className="button button-dark form-submit" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send it over"}{" "}
        <span>↗</span>
      </button>
      {status && (
        <p className={`form-status ${status.type}`} aria-live="polite">
          {status.text}
        </p>
      )}
    </form>
  );
}
