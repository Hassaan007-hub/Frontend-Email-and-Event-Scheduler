import { useCallback, useState } from 'react';
import { sendChatMessage } from '../api/client';
import ChatWindow from '../components/ChatWindow';
import DeveloperCredit from '../components/DeveloperCredit';
import InputBar from '../components/InputBar';
import SuggestionChips from '../components/SuggestionChips';
import { useAuth } from '../context/AuthContext';
import type { Message } from '../types';

const WELCOME: Message = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hello! I'm your AI assistant connected to your Gmail and Google Calendar. I can help you read emails, send messages, check your schedule, and create meetings. What would you like to do?",
  timestamp: new Date(),
};

export default function ChatPage() {
  const { user, logout } = useAuth();
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [isLoading, setIsLoading] = useState(false);
  const [fillText, setFillText] = useState<string | null>(null);

  async function handleSend(text: string) {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await sendChatMessage(text);
      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: res.data.reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: unknown) {
      const status =
        err && typeof err === 'object' && 'response' in err
          ? (err as { response?: { status?: number } }).response?.status
          : undefined;

      const content =
        status === 429
          ? "⏳ You've used all **3 demo messages** for today. Your quota resets in 24 hours — kindly come back tomorrow!"
          : 'Sorry, something went wrong. Please try again.';
      const errMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFillConsumed = useCallback(() => setFillText(null), []);

  const showSuggestions = messages.length === 1;

  return (
    <div className="flex h-screen flex-col bg-[#07070f]">
      {/* Header */}
      <header className="glass shrink-0 flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="13" rx="3" />
              <circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="15" cy="13" r="1.5" fill="currentColor" stroke="none" />
              <path strokeLinecap="round" d="M9.5 17.5h5" />
              <path strokeLinecap="round" d="M12 7V4.5" />
              <circle cx="12" cy="4" r="0.75" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <span className="gradient-text font-semibold tracking-tight">AI Assistant</span>
        </div>

        {/* User info + sign out */}
        <div className="flex items-center gap-3">
          {user?.picture && (
            <div className="relative">
              <img
                src={user.picture}
                alt={user.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#07070f] bg-emerald-400" />
            </div>
          )}
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-slate-200">{user?.name}</p>
            <p className="text-xs text-slate-500">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="glass glass-hover rounded-lg px-3 py-1.5 text-xs text-slate-400 transition-all duration-200 hover:text-slate-200"
          >
            Sign out
          </button>
        </div>
      </header>

      {showSuggestions && <SuggestionChips onFill={setFillText} />}

      <ChatWindow messages={messages} isLoading={isLoading} />

      <InputBar
        onSend={handleSend}
        disabled={isLoading}
        fillText={fillText}
        onFillConsumed={handleFillConsumed}
      />
      <DeveloperCredit className="shrink-0 py-1.5 text-center" />
    </div>
  );
}
