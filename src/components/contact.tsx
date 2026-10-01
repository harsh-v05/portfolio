"use client";

import { useState } from "react";
import { MessageCircleMore } from "lucide-react";
import {
  DrawablyButton,
  DrawablyHighlight,
  DrawablyInput,
  DrawablyTextarea,
  type DrawablyButtonState,
} from "./drawably";

type Status = "idle" | "sending" | "sent" | "error";

const buttonState: Record<Status, DrawablyButtonState> = {
  idle: "idle",
  sending: "loading",
  sent: "success",
  error: "error",
};

const buttonLabel: Record<Status, string> = {
  idle: "Send message",
  sending: "Sending...",
  sent: "Message sent",
  error: "Try again",
};

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-10">
      <h1 className="font-pen pen-heavy text-5xl leading-none text-ink">Say hello</h1>
      <p className="mt-5 max-w-xl text-[15px] sm:text-base leading-relaxed text-ink-2">
        I&apos;m currently open to{" "}
        <DrawablyHighlight className="text-ink">freelance opportunities</DrawablyHighlight>{" "}
        and collaborations. Reach out if you have a project in mind or just
        want to chat about how I can help bring your ideas to life.
      </p>

      <div className="my-8 flex justify-center">
        <MessageCircleMore size={72} strokeWidth={1.2} className="text-pen/70" />
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="font-pen text-lg text-ink">
            Name
          </label>
          <DrawablyInput
            className="block w-full"
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="font-pen text-lg text-ink">
            Email
          </label>
          <DrawablyInput
            className="block w-full"
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="font-pen text-lg text-ink">
            Message
          </label>
          <DrawablyTextarea
            className="block w-full"
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Type your message here..."
            value={form.message}
            onChange={handleChange}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-[#d12724]">Something went wrong. Please try again.</p>
        )}

        <DrawablyButton
          type="submit"
          variant="solid"
          state={buttonState[status]}
          disabled={status === "sending" || status === "sent"}
          className="w-full py-2.5 font-pen text-xl"
        >
          {buttonLabel[status]}
        </DrawablyButton>
      </form>
    </section>
  );
}
