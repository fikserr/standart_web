/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./resources/**/*.blade.php',
		'./resources/**/*.js',
		'./resources/**/*.jsx',
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				fadeIn: "fadeIn 1.5s ease-in",
				tilt: "tilt 10s infinite linear",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				tilt: {
					"0%, 100%": { transform: "rotateZ(0deg)" },
					"50%": { transform: "rotateZ(0.5deg)" },
				},
			},
			backgroundImage: {
				'grid-pattern': "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
			},
			backgroundSize: {
				'grid-pattern': '40px 40px',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
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
				}
			}
		},
		screens: {
			sm500: '500px',
			sm: '640px',
			md: '768px',
			md992: '992px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		}
	},
	plugins: [require("tailwindcss-animate"),
	function ({ addUtilities }) {
		addUtilities({
			'.no-scrollbar': {
				'-ms-overflow-style': 'none',
				'scrollbar-width': 'none',
			},
			'.no-scrollbar::-webkit-scrollbar': {
				display: 'none',
			},
		});
	},],
}