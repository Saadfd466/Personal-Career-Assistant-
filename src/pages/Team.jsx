import React from "react";

const agents = [
  { name: "Miles", role: "Career Coach / Executive Lead", description: "Leads your path, reviews progress, strategic coach.", avatar: "👨‍💼" },
  { name: "Nova", role: "Data Analyst / AI Insights", description: "Analyzes your data, suggests growth steps, AI-powered.", avatar: "🤖" },
  { name: "Wanda", role: "Productivity Integrator", description: "Automation, reminders, integrations (Notion, GCal...)", avatar: "⚙️" },
  { name: "Black Code", role: "Backend Architect", description: "Turns goals into actionable projects, automates skills progress.", avatar: "🧑‍💻" },
  { name: "Nyx", role: "Active Notifier", description: "WhatsApp alerts & fast operations, your async assistant.", avatar: "💬" },
];

export default function Team() {
  return (
    <div className="team-grid">
      {agents.map(agent => (
        <div className="agent-card" key={agent.name}>
          <div className="avatar">{agent.avatar}</div>
          <div className="info">
            <h3>{agent.name}</h3>
            <span className="role">{agent.role}</span>
            <p>{agent.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
