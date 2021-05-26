/// <reference types="react-scripts" />

declare namespace NodeJS {
	// Env
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production';
		PUBLIC_URL: string;
		REACT_APP_BLOG_API_KEY: '';
	}
}

// Global Window
interface Window {
	Stripe: any;
}
