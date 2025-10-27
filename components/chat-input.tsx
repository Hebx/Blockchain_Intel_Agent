import { useState } from 'react';

export default function ChatInput({
  status,
  onSubmit,
  stop,
}: {
  status: string;
  onSubmit: (text: string) => void;
  stop?: () => void;
}) {
  const [text, setText] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (text.trim() === '') return;
        onSubmit(text);
        setText('');
      }}
    >
      <div className="flex gap-2">
        <input
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask about blockchain data..."
          disabled={status === 'streaming'}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          type="submit"
          disabled={status === 'streaming' || text.trim() === ''}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'streaming' ? 'Sending...' : 'Send'}
        </button>
        {stop && status === 'streaming' && (
          <button
            type="button"
            onClick={stop}
            className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Stop
          </button>
        )}
      </div>
    </form>
  );
}
