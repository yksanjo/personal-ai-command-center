'use client';

import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface QuickLink {
  name: string;
  url: string;
  icon?: string;
}

const defaultLinks: QuickLink[] = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'Gmail', url: 'https://mail.google.com' },
  { name: 'Notion', url: 'https://notion.so' },
  { name: 'Calendar', url: 'https://calendar.google.com' },
  { name: 'ChatGPT', url: 'https://chat.openai.com' },
];

export function QuickLinks() {
  const [links] = useState<QuickLink[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('quickLinks');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse quickLinks from localStorage', e);
        }
      }
    }
    return defaultLinks;
  });

  useEffect(() => {
    localStorage.setItem('quickLinks', JSON.stringify(links));
  }, [links]);

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <span>{link.name}</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

