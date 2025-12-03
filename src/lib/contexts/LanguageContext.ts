import { browser } from '$app/environment';

type Language = 'pt' | 'en';

class LanguageStore {
	language = $state<Language>('pt');
	translations = $state<Record<string, any>>({});

	constructor() {
		if (browser) {
			// Load saved language preference
			const savedLang = localStorage.getItem('language') as Language;
			if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
				this.language = savedLang;
			}

			// Load initial translations
			this.loadTranslations();
		}
	}

	async loadTranslations() {
		try {
			const module = await import(`../translations/${this.language}.json`);
			this.translations = module.default;
		} catch (error) {
			console.error('Failed to load translations:', error);
		}
	}

	setLanguage(lang: Language) {
		this.language = lang;
		if (browser) {
			localStorage.setItem('language', lang);
		}
		this.loadTranslations();
	}

	t(key: string): string {
		const keys = key.split('.');
		let value: any = this.translations;

		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = value[k];
			} else {
				return key; // Return key if translation not found
			}
		}

		return typeof value === 'string' ? value : key;
	}
}

export const languageStore = new LanguageStore();
