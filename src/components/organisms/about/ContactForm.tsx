import React, { useState } from "react";

/* ================================
   Types
================================ */
type FormData = {
  name: string;
  email: string;
  message: string;
};

/* ================================
   Style Tokens
================================ */

const inputClass = `
  w-full px-4 py-3
  bg-primary
  border border-border
  rounded-xl
  text-primary
  placeholder:text-muted
  focus:outline-none
  focus:ring-2 focus:ring-accent
  focus:border-accent
  transition-all duration-200
`;

const labelClass = `
  mb-2 font-medium text-primary text-center w-full
`;

const fieldWrapper = `
  flex flex-col items-center w-full
`;

/* ================================
   Contact Component
================================ */

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  /* Handle Input */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Handle Submit */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="w-full py-16 bg-primary transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-6">
        {/* ================= CONTENT ================= */}
        <div className="flex flex-col gap-10 items-center text-center">
          {/* ================= TEXT ================= */}
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Get in Touch
            </h2>

            <p className="mt-4 text-secondary leading-relaxed">
              Have a project in mind or just want to say hello? Fill out the
              form below and I’ll get back to you as soon as possible.
            </p>
          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="
              flex flex-col gap-6
              w-full max-w-md

              bg-surface
              border border-border
              rounded-3xl
              shadow-soft

              p-6 md:p-8
            "
          >
            {/* NAME */}
            <div className={fieldWrapper}>
              <label className={labelClass}>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={inputClass}
                required
              />
            </div>

            {/* EMAIL */}
            <div className={fieldWrapper}>
              <label className={labelClass}>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={inputClass}
                required
              />
            </div>

            {/* MESSAGE */}
            <div className={fieldWrapper}>
              <label className={labelClass}>Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                mt-4
                mx-auto

                px-8 py-3
                rounded-full

                bg-accent
                text-accent-foreground

                font-semibold
                tracking-wide

                hover:opacity-90
                active:scale-95

                transition-all duration-200
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
