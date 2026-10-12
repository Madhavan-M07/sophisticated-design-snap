import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowDownToLine, ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/data/projects';
import { CONTACT_CONFIG } from '@/config/contact';
import dining from '@/assets/real-dining-arch.jpg';

export const Route = createFileRoute('/contact')({
  head: () =>
    pageHead(
      'Start a conversation',
      'Tell Your View about the space you are imagining. Prepare a private consultation brief for your residential or commercial interior project.'
    ),
  component: Contact,
});

function Contact() {
  const [brief, setBrief] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const briefText = `Your View — Private consultation brief\n\n${Array.from(data.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n\n')}`;
    setBrief(briefText);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_CONFIG.recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Consultation Enquiry from ${data.get('Name') ?? 'Client'}`,
          _template: 'table',
          _captcha: 'false',
          Name: data.get('Name'),
          Email: data.get('Email'),
          Phone: data.get('Phone') || 'Not provided',
          Location: data.get('Location') || 'Not specified',
          'Project Type': data.get('Project type'),
          'Project Stage': data.get('Project stage') || 'Not specified',
          Vision: data.get('Vision'),
        }),
      });

      if (response.ok) {
        setStatus('sent');
      } else {
        const result = await response.json().catch(() => ({}));
        setErrorMessage(result.message || 'Unable to deliver the message at this time.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error while connecting to the email service.');
      setStatus('error');
    }
  }

  function download() {
    if (!brief) return;
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'your-view-consultation-brief.txt';
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="container page-heading">
        <span className="eyebrow section-label">A new beginning</span>
        <h1>Every space starts<br />with a conversation.</h1>
        <p>Tell us what you’re imagining. A home, a workplace, or something entirely your own.</p>
      </div>

      <div className="container contact-grid">
        <aside className="contact-aside">
          <img
            src={dining}
            alt="Authentic crafted dining archway with wooden breakfast counter and pendant lighting"
            width={1536}
            height={1024}
            loading="lazy"
          />
          <span className="eyebrow">Private consultations</span>
          <p className="mt-3">A considered first step towards a space that feels like you.</p>
          <div className="mt-6 pt-6 border-t border-border">
            <span className="eyebrow">Direct email</span>
            <p className="mt-1">
              <a
                href={`mailto:${CONTACT_CONFIG.recipientEmail}`}
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                {CONTACT_CONFIG.recipientEmail}
              </a>
            </p>
          </div>
        </aside>

        {status === 'sent' ? (
          <div className="form-success" role="status">
            <span className="eyebrow section-label">Enquiry sent</span>
            <h2>Your vision is with us.</h2>
            <p>
              Thank you for reaching out. Your enquiry has been delivered to{' '}
              <strong>{CONTACT_CONFIG.recipientEmail}</strong>. We will review your details and respond promptly.
            </p>
            <div className="flex gap-4 flex-wrap items-center">
              <Button variant="studio" onClick={download}>
                Download copy of brief<ArrowDownToLine />
              </Button>
              <Button
                variant="editorial"
                onClick={() => {
                  setStatus('idle');
                  setBrief(null);
                }}
              >
                Send another message<ArrowUpRight />
              </Button>
            </div>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={submit}>
            {status === 'error' && (
              <div
                className="wide p-4 border border-destructive/40 bg-destructive/10 text-foreground text-xs"
                role="alert"
              >
                <p className="font-medium text-destructive mb-1">Could not send automatically: {errorMessage}</p>
                <p className="mb-3">You can also email your brief directly to our inbox:</p>
                <div className="flex gap-3 flex-wrap">
                  <Button asChild variant="studio" size="sm">
                    <a
                      href={`mailto:${CONTACT_CONFIG.recipientEmail}?subject=${encodeURIComponent(
                        'Interior Consultation Enquiry'
                      )}&body=${encodeURIComponent(brief ?? '')}`}
                    >
                      <Mail size={14} /> Open in Email App
                    </a>
                  </Button>
                  <Button variant="editorial" size="sm" onClick={download}>
                    Download brief<ArrowDownToLine size={14} />
                  </Button>
                </div>
              </div>
            )}

            <div className="field">
              <label htmlFor="name">Your name *</label>
              <input id="name" name="Name" placeholder="Full name" autoComplete="name" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email address *</label>
              <input id="email" name="Email" type="email" placeholder="Your email" autoComplete="email" required />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="Phone" type="tel" placeholder="With country code" autoComplete="tel" />
            </div>

            <div className="field">
              <label htmlFor="location">Project location</label>
              <input id="location" name="Location" placeholder="City, area" />
            </div>

            <div className="field">
              <label htmlFor="type">Project type *</label>
              <select id="type" name="Project type" required defaultValue="">
                <option value="" disabled>Select a project type</option>
                <option>Residential interiors</option>
                <option>Commercial interiors</option>
                <option>Turnkey solutions</option>
                <option>Bespoke furniture</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="stage">Project stage</label>
              <select id="stage" name="Project stage" defaultValue="">
                <option value="" disabled>Where are you in the journey?</option>
                <option>Just exploring</option>
                <option>Property acquired</option>
                <option>Ready to begin</option>
                <option>Under construction</option>
              </select>
            </div>

            <div className="field wide">
              <label htmlFor="message">A little about your vision *</label>
              <textarea
                id="message"
                name="Vision"
                placeholder="Tell us about your space, aspirations and timeline…"
                required
              />
            </div>

            <p className="form-note wide">
              Submissions are delivered directly to <strong>{CONTACT_CONFIG.recipientEmail}</strong>.
            </p>

            <div className="wide">
              <Button variant="studio" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending your enquiry…' : 'Send your enquiry'}
                <ArrowUpRight />
              </Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
