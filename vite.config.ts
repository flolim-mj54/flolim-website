import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,       // 무조건 5173 포트를 사용하라고 지정
    strictPort: true, // 만약 5173 포트가 이미 사용 중이라면 다음 포트로 넘어가지 않고 에러를 띄움
  },
});
