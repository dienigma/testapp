import React from "react";

export default function Menu() {
  return (
    <aside class="menu has-text-white">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <a style={{ color: "white" }}>
            1. Intro <p className="is-pulled-right">10 min</p>{" "}
          </a>
        </li>
        <li>
          <a style={{ color: "white" }}>
            2. Intro <p className="is-pulled-right">10 min</p>
          </a>
        </li>
      </ul>
    </aside>
  );
}
