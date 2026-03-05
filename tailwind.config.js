/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'flolim'이라는 이름으로 커스텀 컬러 등록
        flolim: '#18A9C6', 
      }
    },
  },
  plugins: [],
};