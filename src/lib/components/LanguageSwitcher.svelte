<script>
	import { scale } from 'svelte/transition';
	import { Globe } from '@lucide/svelte';
	import { languageStore } from '$lib/contexts/LanguageContext';
</script>

<div class="fixed top-6 right-6 z-50" in:scale={{ delay: 500, duration: 300, start: 0.8 }}>
	<div class="flex items-center gap-2 rounded-full bg-white/95 p-2 shadow-lg backdrop-blur-sm">
		<Globe class="ml-2 h-5 w-5 text-[#8BA888]" />
		<button
			onclick={() => languageStore.setLanguage('pt')}
			class="rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 {languageStore.language ===
			'pt'
				? 'bg-[#8BA888] text-white'
				: 'text-[#6B7C6B] hover:text-[#8BA888]'}"
		>
			PT
		</button>
		<button
			onclick={() => languageStore.setLanguage('en')}
			class="rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 {languageStore.language ===
			'en'
				? 'bg-[#8BA888] text-white'
				: 'text-[#6B7C6B] hover:text-[#8BA888]'}"
		>
			EN
		</button>
	</div>
</div>
