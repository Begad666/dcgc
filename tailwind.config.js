import { red, amber, emerald, sky } from "tailwindcss/colors";
import { brandPrimary, brandSecondary, brandAccent, brandPrimarySource } from "./colors";
const options = {
	"--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
	"--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
	"--rounded-badge": "0.5rem", // border radius rounded-badge utility class, used in badges and similar
	"--animation-btn": "0.2s", // duration of animation when you click on button
	"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
	"--btn-text-case": "none", // set default text transform for buttons
	"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
	"--border-btn": "1px", // border width of buttons
	"--tab-border": "1px", // border width of tabs
	"--tab-radius": "0.5rem" // border radius of tabs
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	plugins: [require("@tailwindcss/typography"), require("daisyui")],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Cairo", "sans-serif"],
				serif: ["Aleo", "serif"]
			},
			colors: {
				brandPrimary,
				brandSecondary,
				brandAccent,
				primary: {
					...brandPrimary
				},
				info: {
					...sky,
					DEFAULT: sky[500]
				},
				success: {
					...emerald,
					DEFAULT: emerald[500]
				},
				warning: {
					...amber,
					DEFAULT: amber[500]
				},
				danger: red
			}
		}
	},

	daisyui: {
		base: true,
		styled: true,
		utils: true,
		themes: [
			{
				light: {
					primary: brandPrimary[500],
					secondary: brandSecondary[500],
					accent: brandAccent[500],
					neutral: brandPrimary[300],
					"base-100": brandPrimary[50],
					"base-200": brandPrimary[100],
					"base-300": brandPrimary[200],
					"base-content": brandPrimarySource,
					info: sky[700],
					success: emerald[700],
					warning: amber[700],
					error: red[700],

					...options
				}
				// Who needs dark mode, anyway? :)
			}
		],
		rtl: false
	}
};
