
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
				'creepster': ['Creepster', 'cursive'],
				'nosifer': ['Nosifer', 'cursive'],
				'metal': ['Metal Mania', 'cursive'],
				'eater': ['Eater', 'cursive'],
				'orbitron': ['Orbitron', 'sans-serif'],
				'audiowide': ['Audiowide', 'cursive'],
				'press-start': ['Press Start 2P', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom ambigram colors
				'ambigram-purple': '#8B5CF6',
				'ambigram-blue': '#3B82F6',
				'ambigram-indigo': '#6366F1',
				'ambigram-pink': '#EC4899',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'ambigram-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'rotate-flip': {
					'0%': { transform: 'rotateX(0deg)' },
					'100%': { transform: 'rotateX(180deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'flip-fade': {
					'0%': { 
						opacity: '1',
						transform: 'rotateX(0deg)' 
					},
					'50%': { 
						opacity: '0.3',
						transform: 'rotateX(90deg)' 
					},
					'100%': { 
						opacity: '1',
						transform: 'rotateX(180deg)' 
					}
				},
				'slide-flip': {
					'0%': { 
						transform: 'translateY(0) rotateX(0deg)',
						opacity: '1'
					},
					'25%': { 
						transform: 'translateY(-10px) rotateX(45deg)',
						opacity: '0.7'
					},
					'75%': { 
						transform: 'translateY(-10px) rotateX(135deg)',
						opacity: '0.7'
					},
					'100%': { 
						transform: 'translateY(0) rotateX(180deg)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'rotate-flip': 'rotate-flip 0.8s ease-in-out',
				'float': 'float 3s ease-in-out infinite',
				'flip-fade': 'flip-fade 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-flip': 'slide-flip 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
