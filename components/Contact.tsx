'use client'
import { useState } from 'react'
import { Images } from './Utilis/Images'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  })

  const validateForm = () => {
    const newErrors = {
      email: '',
      phone: '',
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[0-9]{10}$/

    if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!phoneRegex.test(form.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
    }

    setErrors(newErrors)

    return !newErrors.email && !newErrors.phone
  }

  const handleSubmit = () => {
    if (!validateForm()) return

    alert('Form submitted successfully!')

    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })

    setErrors({
      email: '',
      phone: '',
    })
  }

  return (
    <section id="contact" style={{ padding: '80px 0', background: '#fff' }}>
      <div
        className="contact-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontSize: 13,
              color: '#7c3aed',
              fontWeight: 600,
              marginBottom: 8,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Get In Touch
          </p>

          <h2
            style={{
              fontSize: 'clamp(28px, 3vw, 35px)',
              fontWeight: 800,
              color: '#1e1e2e',
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Let's Build Together
          </h2>

          <p
            style={{
              fontSize: 15,
              color: '#6b7280',
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            I'm a Frontend Developer with 2.5+ years of experience building
            responsive, scalable, and high-performance web applications.
            Specialized in React.js, Next.js, Angular, TypeScript, SCSS, and
            modern UI development.
          </p>

          {[
            {
              icon: '📞',
              label: 'Phone',
              val: '+91 6374706784',
            },
            {
              icon: '✉️',
              label: 'Email',
              val: 'balaprem726@gmail.com',
            },
            {
              icon: '📍',
              label: 'Location',
              val: 'Chennai, Tamil Nadu, India',
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: '#f3e8ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                }}
              >
                {item.icon}
              </div>

              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: '#9ca3af',
                    marginBottom: 2,
                  }}
                >
                  {item.label}
                </div>

                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#1e1e2e',
                  }}
                >
                  {item.val}
                </div>
              </div>
            </div>
          ))}

          <div className="social-icons">
            <a
              href="https://www.instagram.com/coding_prem726"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={Images.instagram.src} alt="Instagram" />
            </a>

            <a
              href="https://www.linkedin.com/in/premnath-sarathi-5a088b212"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={Images.linkedin.src} alt="LinkedIn" />
            </a>

            <a
              href="https://wa.me/916374706784"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={Images.whatsapp.src} alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div
          style={{
            background: '#fafafa',
            borderRadius: 24,
            padding: '40px',
          }}
        >
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#1e1e2e',
              marginBottom: 12,
            }}
          >
            Start a Conversation
          </h3>

          <p
            style={{
              fontSize: 14,
              color: '#6b7280',
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            Looking for a Frontend Developer for your next project? Share your
            requirements, and I'll get back to you as soon as possible.
          </p>

          <div
            className="form-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              marginBottom: 16,
            }}
          >
            {/* Name */}
            <div>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: 6,
                  display: 'block',
                }}
              >
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    name: e.target.value,
                  }))
                }
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: 10,
                  fontSize: 14,
                }}
              />
            </div>


            {/* Subject */}
            <div>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: 6,
                  display: 'block',
                }}
              >
                Subject
              </label>

              <input
                type="text"
                placeholder="Project title or subject"
                value={form.subject}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    subject: e.target.value,
                  }))
                }
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: 10,
                  fontSize: 14,
                }}
              />
            </div>

          </div>

          <div
            className="form-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              marginBottom: 16,
            }}
          >
            {/* Phone */}
            <div>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: 6,
                  display: 'block',
                }}
              >
                Phone
              </label>

              <input
                type="text"
                maxLength={10}
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '')

                  setForm((p) => ({
                    ...p,
                    phone: value,
                  }))
                }}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: errors.phone
                    ? '1.5px solid #ef4444'
                    : '1.5px solid #e5e7eb',
                  borderRadius: 10,
                  fontSize: 14,
                }}
              />

              {errors.phone && (
                <p
                  style={{
                    color: '#ef4444',
                    fontSize: 12,
                    marginTop: 5,
                  }}
                >
                  {errors.phone}
                </p>
              )}
            </div>
            {/* Email */}
            <div>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: 6,
                  display: 'block',
                }}
              >
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    email: e.target.value,
                  }))
                }
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: errors.email
                    ? '1.5px solid #ef4444'
                    : '1.5px solid #e5e7eb',
                  borderRadius: 10,
                  fontSize: 14,
                }}
              />

              {errors.email && (
                <p
                  style={{
                    color: '#ef4444',
                    fontSize: 12,
                    marginTop: 5,
                  }}
                >
                  {errors.email}
                </p>
              )}
            </div>

          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: '#374151',
                marginBottom: 6,
                display: 'block',
              }}
            >
              Message
            </label>

            <textarea
              placeholder="Tell me about your project requirements..."
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  message: e.target.value,
                }))
              }
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1.5px solid #e5e7eb',
                borderRadius: 10,
                fontSize: 14,
                resize: 'vertical',
              }}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '14px',
            }}
          >
            Send Message
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}