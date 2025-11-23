import { TaskList } from '@/components/TaskList';
import { NotesPad } from '@/components/NotesPad';
import { PromptLibrary } from '@/components/PromptLibrary';
import { QuickLinks } from '@/components/QuickLinks';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Command Center
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Your personal AI-powered cockpit
            </p>
          </div>
          <ThemeToggle />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
              Today&apos;s Tasks
            </h2>
            <TaskList />
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
              Quick Notes
            </h2>
            <NotesPad />
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 md:col-span-2">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
              Quick Links
            </h2>
            <QuickLinks />
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 md:col-span-2">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
              AI Prompt Library
            </h2>
            <PromptLibrary />
          </section>
        </div>
      </div>
    </main>
  );
}
