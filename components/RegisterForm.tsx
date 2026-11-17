"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Field,
  FieldRow,
  FormSectionTitle,
  SuccessBox,
  inputClass,
  invalidClass,
} from "@/components/ui/Field";
import { destinations } from "@/lib/data";
import { cn, isEmail, isPhone } from "@/lib/utils";

type Values = {
  fullName: string;
  dob: string;
  email: string;
  phone: string;
  gender: string;
  education: string;
  year: string;
  field: string;
  country: string;
  intake: string;
  course: string;
  budget: string;
  company: string; // honeypot
  terms: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

const initial: Values = {
  fullName: "",
  dob: "",
  email: "",
  phone: "",
  gender: "Prefer not to say",
  education: "",
  year: "",
  field: "",
  country: "",
  intake: "2026 Fall / Sep",
  course: "",
  budget: "Not sure yet",
  company: "",
  terms: false,
};

export function RegisterForm() {
  const [v, setV] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof Values, val: string | boolean) =>
    setV((prev) => ({ ...prev, [k]: val }));

  const validate = (): boolean => {
    const e: Errors = {};
    if (v.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
    if (!isEmail(v.email)) e.email = "Enter a valid email address.";
    if (!isPhone(v.phone)) e.phone = "Enter a valid phone number.";
    if (!v.dob || new Date(v.dob) >= new Date())
      e.dob = "Select a valid date of birth.";
    if (!v.education) e.education = "Select your qualification.";
    if (!/^\d{4}$/.test(v.year.trim())) e.year = "Enter a 4-digit year.";
    if (!v.country) e.country = "Select a preferred country.";
    if (!v.terms) e.terms = "Please accept the consent to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (v.company) return; // honeypot — silently ignore bots
    if (validate()) {
      setSubmitted(true);
      setV(initial);
      setErrors({});
    }
  };

  const selectCls = cn(inputClass, "appearance-none");

  return (
    <form
      className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8"
      onSubmit={onSubmit}
      noValidate
    >
      <SuccessBox title="Registration received" show={submitted}>
        Thank you — a consultant will contact you within one business day.{" "}
        <Badge variant="sample">Prototype</Badge> No data was stored or sent.
      </SuccessBox>

      <FormSectionTitle>Personal Details</FormSectionTitle>
      <FieldRow>
        <Field label="Full name" required error={errors.fullName}>
          <input
            className={cn(inputClass, invalidClass(!!errors.fullName))}
            name="fullName"
            type="text"
            autoComplete="name"
            value={v.fullName}
            onChange={(e) => set("fullName", e.target.value)}
          />
        </Field>
        <Field label="Date of birth" required error={errors.dob}>
          <input
            className={cn(inputClass, invalidClass(!!errors.dob))}
            name="dob"
            type="date"
            value={v.dob}
            onChange={(e) => set("dob", e.target.value)}
          />
        </Field>
      </FieldRow>
      <FieldRow>
        <Field label="Email" required error={errors.email} hint="We never share your email.">
          <input
            className={cn(inputClass, invalidClass(!!errors.email))}
            name="email"
            type="email"
            autoComplete="email"
            value={v.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </Field>
        <Field label="Phone / WhatsApp" required error={errors.phone}>
          <input
            className={cn(inputClass, invalidClass(!!errors.phone))}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={v.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </Field>
      </FieldRow>
      <Field label="Gender">
        <select
          className={selectCls}
          name="gender"
          value={v.gender}
          onChange={(e) => set("gender", e.target.value)}
        >
          <option>Prefer not to say</option>
          <option>Female</option>
          <option>Male</option>
          <option>Non-binary</option>
        </select>
      </Field>

      <FormSectionTitle>Academic Background</FormSectionTitle>
      <FieldRow>
        <Field label="Current / highest qualification" required error={errors.education}>
          <select
            className={cn(selectCls, invalidClass(!!errors.education))}
            name="education"
            value={v.education}
            onChange={(e) => set("education", e.target.value)}
          >
            <option value="">Select…</option>
            <option>Grade 12 / A-levels</option>
            <option>Bachelor&apos;s (ongoing)</option>
            <option>Bachelor&apos;s completed</option>
            <option>Master&apos;s completed</option>
          </select>
        </Field>
        <Field label="Year of completion" required error={errors.year}>
          <input
            className={cn(inputClass, invalidClass(!!errors.year))}
            name="year"
            type="text"
            placeholder="e.g. 2025"
            value={v.year}
            onChange={(e) => set("year", e.target.value)}
          />
        </Field>
      </FieldRow>
      <Field label="Field of interest">
        <input
          className={inputClass}
          name="field"
          type="text"
          placeholder="e.g. Computer Science, Business"
          value={v.field}
          onChange={(e) => set("field", e.target.value)}
        />
      </Field>

      <FormSectionTitle>Study Preferences</FormSectionTitle>
      <FieldRow>
        <Field label="Preferred country" required error={errors.country}>
          <select
            className={cn(selectCls, invalidClass(!!errors.country))}
            name="country"
            value={v.country}
            onChange={(e) => set("country", e.target.value)}
          >
            <option value="">Select…</option>
            {destinations.map((d) => (
              <option key={d.code} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred intake">
          <select
            className={selectCls}
            name="intake"
            value={v.intake}
            onChange={(e) => set("intake", e.target.value)}
          >
            <option>2026 Spring / Feb</option>
            <option>2026 Fall / Sep</option>
            <option>2027 Spring / Feb</option>
            <option>2027 Fall / Sep</option>
            <option>Not sure yet</option>
          </select>
        </Field>
      </FieldRow>
      <Field label="Preferred course / program">
        <input
          className={inputClass}
          name="course"
          type="text"
          placeholder="e.g. MSc Data Science"
          value={v.course}
          onChange={(e) => set("course", e.target.value)}
        />
      </Field>
      <Field label="Estimated budget (tuition / year)">
        <select
          className={selectCls}
          name="budget"
          value={v.budget}
          onChange={(e) => set("budget", e.target.value)}
        >
          <option>Not sure yet</option>
          <option>Under $15,000</option>
          <option>$15,000 – $30,000</option>
          <option>$30,000 – $45,000</option>
          <option>Above $45,000</option>
        </select>
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
          I agree to be contacted about my enquiry and accept the privacy
          policy. <span className="text-error">*</span>
        </span>
      </label>
      {errors.terms && (
        <p className="-mt-2 mb-3 text-xs text-error">{errors.terms}</p>
      )}

      <Button type="submit" variant="accent" size="lg" block>
        Submit Registration
      </Button>
    </form>
  );
}
