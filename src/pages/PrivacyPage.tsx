import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#07070f] px-6 py-12 text-slate-300">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="mb-8 inline-block text-sm text-indigo-400 hover:text-indigo-300">
          ← Back to home
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="mb-8 text-sm text-slate-500">Effective date: March 26, 2026 · Developer: Hassaan Azam</p>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-white">1. What This App Does</h2>
          <p>AI Assistant is a personal portfolio project that connects to your Google account to help you manage your Gmail and Google Calendar through a conversational AI interface.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-white">2. What Data We Access</h2>
          <p className="mb-2">When you sign in with Google, this app requests access to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong className="text-white">Your Google profile</strong> (name, email, profile picture) — to identify your session</li>
            <li><strong className="text-white">Gmail</strong> — to read and send emails on your behalf when you request it</li>
            <li><strong className="text-white">Google Calendar</strong> — to view and create calendar events on your behalf when you request it</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-white">3. How We Use Your Data</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Your Google OAuth tokens are used only to fulfill your chat requests during your session</li>
            <li>No emails, calendar events, or personal data are stored in any database</li>
            <li>No data is sold, shared, or transferred to third parties</li>
            <li>The AI processes your requests in real time and does not retain message history between sessions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-white">4. Data Storage</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Your session token is stored in your browser's localStorage and expires after 30 days</li>
            <li>No personal data is written to any server-side database</li>
            <li>Temporary files generated during your session are deleted automatically</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-white">5. Third-Party Services</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong className="text-white">Google OAuth 2.0</strong> — for authentication</li>
            <li><strong className="text-white">Groq API</strong> — to power the AI responses</li>
            <li><strong className="text-white">Hugging Face Spaces</strong> — backend hosting</li>
            <li><strong className="text-white">Vercel</strong> — frontend hosting</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-white">6. Your Rights</h2>
          <p>You can revoke this app's access to your Google account at any time by visiting: <br />
            <strong className="text-white">Google Account → Security → Third-party apps with account access</strong>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-white">7. Contact</h2>
          <p>
            Hassaan Azam ·{' '}
            <a href="mailto:hassaanazam678@gmail.com" className="text-indigo-400 hover:text-indigo-300">hassaanazam678@gmail.com</a>
            {' · '}
            <a href="https://www.linkedin.com/in/hassaan7/" target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300">LinkedIn</a>
          </p>
        </section>
      </div>
    </div>
  );
}
