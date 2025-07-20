import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) newErrors.email = "This field is required";
    if (!formData.message.trim()) newErrors.message = "This field is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setLoading(false);
    }, 1500);
  };

  return (
    <div name='contact' className='contact-section'>
      <h1>Contact Us</h1>
      <span>Please fill out the below form to contact me</span>

      <div className='contact-form-container'>
        <form onSubmit={handleSubmit} className='contact-form'>
          <h1>Send your Message</h1>

          <div>
            <label>Full Name</label>
            <input
              type='text'
              placeholder='Enter your fullname'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div>
            <label>Email Address</label>
            <input
              type='email'
              placeholder='Enter your email address'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label>Message</label>
            <textarea
              placeholder='Enter your message'
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type='submit' disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
