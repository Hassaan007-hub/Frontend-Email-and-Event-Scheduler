import Markdown from 'react-markdown';
import DeveloperCredit from './DeveloperCredit';
import type { Message } from '../types';

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const timeStr = message.timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (message.role === 'user') {
    return (
      <div className="animate-fade-in-up flex justify-end">
        <div className="max-w-[78%]">
          <div className="rounded-2xl rounded-br-sm bg-gradient-to-br from-indigo-600 to-violet-600 px-4 py-2.5 text-sm text-white shadow-lg shadow-indigo-900/30 whitespace-pre-wrap break-words">
            {message.content}
            <DeveloperCredit className="mt-1.5 text-right" />
          </div>
          <p className="mt-1 text-right text-[11px] text-slate-600">{timeStr}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up flex justify-start gap-2.5">
      {/* Assistant avatar */}
      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 shadow-md ring-1 ring-white/10">
        <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <rect x="4" y="7" width="16" height="13" rx="3" />
          <circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="15" cy="13" r="1.5" fill="currentColor" stroke="none" />
          <path strokeLinecap="round" d="M9.5 17.5h5" />
          <path strokeLinecap="round" d="M12 7V4.5" />
          <circle cx="12" cy="4" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <div className="max-w-[78%]">
        <div className="glass rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm shadow-sm">
          <div className="dark-prose">
            <Markdown>{message.content}</Markdown>
          </div>
          <DeveloperCredit className="mt-1.5 text-right" />
        </div>
        <p className="mt-1 text-[11px] text-slate-600">{timeStr}</p>
      </div>
    </div>
  );
}
