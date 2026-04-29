import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cspDev =
  "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; connect-src 'self' ws://localhost:8080 http://localhost:8080 https://pokeapi.co; img-src 'self' data: blob: https://raw.githubusercontent.com https://pokeapi.co; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; font-src 'self' data:; manifest-src 'self'; upgrade-insecure-requests";

const cspPreview =
  "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; connect-src 'self' https://pokeapi.co; img-src 'self' data: blob: https://raw.githubusercontent.com https://pokeapi.co; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self' data:; manifest-src 'self'; upgrade-insecure-requests";

const securityHeaders = {
  "Content-Security-Policy": cspPreview,
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@tanstack/react-query")) {
              return "react-query";
            }

            if (id.includes("react-router-dom")) {
              return "router";
            }

            if (id.includes("styled-components")) {
              return "styled";
            }

            if (id.includes("axios")) {
              return "http";
            }

            if (id.includes("react-dom") || id.includes("react")) {
              return "react";
            }
          }
        },
      },
    },
  },
  server: {
    port: 8080,
    headers: {
      ...securityHeaders,
      "Content-Security-Policy": cspDev,
    },
  },
  preview: {
    headers: securityHeaders,
  },
});
