import React from "react";
import Team from "./Team";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Personal Career Assistant</h1>
        <p className="subtitle">Procurement & Leadership Smart Dashboard</p>
      </header>
      <main>
        <section>
          <h2>Meet Your AI Team</h2>
          <Team />
        </section>
        <section>
          <h2>What can this system do?</h2>
          <ul>
            <li>Plan and track your procurement career pathway</li>
            <li>Weekly coaching with AI agents specialized in: Leadership, Data, Productivity...</li>
            <li>Task tracker with milestones, feedback and reminders</li>
            <li>Live dashboard with agent avatars (circular meeting style)</li>
            <li>Dual language support (Arabic / English)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
