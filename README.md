# Personal AI Command Center

A clean, minimal dashboard for your daily productivity needs. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Task Management**: Add and delete tasks with localStorage persistence
- **Quick Notes**: A single editable note pad (like a sticky note)
- **AI Prompt Library**: Pre-loaded with 5 useful prompts with one-click copy
- **Quick Links**: Fast access to your top 5 daily tools (GitHub, Gmail, Notion, etc.)
- **Dark/Light Mode**: Toggle between themes with a beautiful UI
- **No Backend**: Everything runs in the browser with localStorage

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-ai-command-center
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes
- **State**: React hooks + localStorage

## 📁 Project Structure

```
personal-ai-command-center/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main dashboard page
│   ├── theme-provider.tsx  # Theme provider wrapper
│   └── globals.css         # Global styles
├── components/
│   ├── TaskList.tsx        # Task management component
│   ├── NotesPad.tsx        # Quick notes component
│   ├── PromptLibrary.tsx   # AI prompts with copy functionality
│   ├── QuickLinks.tsx      # Quick access links
│   └── ThemeToggle.tsx     # Dark/light mode toggle
└── public/                 # Static assets
```

## 🎨 Customization

### Adding Your Own Prompts

Edit `components/PromptLibrary.tsx` and add to the `prompts` array:

```typescript
const prompts: Prompt[] = [
  // ... existing prompts
  {
    title: 'Your Prompt Title',
    content: 'Your prompt content here...',
  },
];
```

### Customizing Quick Links

Edit `components/QuickLinks.tsx` and modify the `defaultLinks` array:

```typescript
const defaultLinks: QuickLink[] = [
  { name: 'Your Tool', url: 'https://your-tool.com' },
  // ... more links
];
```

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Deploy! 🚀

The app will automatically deploy on every push to your main branch.

## 🌱 Future Enhancements

- [ ] Cloud sync with Supabase
- [ ] User authentication
- [ ] AI integration (send prompts to OpenAI API)
- [ ] Calendar integration
- [ ] Weather widget
- [ ] Drag-and-drop widget reordering
- [ ] Customizable themes

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

Built with ❤️ using Next.js and Tailwind CSS
