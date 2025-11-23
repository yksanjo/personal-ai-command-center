'use client';

import { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

interface Prompt {
  title: string;
  content: string;
}

const prompts: Prompt[] = [
  {
    title: 'Blog Outline',
    content: 'Generate a 5-section outline for a blog post about [TOPIC] targeting beginners. Include an introduction, 3 main sections with key points, and a conclusion with actionable takeaways.',
  },
  {
    title: 'Code Review',
    content: 'Review this code for best practices, bugs, and performance: [PASTE CODE]\n\nPlease provide:\n1. Security concerns\n2. Performance optimizations\n3. Code style improvements\n4. Potential bugs',
  },
  {
    title: 'Email Draft',
    content: 'Write a professional email to [RECIPIENT] about [TOPIC]. The tone should be [FORMAL/CASUAL/FRIENDLY]. Include a clear subject line and call to action.',
  },
  {
    title: 'Meeting Summary',
    content: 'Summarize the following meeting notes:\n[PASTE NOTES]\n\nExtract:\n- Key decisions made\n- Action items with owners\n- Next steps\n- Open questions',
  },
  {
    title: 'Product Description',
    content: 'Write a compelling product description for [PRODUCT NAME]. Highlight:\n- Key features and benefits\n- Target audience\n- Unique selling points\n- Call to action',
  },
];

export function PromptLibrary() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="space-y-3">
      {prompts.map((prompt, index) => (
        <div
          key={index}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-500 dark:text-blue-400" />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {prompt.title}
              </h3>
            </div>
            <button
              onClick={() => copyToClipboard(prompt.content, index)}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              aria-label={`Copy ${prompt.title} prompt`}
            >
              {copiedIndex === index ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
            {prompt.content}
          </p>
        </div>
      ))}
    </div>
  );
}


