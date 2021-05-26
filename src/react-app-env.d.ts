/// <reference types="react-scripts" />

declare namespace NodeJS {
	// Env
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production';
		PUBLIC_URL: string;
	}
}

// Global Window
interface Window {
	Stripe: any;
}
