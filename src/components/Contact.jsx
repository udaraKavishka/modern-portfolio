import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);

    try {
      const response = await fetch('https://formspree.io/f/xdkaqqnv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      if (response.ok) {
        alert('Message sent successfully!');
        reset();
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-secondary-900">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        <p className="text-secondary-600 mt-4 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out to me using the form below.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-secondary-900">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-secondary-900">Email</h4>
                  <a href="mailto:udarakavishka13@gmail.com" className="text-primary-600 hover:text-primary-700">udarakavishka13@gmail.com</a>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-secondary-900">Phone</h4>
                  <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">+1 (234) 567-890</a>
                </div>
              </div> */}

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-secondary-900">Location</h4>
                  <p className="text-secondary-600">Kelaniya,Western Province</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-secondary-900 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {[
                  { href: "https://web.facebook.com/udara.nalawansa/", label: "Facebook", icon: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" },
                  { href: "https://www.linkedin.com/in/udaranalawansa/", label: "LinkedIn", icon: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" },
                  { href: "https://github.com/udaraKavishka", label: "GitHub", icon: "M12 2a10 10 0 0 0-3 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.5-1.2-3.5-1.2a2.7 2.7 0 0 0-1.2-1.5c-1-.7.1-.7.1-.7a2.2 2.2 0 0 1 1.6 1 2.3 2.3 0 0 0 3 .9 2.3 2.3 0 0 1 .7-1.5c-2.2-.3-4.5-1.1-4.5-5a4 4 0 0 1 1-2.7 3.8 3.8 0 0 1 .1-2.7s.8-.3 2.6 1a9 9 0 0 1 4.7 0c1.8-1.3 2.6-1 2.6-1a3.8 3.8 0 0 1 .1 2.7 4 4 0 0 1 1 2.7c0 3.9-2.3 4.7-4.5 5a2.5 2.5 0 0 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z" },
                  { href: "https://instagram.com/_udara27", label: "Instagram", icon: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm8 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-full transition-transform duration-300 transform hover:scale-110 bg-gradient-to-br from-gray-100 to-gray-200 shadow-md hover:shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-1/2"
        >
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-secondary-900">Send Me a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                  placeholder="Subject"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Your message"
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;