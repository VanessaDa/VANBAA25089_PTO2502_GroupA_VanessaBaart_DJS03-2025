/**
 * StatePanel: centered message panel for error/empty states.
 * @module components/StatePanel
 * @param {{ title:string, message:string, action?:import('react').ReactNode }} props
 * @returns {JSX.Element}
 */
import React from "react";

export default function StatePanel({ title, message, action }) {
  return (
    <div className="state-panel" role="region" aria-labelledby="state-title">
      <h3 id="state-title">{title}</h3>
      <p>{message}</p>
      {action && <div className="state-panel__action">{action}</div>}
    </div>
  );
}
