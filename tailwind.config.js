/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",    // deep ocean blue — trust, reliability (CTAs & headings)
        secondary: "#F6A518",  // warm gold — supportive highlights
        accent: "#FF5A5F",     // energetic red/pink for micro-CTAs
        neutralDark: "#111827",// main text
        neutralLight: "#F7FAFC"// backgrounds
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Roboto", "system-ui", "sans-serif"]
      },
      screens: { sm: "640px", md: "641px", lg: "1024px" }
    }
  },
  plugins: [],
}