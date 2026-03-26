interface Template {
  icon: string;
  title: string;
  preview: string;
  full: string;
  color: string;
}

const TEMPLATES: Template[] = [
  {
    icon: '🗓️',
    title: 'Schedule a Meeting',
    preview: 'To, CC, title, date, time & body…',
    color: 'from-indigo-500 to-violet-500',
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
    full: 'Show me my top 3 unread emails',
  },
  {
    icon: '📤',
    title: 'Send an Email',
    preview: 'To abc123@gmail.com with subject & body',
    color: 'from-blue-500 to-indigo-500',
    full: 'Send an email to abc123@gmail.com with subject "Test" and body "This is a test message from the AI assistant."',
  },
  {
    icon: '📅',
    title: "Tomorrow's Meetings",
    preview: 'Any meetings scheduled for tomorrow?',
    color: 'from-emerald-500 to-teal-500',
    full: 'Do I have any meetings scheduled for tomorrow?',
  },
  {
    icon: '➕',
    title: 'Create Calendar Event',
    preview: '"Project Review" with attendee',
    color: 'from-cyan-500 to-blue-500',
    full: 'Create a calendar event "Project Review" on March 25, 2026 from 3 PM to 4 PM with attendee abc123@gmail.com',
  },
  {
    icon: '🗑️',
    title: 'Delete a Meeting',
    preview: 'Remove "Team Standup" on a date',
    color: 'from-rose-500 to-pink-500',
    full: 'Delete the meeting titled "Team Standup" from my calendar scheduled on ______ date',
  },
  {
    icon: '🔍',
    title: 'Find Free Slots',
    preview: 'Free 1-hour slots on a specific date',
    color: 'from-amber-500 to-orange-500',
    full: 'Find free 1 hour slots on ______ date',
  },
  {
    icon: '🤖',
    title: 'Emails → Calendar',
    preview: 'Scan emails & add meeting requests',
    color: 'from-purple-500 to-pink-500',
    full: 'Check my emails for any meeting requests and add them to my calendar',
  },
  {
    icon: '⚡',
    title: 'Auto-Schedule Meeting',
    preview: 'Find slot & book "Planning Session"',
    color: 'from-violet-500 to-indigo-500',
    full: 'Find a free 1 hour slot tomorrow and schedule a meeting called "Planning Session" with abc123@gmail.com',
  },
];

interface Props {
  onFill: (text: string) => void;
}

export default function SuggestionChips({ onFill }: Props) {
  return (
    <div className="shrink-0 border-b border-white/[0.04] px-5 py-4">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-600">
        Quick templates — click to fill &amp; edit
      </p>
      <div className="grid grid-cols-3 gap-2">
        {TEMPLATES.map(({ icon, title, preview, full, color }) => (
          <button
            key={title}
            onClick={() => onFill(full)}
            className="glass glass-hover group flex flex-col items-start gap-1.5 rounded-xl p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-900/20"
          >
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-sm shadow-sm`}>
              {icon}
            </span>
            <span className="text-xs font-semibold text-slate-300 group-hover:text-slate-100 leading-tight">
              {title}
            </span>
            <span className="text-[10px] text-slate-600 leading-snug line-clamp-1">
              {preview}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
