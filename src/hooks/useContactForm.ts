import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  setFormData: (data: ContactFormData) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Example using Formspree or similar service
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitStatus
  };
};

// Example API route for contact form (create in src/app/api/contact/route.ts)
export const contactFormHandler = {
  // This would be implemented in an API route
  POST: async (request: Request) => {
    try {
      const { name, email, message } = await request.json();
      
      // Validate input
      if (!name || !email || !message) {
        return Response.json({ error: 'All fields are required' }, { status: 400 });
      }

      // Here you would typically:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integration with CRM
      
      console.log('Contact form submission:', { name, email, message });
      
      return Response.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error('Contact form error:', error);
      return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
  }
};
