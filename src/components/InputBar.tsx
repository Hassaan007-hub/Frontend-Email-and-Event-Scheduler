import { useEffect, useRef } from 'react';

interface Props {
  onSend: (text: string) => void;
  disabled: boolean;
  fillText?: string | null;
  onFillConsumed?: () => void;
}

export default function InputBar({ onSend, disabled, fillText, onFillConsumed }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // When a template is chosen, populate + resize + focus
  useEffect(() => {
    if (!fillText || !textareaRef.current) return;
    const el = textareaRef.current;
    el.value = fillText;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
    el.focus();
    // Move cursor to end
    el.selectionStart = el.selectionEnd = el.value.length;
    onFillConsumed?.();
  }, [fillText, onFillConsumed]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  function submit() {
    const value = textareaRef.current?.value.trim() ?? '';
    if (!value || disabled) return;
    onSend(value);
    if (textareaRef.current) {
      textareaRef.current.value = '';
      textareaRef.current.style.height = 'auto';
    }
  }

  function handleInput() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }

  return (
    <div className="shrink-0 border-t border-white/[0.06] bg-[#07070f] px-4 py-3">
      <div className="gradient-border flex items-end gap-2 rounded-2xl bg-[#10101a] px-4 py-3 transition-all duration-200 focus-within:shadow-[0_0_0_1px_rgba(99,102,241,0.5),0_0_20px_rgba(99,102,241,0.15)]">
        <textarea
          ref={textareaRef}
          rows={1}
          placeholder="Ask me anything about your emails or calendar…"
          className="flex-1 resize-none bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-600"
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          disabled={disabled}
        />
        <button
          onClick={submit}
          disabled={disabled}
          className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-900/40 transition-all duration-200 hover:scale-105 hover:shadow-indigo-700/40 disabled:opacity-30 disabled:hover:scale-100"
          aria-label="Send"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
      <p className="mt-1.5 text-center text-[11px] text-slate-700">
        Enter to send · Shift+Enter for newline
      </p>
    </div>
  );
}
