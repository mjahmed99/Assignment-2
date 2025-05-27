import ThemeToggle from './components/ThemeToggle';

function App() {
  // ...existing code
  return (
    <ThemeProvider>
      <TaskStatsProvider tasks={tasks}>
        <div className="app-container">
          <header className="header">
            <h1>Smart Task Manager</h1>
            <ThemeToggle />
          </header>
          {/* rest of your components */}
        </div>
      </TaskStatsProvider>
    </ThemeProvider>
