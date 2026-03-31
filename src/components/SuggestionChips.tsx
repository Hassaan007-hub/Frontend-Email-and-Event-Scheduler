interface Template {
  icon: string;
  title: string;
  preview: string;
  full: string;
  color: string;
  glow: string;
}

const TEMPLATES: Template[] = [
  {
    icon: '🗓️',
    title: 'Schedule a Meeting',
    preview: 'To, CC, title, date, time & body…',
    color: 'from-indigo-500 to-violet-500',
    glow: 'hover:shadow-indigo-500/20',
    full: `Schedule a meeting
To: email
cc: email
titled "Add_title_here"
Date: date_of_meeting
Time: start_time to end_time
Body: "add meeting link as well description you want in mail"`,
  },
  {
    icon: '✉️',
    title: 'Top 3 Unread Emails',
    preview: 'Show my latest unread messages',
    color: 'from-violet-500 to-purple-500',
    glow: 'hover:shadow-violet-500/20',
    full: 'Show me my top 3 unread emails',
  },
  {
    icon: '📤',
    title: 'Send an Email',
    preview: 'To abc123@gmail.com with subject & body',
    color: 'from-blue-500 to-indigo-500',
    glow: 'hover:shadow-blue-500/20',
    full: 'Send an email to abc123@gmail.com with subject "Test" and body "This is a test message from the AI assistant."',
  },
  {
    icon: '📅',
    title: "Tomorrow's Meetings",
    preview: 'Any meetings scheduled for tomorrow?',
    color: 'from-emerald-500 to-teal-500',
    glow: 'hover:shadow-emerald-500/20',
    full: 'Do I have any meetings scheduled for tomorrow?',
  },
  {
    icon: '➕',
    title: 'Create Calendar Event',
    preview: '"Project Review" with attendee',
    color: 'from-cyan-500 to-blue-500',
    glow: 'hover:shadow-cyan-500/20',
    full: 'Create a calendar event "Project Review" on March 25, 2026 from 3 PM to 4 PM with attendee abc123@gmail.com',
  },
  {
    icon: '🗑️',
    title: 'Delete a Meeting',
    preview: 'Remove "Team Standup" on a date',
    color: 'from-rose-500 to-pink-500',
    glow: 'hover:shadow-rose-500/20',
    full: 'Delete the meeting titled "Team Standup" from my calendar scheduled on ______ date',
  },
  {
    icon: '🔍',
    title: 'Find Free Slots',
    preview: 'Free 1-hour slots on a specific date',
    color: 'from-amber-500 to-orange-500',
    glow: 'hover:shadow-amber-500/20',
    full: 'Find free 1 hour slots on ______ date',
  },
  {
    icon: '🤖',
    title: 'Emails → Calendar',
    preview: 'Scan emails & add meeting requests',
    color: 'from-purple-500 to-pink-500',
    glow: 'hover:shadow-purple-500/20',
    full: 'Check my emails for any meeting requests and add them to my calendar',
  },
  {
    icon: '⚡',
    title: 'Auto-Schedule Meeting',
    preview: 'Find slot & book "Planning Session"',
    color: 'from-violet-500 to-indigo-500',
    glow: 'hover:shadow-violet-500/20',
    full: 'Find a free 1 hour slot tomorrow and schedule a meeting called "Planning Session" with abc123@gmail.com',
  },
];

interface Props {
  onFill: (text: string) => void;
}

export default function SuggestionChips({ onFill }: Props) {
  return (
    <div className="shrink-0 border-b border-white/[0.04] px-5 py-5">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
        Quick templates — click to fill &amp; edit
      </p>
      <div className="grid grid-cols-3 gap-2.5">
        {TEMPLATES.map(({ icon, title, preview, full, color, glow }) => (
          <button
            key={title}
            onClick={() => onFill(full)}
            className={`group relative flex flex-col items-start gap-2 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-white/[0.06] hover:shadow-lg ${glow}`}
          >
            {/* Subtle gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.06]`} />

            {/* Icon */}
            <span className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-sm shadow-lg`}>
              {icon}
            </span>

            {/* Title */}
            <span className="relative text-xs font-semibold leading-tight text-slate-300 transition-colors duration-200 group-hover:text-white">
              {title}
            </span>

            {/* Preview */}
            <span className="relative line-clamp-1 text-[10px] leading-snug text-slate-600 transition-colors duration-200 group-hover:text-slate-500">
              {preview}
            </span>

            {/* Bottom accent line */}
            <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${color} transition-all duration-300 group-hover:w-full`} />
          </button>
        ))}
      </div>
    </div>
  );
}
