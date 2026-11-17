"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Field,
  FieldRow,
  SuccessBox,
  inputClass,
  invalidClass,
} from "@/components/ui/Field";
import { cn, isEmail, isPhone } from "@/lib/utils";

type Values = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company: string; // honeypot
  terms: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

const makeInitial = (subject = ""): Values => ({
  name: "",
  email: "",
  phone: "",
  subject,
  message: "",
  company: "",
  terms: false,
});

export function ContactForm({ initialSubject = "" }: { initialSubject?: string }) {
  const [v, setV] = useState<Values>(makeInitial(initialSubject));
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof Values, val: string | boolean) =>
    setV((prev) => ({ ...prev, [k]: val }));

  const validate = (): boolean => {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!isEmail(v.email)) e.email = "Enter a valid email address.";
    if (v.phone && !isPhone(v.phone)) e.phone = "Enter a valid phone number.";
    if (!v.subject) e.subject = "Select a subject.";
    if (v.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    if (!v.terms) e.terms = "Please consent to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (v.company) return; // honeypot
    if (validate()) {
      setSubmitted(true);
      setV(makeInitial(v.subject));
      setErrors({});
    }
  };

  return (
    <form
      className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8"
      onSubmit={onSubmit}
      noValidate
    >
      <SuccessBox title="Message sent" show={submitted}>
        Thank you for reaching out. We&apos;ll reply within one business day.{" "}
        <Badge variant="sample">Prototype</Badge> No data was stored or sent.
      </SuccessBox>

      <FieldRow>
        <Field label="Name" required error={errors.name}>
          <input
            className={cn(inputClass, invalidClass(!!errors.name))}
            name="name"
            type="text"
            value={v.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input
            className={cn(inputClass, invalidClass(!!errors.email))}
            name="email"
            type="email"
            autoComplete="email"
            value={v.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </Field>
      </FieldRow>

      <FieldRow>
        <Field label="Phone" error={errors.phone}>
          <input
            className={cn(inputClass, invalidClass(!!errors.phone))}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={v.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </Field>
        <Field label="Subject" required error={errors.subject}>
          <select
            className={cn(inputClass, "appearance-none", invalidClass(!!errors.subject))}
            name="subject"
            value={v.subject}
            onChange={(e) => set("subject", e.target.value)}
          >
            <option value="">Select…</option>
            <option>University Selection</option>
            <option>Application Support</option>
            <option>Visa Guidance</option>
            <option>Pre-Departure</option>
            <option>Other</option>
          </select>
        </Field>
      </FieldRow>

      <Field label="Message" required error={errors.message} hint="Minimum 10 characters.">
        <textarea
          className={cn(inputClass, "min-h-[120px] resize-y", invalidClass(!!errors.message))}
          name="message"
          placeholder="Tell us how we can help…"
          value={v.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </Field>

      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        value={v.company}
        onChange={(e) => set("company", e.target.value)}
        className="hidden"
      />

      <label className="mb-3 flex items-start gap-3">
        <input
          type="checkbox"
          className="mt-1 h-[18px] w-[18px] accent-primary"
          checked={v.terms}
          onChange={(e) => set("terms", e.target.checked)}
        />
        <span className="text-sm text-ink">
          I consent to being contacted about my message.{" "}
          <span className="text-error">*</span>
        </span>
      </label>
      {errors.terms && (
        <p className="-mt-2 mb-3 text-xs text-error">{errors.terms}</p>
      )}

      <Button type="submit" variant="primary" size="lg" block>
        Send Message
      </Button>
    </form>
  );
}
