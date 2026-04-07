@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Plus Jakarta Sans", "Inter", ui-sans-serif, system-ui, sans-serif;
  
  --color-brand-black: #050505;
  --color-brand-green: #00FF41;
  --color-brand-green-hover: #00D135;
  
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-3xl: 2rem;
}

@utility glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

@utility glass-dark {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

@layer base {
  body {
    @apply bg-brand-black text-white antialiased selection:bg-brand-green selection:text-black;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #050505;
}

::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #333;
}
