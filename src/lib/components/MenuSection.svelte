<script lang="ts">
	import { Leaf, Wheat } from '@lucide/svelte';
	import { fly, fade } from 'svelte/transition';

	type DietaryTag = 'all' | 'vegan' | 'gluten-free';

	interface MenuItem {
		name: string;
		description: string;
		price: string;
		dietary: DietaryTag[];
		image: string;
	}

	// State
	let activeFilter = $state<DietaryTag>('all');

	// Data
	const brunchItems: MenuItem[] = [
		{
			name: 'Avocado Toast Deluxe',
			description: 'Sourdough, smashed avocado, poached eggs, cherry tomatoes',
			price: '€12',
			dietary: ['vegan', 'gluten-free'],
			image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&q=80'
		},
		{
			name: 'Porto French Toast',
			description: 'Brioche, caramelized figs, mascarpone, honey drizzle',
			price: '€10',
			dietary: [],
			image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80'
		},
		{
			name: 'Açaí Power Bowl',
			description: 'Açaí, granola, fresh berries, coconut flakes, chia seeds',
			price: '€9',
			dietary: ['vegan', 'gluten-free'],
			image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80'
		},
		{
			name: 'Eggs Benedict',
			description: 'English muffin, poached eggs, hollandaise, smoked salmon',
			price: '€14',
			dietary: [],
			image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80'
		}
	];

	const coffeeItems: MenuItem[] = [
		{
			name: 'Single Origin Espresso',
			description: 'Rotating selection from our featured roasters',
			price: '€2.50',
			dietary: ['vegan', 'gluten-free'],
			image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80'
		},
		{
			name: 'Flat White',
			description: 'Double shot espresso, microfoam, latte art',
			price: '€3.50',
			dietary: ['gluten-free'],
			image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80'
		},
		{
			name: 'Cold Brew Tonic',
			description: 'House cold brew, tonic water, orange zest',
			price: '€4.50',
			dietary: ['vegan', 'gluten-free'],
			image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&q=80'
		},
		{
			name: 'Matcha Latte',
			description: 'Ceremonial grade matcha, oat milk, honey',
			price: '€4',
			dietary: ['vegan', 'gluten-free'],
			image: 'https://images.unsplash.com/photo-1561658286-ecb9fe9d8480?w=400&q=80'
		}
	];

	// Logic
	function getFilteredItems(items: MenuItem[]) {
		if (activeFilter === 'all') return items;
		return items.filter((item) => item.dietary.includes(activeFilter));
	}
</script>

<section id="menu" class="grainy-gradient-cream relative py-24">
	<div
		class="absolute top-0 right-0 left-0 -mt-16 h-16 bg-[#8BA888]"
		style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 60%)"
	></div>

	<div class="container mx-auto px-4">
		<div in:fly={{ y: 30, duration: 600 }} class="mb-12 text-center">
			<h2 class="mb-4 text-5xl text-[#2C3E2C] md:text-6xl">Our Menu</h2>
			<p class="mx-auto max-w-2xl text-lg text-[#6B7C6B]">
				Crafted with love, served with care. Fresh, seasonal ingredients celebrating Porto's
				flavors.
			</p>
		</div>

		<div
			in:fly={{ y: 20, duration: 500, delay: 200 }}
			class="mb-12 flex flex-wrap justify-center gap-3"
		>
			<button
				onclick={() => (activeFilter = 'all')}
				class="pill-button transition-all duration-300 {activeFilter === 'all'
					? 'scale-105 bg-[#8BA888] text-white shadow-lg'
					: 'bg-white text-[#2C3E2C] hover:bg-[#8BA888]/10'}"
			>
				All Items
			</button>
			<button
				onclick={() => (activeFilter = 'vegan')}
				class="pill-button flex items-center gap-2 transition-all duration-300 {activeFilter ===
				'vegan'
					? 'scale-105 bg-[#8BA888] text-white shadow-lg'
					: 'bg-white text-[#2C3E2C] hover:bg-[#8BA888]/10'}"
			>
				<Leaf class="h-4 w-4" />
				Vegan
			</button>
			<button
				onclick={() => (activeFilter = 'gluten-free')}
				class="pill-button flex items-center gap-2 transition-all duration-300 {activeFilter ===
				'gluten-free'
					? 'scale-105 bg-[#8BA888] text-white shadow-lg'
					: 'bg-white text-[#2C3E2C] hover:bg-[#8BA888]/10'}"
			>
				<Wheat class="h-4 w-4" />
				Gluten-Free
			</button>
		</div>

		<div class="mb-20">
			<h3 in:fly={{ x: -20, duration: 500 }} class="mb-8 text-center text-4xl text-[#2C3E2C]">
				Brunch Favorites
			</h3>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each getFilteredItems(brunchItems) as item, index (item.name)}
					<div in:fly={{ y: 30, duration: 500, delay: index * 100 }}>
						<div
							class="h-full overflow-hidden rounded-xl border-none bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl"
						>
							<div class="relative h-48 overflow-hidden">
								<img
									src={item.image}
									alt={item.name}
									class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
								/>
								<div
									class="absolute top-3 right-3 rounded-full bg-[#E6B325] px-3 py-1 text-sm font-bold text-[#2C3E2C]"
								>
									{item.price}
								</div>
							</div>
							<div class="p-5">
								<h4 class="mb-2 text-xl font-semibold text-[#2C3E2C]">
									{item.name}
								</h4>
								<p class="mb-3 text-sm text-[#6B7C6B]">{item.description}</p>
								<div class="flex flex-wrap gap-2">
									{#if item.dietary.includes('vegan')}
										<span
											class="inline-flex items-center rounded-full border-none bg-[#8BA888]/10 px-2.5 py-0.5 text-xs font-semibold text-[#6B8A6B] transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
										>
											<Leaf class="mr-1 h-3 w-3" />
											Vegan
										</span>
									{/if}
									{#if item.dietary.includes('gluten-free')}
										<span
											class="inline-flex items-center rounded-full border-none bg-[#E6B325]/10 px-2.5 py-0.5 text-xs font-semibold text-[#D19B0F] transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
										>
											<Wheat class="mr-1 h-3 w-3" />
											GF
										</span>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div>
			<h3 in:fly={{ x: -20, duration: 500 }} class="mb-8 text-center text-4xl text-[#2C3E2C]">
				Specialty Coffee
			</h3>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each getFilteredItems(coffeeItems) as item, index (item.name)}
					<div in:fly={{ y: 30, duration: 500, delay: index * 100 }}>
						<div
							class="h-full overflow-hidden rounded-xl border-none bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl"
						>
							<div class="relative h-48 overflow-hidden">
								<img
									src={item.image}
									alt={item.name}
									class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
								/>
								<div
									class="absolute top-3 right-3 rounded-full bg-[#D97847] px-3 py-1 text-sm font-bold text-white"
								>
									{item.price}
								</div>
							</div>
							<div class="p-5">
								<h4 class="mb-2 text-xl font-semibold text-[#2C3E2C]">
									{item.name}
								</h4>
								<p class="mb-3 text-sm text-[#6B7C6B]">{item.description}</p>
								<div class="flex flex-wrap gap-2">
									{#if item.dietary.includes('vegan')}
										<span
											class="inline-flex items-center rounded-full border-none bg-[#8BA888]/10 px-2.5 py-0.5 text-xs font-semibold text-[#6B8A6B] transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
										>
											<Leaf class="mr-1 h-3 w-3" />
											Vegan
										</span>
									{/if}
									{#if item.dietary.includes('gluten-free')}
										<span
											class="inline-flex items-center rounded-full border-none bg-[#E6B325]/10 px-2.5 py-0.5 text-xs font-semibold text-[#D19B0F] transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
										>
											<Wheat class="mr-1 h-3 w-3" />
											GF
										</span>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
