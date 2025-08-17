import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Create transporter with Google SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.GOOGLE_EMAIL, // Your Gmail address
        pass: process.env.GOOGLE_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content for company (you receive this)
    const companyMailOptions = {
      from: `"TrueLens Contact Form" <${process.env.GOOGLE_EMAIL}>`,
      to: process.env.COMPANY_EMAIL || process.env.GOOGLE_EMAIL,
      subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 20px; color: white; border-radius: 10px 10px 0 0;">
            <h2 style="margin: 0; display: flex; align-items: center;">
              <span style="margin-right: 10px;">👁️</span>
              New Contact Form Submission - TrueLens
            </h2>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #1e40af; border-bottom: 2px solid #3B82F6; padding-bottom: 10px; margin-top: 0;">Contact Details</h3>
              
              <div style="margin: 15px 0;">
                <strong style="color: #475569;">Name:</strong> 
                <span style="color: #1e293b;">${name}</span>
              </div>
              
              <div style="margin: 15px 0;">
                <strong style="color: #475569;">Email:</strong> 
                <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a>
              </div>
              
              ${phone ? `
                <div style="margin: 15px 0;">
                  <strong style="color: #475569;">Phone:</strong> 
                  <a href="tel:${phone}" style="color: #3B82F6; text-decoration: none;">${phone}</a>
                </div>
              ` : ''}
              
              <div style="margin: 15px 0;">
                <strong style="color: #475569;">Subject:</strong> 
                <span style="color: #1e293b;">${subject || 'General Inquiry'}</span>
              </div>
              
              <div style="margin: 20px 0;">
                <strong style="color: #475569;">Message:</strong>
                <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #3B82F6; margin-top: 8px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 14px;">
              <p>This email was sent from the TrueLens contact form</p>
              <p>Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Confirmation email for user
    const userMailOptions = {
      from: `"TrueLens International" <${process.env.GOOGLE_EMAIL}>`,
      to: email,
      subject: 'Thank you for contacting TrueLens International',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 20px; color: white; border-radius: 10px 10px 0 0;">
            <h2 style="margin: 0; display: flex; align-items: center;">
              <span style="margin-right: 10px;">👁️</span>
              TrueLens International
            </h2>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #1e40af; margin-top: 0;">Thank you for your inquiry!</h3>
              
              <p style="color: #475569; line-height: 1.6;">
                Dear ${name},
              </p>
              
              <p style="color: #475569; line-height: 1.6;">
                Thank you for contacting TrueLens International. We have received your inquiry and appreciate your interest in our premium contact lens solutions.
              </p>
              
              <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #3B82F6; margin: 20px 0;">
                <h4 style="color: #1e40af; margin-top: 0;">Your Message Details:</h4>
                <p style="margin: 5px 0; color: #64748b;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                <p style="margin: 5px 0; color: #64748b;"><strong>Email:</strong> ${email}</p>
                ${phone ? `<p style="margin: 5px 0; color: #64748b;"><strong>Phone:</strong> ${phone}</p>` : ''}
              </div>
              
              <p style="color: #475569; line-height: 1.6;">
                Our team will review your message and get back to you within 24-48 hours. If you have any urgent inquiries, please feel free to contact us directly at <a href="mailto:orders@truelensinternational.com" style="color: #3B82F6;">orders@truelensinternational.com</a>.
              </p>
              
              <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h4 style="color: #0369a1; margin-top: 0; display: flex; align-items: center;">
                  <span style="margin-right: 8px;">🌟</span>
                  Why Choose TrueLens?
                </h4>
                <ul style="color: #0369a1; margin: 10px 0; padding-left: 20px;">
                  <li>FDA Approved Products</li>
                  <li>Global Shipping & Support</li>
                  <li>Premium Quality Assurance</li>
                  <li>15+ Years Experience</li>
                </ul>
              </div>
              
              <p style="color: #475569; line-height: 1.6;">
                Thank you for choosing TrueLens International for your vision care needs.
              </p>
              
              <p style="color: #475569; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #1e40af;">The TrueLens Team</strong>
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 14px;">
              <p>TrueLens International | Premium Vision Solutions</p>
              <p>📍 Gurugram, Haryana, India | 🌐 Worldwide Shipping</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We have received your inquiry and will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'There was an error sending your message. Please try again or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
