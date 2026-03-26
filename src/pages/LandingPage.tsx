import DeveloperCredit from '../components/DeveloperCredit';
import SignInButton from '../components/SignInButton';

const FEATURES = [
  {
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Read & send emails',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'View & create calendar events',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Schedule meetings intelligently',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#07070f] p-4">
      {/* Background gradient orbs */}
      <div className="animate-float pointer-events-none absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="animate-float-delayed pointer-events-none absolute bottom-[20%] right-[15%] h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[50%] top-[60%] h-48 w-48 -translate-x-1/2 rounded-full bg-purple-500/10 blur-2xl" />

      {/* Card */}
      <div className="glass gradient-border relative z-10 w-full max-w-sm rounded-3xl p-8 shadow-2xl glow-indigo">
        {/* Logo mark */}
        <div className="mb-7 flex flex-col items-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg glow-indigo-sm">
            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="13" rx="3" />
              <circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="15" cy="13" r="1.5" fill="currentColor" stroke="none" />
              <path strokeLinecap="round" d="M9.5 17.5h5" />
              <path strokeLinecap="round" d="M12 7V4.5" />
              <circle cx="12" cy="4" r="0.75" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div>
            <h1 className="gradient-text text-2xl font-bold tracking-tight">AI Assistant</h1>
            <p className="mt-1 text-sm text-slate-400">Gmail &amp; Google Calendar, supercharged</p>
          </div>
        </div>

        {/* Features */}
        <ul className="mb-7 space-y-2.5">
          {FEATURES.map(({ icon, label, color }) => (
            <li key={label} className="glass glass-hover flex items-center gap-3 rounded-xl px-3.5 py-2.5 transition-all duration-200">
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white shadow`}>
                {icon}
              </span>
              <span className="text-sm text-slate-300">{label}</span>
            </li>
          ))}
        </ul>

        {/* Sign in */}
        <SignInButton />

        <p className="mt-4 text-center text-xs text-slate-600">
          Secure · Powered by Google OAuth 2.0
        </p>
      </div>

      {/* Footer */}
      <DeveloperCredit className="relative z-10 mt-6 text-center" />
    </div>
  );
}
