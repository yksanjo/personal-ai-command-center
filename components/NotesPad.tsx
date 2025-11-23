'use client';

import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

export function NotesPad() {
  const [note, setNote] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('quickNote');
      return saved || '';
    }
    return '';
  });

  useEffect(() => {
    localStorage.setItem('quickNote', note);
  }, [note]);

  return (
    <div className="h-full">
      <div className="relative h-full min-h-[200px]">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your quick notes here..."
          className="w-full h-full min-h-[200px] px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
        />
        {note && (
          <div className="absolute bottom-2 right-2 text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
            <FileText className="h-3 w-3" />
            {note.length} chars
          </div>
        )}
      </div>
    </div>
  );
}

