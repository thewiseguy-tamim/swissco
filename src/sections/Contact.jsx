import { useRef, useState } from "react";
import Reveal from "../components/Reveal";
import Container from "../components/layout/Container";
import Button from "../components/buttons/Button";
import emailjs from "@emailjs/browser";

const ADDRESS = "Avenue-2, Block-D, Section-2, Mirpur, Dhaka, Bangladesh";
const MAP_Q = encodeURIComponent(ADDRESS);
const MAP_SRC = `https://www.google.com/maps?q=${MAP_Q}&output=embed`;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [note, setNote] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setNote("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });

      setStatus("success");
      setNote("Thanks! Your message has been sent. We’ll get back to you shortly.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setNote("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section id="contact" className="bg-transparent">
      <Container className="py-24 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* LEFT: Heading + Copy + Form */}
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl mb-3">Contact Us</h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-white/80 max-w-2xl mb-8">
                Please feel free to contact us and we will get back to you as soon as we can.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <form ref={formRef} onSubmit={onSubmit} className="space-y-5 max-w-xl">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-white placeholder-white/50 py-3"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-white placeholder-white/50 py-3"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Message"
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-white placeholder-white/50 py-3 resize-y"
                  />
                </div>

                <div className="pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === "sending"}
                    className="w-full sm:w-40 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {status === "sending" ? "Sending..." : "Send"}
                  </Button>
                </div>

                {note && (
                  <p className={`text-sm ${status === "error" ? "text-rose-300" : "text-emerald-300"}`}>
                    {note}
                  </p>
                )}
              </form>
            </Reveal>
          </div>

          {/* RIGHT: Details + Colored Map */}
          <div className="md:col-span-5 w-full">
            <Reveal>
              <div className="space-y-6">
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wide">Visit us</div>
                  <div className="mt-1 text-white">{ADDRESS}</div>
                </div>

                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wide">Talk to us</div>
                  <div className="mt-1 text-white">
                    +880 1711 000 000
                    <br />
                    support@swissco.example
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white/70">
                  <a href="#" aria-label="Twitter" className="hover:text-white transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.15 4.9a4.27 4.27 0 0 0 1.32 5.72 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.59 8.59 0 0 1 2 19.54a12.11 12.11 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.6 8.6 0 0 0 22.46 6z"/></svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.5h-4v16zM8.5 7.5h3.8v2.2h.06c.53-1 1.84-2.2 3.78-2.2 4.04 0 4.78 2.66 4.78 6.12v9.88h-4V15.5c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.06 2.07-3.06 4.22v8.13h-4V7.5z"/></svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:text-white transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 2.8A5.2 5.2 0 1 0 17.2 12 5.2 5.2 0 0 0 12 6.8zm0 2A3.2 3.2 0 1 1 8.8 12 3.2 3.2 0 0 1 12 8.8zm5.35-2.85a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z"/></svg>
                  </a>
                  <a href="#" aria-label="Dribbble" className="hover:text-white transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm6.92 6.62a7.87 7.87 0 0 1 1.36 4.43 17.65 17.65 0 0 0-6.31-.35c.14-.38.26-.77.37-1.17.19-.67.33-1.36.43-2.06a16.2 16.2 0 0 0 4.15-.85ZM12 4.13a7.86 7.86 0 0 1 4.74 1.58 13.92 13.92 0 0 1-3.7.77A26.6 26.6 0 0 0 10 4.29 7.84 7.84 0 0 1 12 4.13ZM8.35 5.2a24.9 24.9 0 0 1 2.7 2.18 14.9 14.9 0 0 1-5.4 1.46A7.9 7.9 0 0 1 8.35 5.2Zm-4.8 6.82a7.85 7.85 0 0 1 0-1.98 17.2 17.2 0 0 0 6.64-1.7c.27.28.53.56.78.85-.44.59-.83 1.22-1.16 1.88a17.2 17.2 0 0 0-6.26-.05ZM12 19.88a7.86 7.86 0 0 1-6.17-3.03 15.1 15.1 0 0 1 7.78-1.39c.8 2.09 1.33 4.21 1.6 5.32a7.8 7.8 0 0 1-3.21.1Zm5.1-1.73c-.16-.74-.63-2.75-1.39-4.81a14.7 14.7 0 0 1 4.42.5 7.88 7.88 0 0 1-3.03 4.31Z"/></svg>
                  </a>
                </div>

                {/* Map (colored) */}
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                  <div className="aspect-[4/3] md:aspect-[5/4]">
                    <iframe
                      title="Google Map - Mirpur, Dhaka"
                      src={MAP_SRC}
                      className="w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="md"
                    href={`https://www.google.com/maps/search/?api=1&query=${MAP_Q}`}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}