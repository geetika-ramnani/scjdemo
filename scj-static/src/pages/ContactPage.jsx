import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  CheckCircle,
  Send,
  User,
  Mail,
  MessageSquare,
  Rocket,
  Paintbrush,
  Headphones,
  Shield,
  Check,
  MapPin,
  Phone,
  Users,
  Navigation,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// Contact Success Modal
const ContactSuccessModal = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
    onClick={onClose}
  >
    <div
      className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 rounded-3xl p-8 max-w-md w-[90%] text-center relative transform scale-90 opacity-0 transition-all duration-400"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-all duration-300 hover:rotate-90 p-2"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>
      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
        <CheckCircle size={40} className="text-slate-900" />
      </div>
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Message Sent Successfully!
      </h3>
      <p className="text-slate-300 text-lg mb-6">
        Thank you for reaching out. We'll get back to you as soon as possible!
      </p>
      <button
        onClick={onClose}
        className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-slate-900 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
      >
        <Check size={20} />
        Got it!
      </button>
    </div>
  </div>
);

// Confirmation Modal
const ConfirmationModal = ({ onConfirm, onCancel }) => (
  <div
    className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
    onClick={onCancel}
  >
    <div
      className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500 rounded-3xl p-8 max-w-md w-[90%] text-center relative transform scale-90 opacity-0 transition-all duration-400"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onCancel}
        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-all duration-300 hover:rotate-90 p-2"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>
      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
        <Send size={40} className="text-slate-900" />
      </div>
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Ready to Send?
      </h3>
      <p className="text-slate-300 text-lg mb-6">
        Your message is ready to be sent. Would you like to proceed?
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={onConfirm}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-slate-900 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          <Check size={20} />
          Yes, Send it!
        </button>
        <button
          onClick={onCancel}
          className="inline-flex items-center gap-3 px-6 py-3 bg-slate-700/80 text-white border-2 border-slate-600 font-bold rounded-full hover:bg-slate-600/90 hover:border-purple-500 hover:scale-105 transition-all duration-300"
        >
          <X size={20} />
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default function ContactPage() {
  const [showContactSuccessModal, setShowContactSuccessModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // Validation
  const validateName = (value) => {
    const isValid = value.trim() !== "";
    setNameError(!isValid);
    return isValid;
  };
  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
    setEmailError(!isValid);
    return isValid;
  };
  const validateMessage = (value) => {
    const isValid = value.trim() !== "";
    setMessageError(!isValid);
    return isValid;
  };

  // Blur handlers
  const handleNameBlur = (e) => validateName(e.target.value);
  const handleEmailBlur = (e) => validateEmail(e.target.value);
  const handleMessageBlur = (e) => validateMessage(e.target.value);

  // Form submit
  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);
    if (isNameValid && isEmailValid && isMessageValid) {
      setShowConfirmationModal(true);
    } else {
      if (!isNameValid && nameRef.current) nameRef.current.focus();
      else if (!isEmailValid && emailRef.current) emailRef.current.focus();
      else if (!isMessageValid && messageRef.current)
        messageRef.current.focus();
    }
  };

  // Send email using EmailJS (simulated for demo)
  const sendEmail = async () => {
    setIsSubmitting(true);
    try {
      // Simulate email sending delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Email sent successfully (simulated)");
      handleConfirmSend();
    } catch (error) {
      console.error("Failed to send message:", error);
      setShowConfirmationModal(false);
      alert("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confirmation modal handlers
  const handleConfirmSend = () => {
    setShowConfirmationModal(false);
    setShowContactSuccessModal(true);
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  const handleCancelSend = () => setShowConfirmationModal(false);
  const handleCloseSuccessModal = () => setShowContactSuccessModal(false);

  // Animate-in effect
  useEffect(() => {
    const animatedSections = document.querySelectorAll(".animate-on-scroll");
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-16");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    animatedSections.forEach((section) => observer.observe(section));
    return () => {
      animatedSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="container mx-auto px-8 max-w-7xl relative">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent animate-pulse"></h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed"></p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000 delay-200">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Rocket,
                    title: "Fast Delivery",
                    desc: "Quick turnaround times without compromising quality",
                  },
                  {
                    icon: Paintbrush,
                    title: "Creative Solutions",
                    desc: "Innovative approaches to meet your unique needs",
                  },
                  {
                    icon: Headphones,
                    title: "24/7 Support",
                    desc: "Round-the-clock assistance for your peace of mind",
                  },
                  {
                    icon: Shield,
                    title: "Reliable Service",
                    desc: "Trusted by clients worldwide for consistent quality",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <feature.icon
                      size={32}
                      className="text-blue-400 mx-auto mb-4"
                    />
                    <h4 className="text-white font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-300 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000 delay-200">
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 hover:border-blue-500 transition-all duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"
                    alt="Contact Us"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="text-center w-full">
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Ready to Start?
                      </h3>
                      <p className="text-white text-lg">
                        Let's create something amazing together
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Send Us a Message
                  </h3>
                  <p className="text-slate-300 text-lg">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  ref={formRef}
                  // onSubmit={handleContactFormSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="relative">
                        <User
                          size={20}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 transition-colors duration-300"
                        />
                        <input
                          type="hidden"
                          name="access_key"
                          value="b91f0e09-3ecc-4e0f-b79e-20c983a3a803"
                        />
                        <input
                          type="hidden"
                          name="redirect"
                          value="https://web3forms.com/success"
                        />
                        <input type="hidden" name="from_name" value="Enquiry" />
                        <input
                          type="text"
                          name="username"
                          className={`w-full bg-slate-700/80 border-2 ${
                            nameError ? "border-red-500" : "border-slate-600"
                          } text-white pl-12 pr-4 py-4 rounded-xl text-lg transition-all duration-400 focus:border-blue-500 focus:bg-slate-700/95 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onBlur={handleNameBlur}
                          ref={nameRef}
                          required
                        />
                      </div>
                      {nameError && (
                        <div className="text-red-400 text-sm transition-all duration-300">
                          Please enter your name
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <Mail
                          size={20}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 transition-colors duration-300"
                        />
                        <input
                          type="email"
                          name="from"
                          className={`w-full bg-slate-700/80 border-2 ${
                            emailError ? "border-red-500" : "border-slate-600"
                          } text-white pl-12 pr-4 py-4 rounded-xl text-lg transition-all duration-400 focus:border-blue-500 focus:bg-slate-700/95 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={handleEmailBlur}
                          ref={emailRef}
                          required
                        />
                      </div>
                      {emailError && (
                        <div className="text-red-400 text-sm transition-all duration-300">
                          Please enter a valid email address
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <MessageCircle
                        size={20}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 transition-colors duration-300"
                      />
                      <select
                        name="subject"
                        className="w-full bg-slate-700/80 border-2 border-slate-600 text-white pl-12 pr-10 py-4 rounded-xl text-lg transition-all duration-400 focus:border-blue-500 focus:bg-slate-700/95 focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled hidden>
                          Choose here
                        </option>
                        <option value="user">Category 1</option>
                        <option value="admin">Category 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <MessageSquare
                        size={20}
                        className="absolute left-4 top-6 text-blue-400 transition-colors duration-300"
                      />
                      <textarea
                        name="message"
                        className={`w-full bg-slate-700/80 border-2 ${
                          messageError ? "border-red-500" : "border-slate-600"
                        } text-white pl-12 pr-4 py-4 rounded-xl text-lg transition-all duration-400 focus:border-blue-500 focus:bg-slate-700/95 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[150px] resize-vertical`}
                        placeholder="Your Message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={handleMessageBlur}
                        ref={messageRef}
                        required
                      />
                    </div>
                    {messageError && (
                      <div className="text-red-400 text-sm transition-all duration-300">
                        Please enter your message
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-slate-900 font-bold rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    disabled={isSubmitting}
                  >
                    <Send size={20} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900/90 to-slate-800/90">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Find us through various channels or visit our office. We're always
              happy to hear from you.
            </p>
          </div>

          <div className="space-y-12 animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000 delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "123 Entertainment Blvd,\nMumbai, India",
                  link: "#map",
                  linkText: "Get Directions",
                  linkIcon: Navigation,
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 98765 43210\nMon - Fri: 9:00 AM - 6:00 PM",
                  link: "tel:+919876543210",
                  linkText: "Make a Call",
                  linkIcon: Phone,
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content:
                    "info@scjentertainments.com\nWe reply within 24 hours",
                  link: "mailto:info@scjentertainments.com",
                  linkText: "Send Email",
                  linkIcon: Mail,
                },
                {
                  icon: Users,
                  title: "Follow Us",
                  content: "social",
                  link: "#",
                  linkText: "Join Community",
                  linkIcon: Users,
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 hover:border-blue-500 transition-all duration-500 hover:transform hover:-translate-y-2 text-center h-full flex flex-col justify-between min-h-[320px]">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                      <item.icon
                        size={24}
                        className="text-blue-400 group-hover:text-slate-900 transition-colors duration-300"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {item.title}
                    </h4>
                    {item.content === "social" ? (
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-center gap-4 mb-6">
                          {[
                            {
                              name: "Facebook",
                              icon: FaFacebook,
                              color: "hover:bg-blue-600",
                            },
                            {
                              name: "Twitter",
                              icon: FaTwitter,
                              color: "hover:bg-blue-400",
                            },
                            {
                              name: "Instagram",
                              icon: FaInstagram,
                              color: "hover:bg-pink-500",
                            },
                            {
                              name: "LinkedIn",
                              icon: FaLinkedin,
                              color: "hover:bg-blue-700",
                            },
                          ].map((social, socialIndex) => (
                            <a
                              key={socialIndex}
                              href="#"
                              className={`w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 ${social.color} hover:text-slate-900 transition-all duration-300 hover:scale-110`}
                              title={social.name}
                            >
                              <social.icon size={16} />
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col justify-center">
                        <p className="text-slate-300 mb-6 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    )}
                    <div className="mt-auto">
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-purple-400 transition-colors duration-300 font-medium"
                      >
                        <item.linkIcon size={16} />
                        {item.linkText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div id="map" className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 hover:border-blue-500 transition-all duration-500 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.33235339678!2d72.87103325!3d19.07616145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d6487d!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location on Google Maps"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {showConfirmationModal && (
        <ConfirmationModal onConfirm={sendEmail} onCancel={handleCancelSend} />
      )}

      {showContactSuccessModal && (
        <ContactSuccessModal onClose={handleCloseSuccessModal} />
      )}
    </div>
  );
}
