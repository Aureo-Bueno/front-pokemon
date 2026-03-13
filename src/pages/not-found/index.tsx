/**
 * @file src/pages/not-found/index.tsx
 * Page component responsible for one route view.
 */

import type { JSX } from "react";
import { Link } from "react-router-dom";

/**
 * Renders the NotFound view component.
 */
export function NotFound(): JSX.Element {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <h1 style={{ fontSize: "clamp(36px, 10vw, 48px)", marginBottom: "20px" }}>
        404
      </h1>
      <p style={{ fontSize: "clamp(16px, 4vw, 20px)", marginBottom: "30px", color: "#666" }}>
        Página não encontrada
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
        }}
      >
        Voltar para Home
      </Link>
    </div>
  );
}
