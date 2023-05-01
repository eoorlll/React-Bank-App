import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: import.meta.env.VITE_API_BASE_URL,
  plugins: [react()],
});
