
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay?: number;
};

const ContactCard = ({ icon, title, value, delay = 0 }: ContactCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className="glass p-6 rounded-xl flex flex-col items-center text-center gap-4"
  >
    <div className="h-14 w-14 rounded-full bg-sci-500/10 flex items-center justify-center text-sci-500">
      {icon}
    </div>
    <div>
      <h4 className="font-medium mb-1">{value}</h4>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally handle the form submission
    console.log('Form submitted:', formData);
    // Clear the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col gap-16 py-16">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-sci-100 text-sci-600 text-sm font-medium mb-4">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Get In Touch</h2>
          <div className="h-1 w-20 bg-sci-500 rounded-full mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactCard 
            icon={<Mail className="h-6 w-6" />} 
            title="Email" 
            value="utkrishtsharma93@gmail.com"
            delay={0}
          />
          <ContactCard 
            icon={<MapPin className="h-6 w-6" />} 
            title="Address" 
            value="New Delhi, India"
            delay={1}
          />
          <ContactCard 
            icon={<Phone className="h-6 w-6" />} 
            title="Phone" 
            value="(+91) 7290991032"
            delay={2}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold mb-6 tracking-tight">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white/70 focus:ring-2 focus:ring-sci-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white/70 focus:ring-2 focus:ring-sci-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white/70 focus:ring-2 focus:ring-sci-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className={cn(
                  "flex items-center justify-center gap-2 px-8 py-3 rounded-full",
                  "bg-sci-500 text-white hover:bg-sci-600 transition-colors",
                  "font-medium shadow-md hover:shadow-lg"
                )}
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-80 rounded-3xl overflow-hidden glass"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796396918!2d77.04417222535716!3d28.52755221476054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1662576417641!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Contact;
