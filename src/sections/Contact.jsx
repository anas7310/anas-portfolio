import React, { useState, useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    jobDescription: null,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.query.trim()) newErrors.query = "Please describe your query";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", form);
      // Integrate EmailJS, Formspree, or backend API here
      setLoading(true);
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );
        setForm({
          name: "",
          email: "",
          phone: "",
          query: "",
          jobDescription: null
        });
      } catch (error) {
        console.log("EMAILJS ERROR", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch With Me"
          sub="📨 Contact Information"
        />
        <div className="mt-12 max-w-2xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} ref={formRef} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone (Optional) */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Phone Number <span className="text-slate-400">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Query */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Your Query <span className="text-red-400">*</span>
              </label>
              <textarea
                name="query"
                value={form.query}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about the role, project, or opportunity"
                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
              {errors.query && (
                <p className="text-xs text-red-400 mt-1">{errors.query}</p>
              )}
            </div>

            {/* Job Description Upload */}
            {/* <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Attach Job Description{" "}
                <span className="text-slate-400">(optional)</span>
              </label>
              <input
                type="file"
                name="jobDescription"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm text-slate-300
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:bg-indigo-600 file:text-white
          hover:file:bg-indigo-500"
              />
            </div> */}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors py-3 text-white font-medium shadow-lg"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
