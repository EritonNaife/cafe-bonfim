<script lang="ts">
	import { Heart, Coffee, Users, Award } from '@lucide/svelte';
	import { fly, scale } from 'svelte/transition';

	// Static data
	const values = [
		{
			icon: Coffee,
			title: 'Quality First',
			description:
				'We source the finest beans and ingredients, working directly with local suppliers and sustainable farms.'
		},
		{
			icon: Heart,
			title: 'Made with Love',
			description: 'Every dish and drink is crafted with care, bringing warmth and joy to your day.'
		},
		{
			icon: Users,
			title: 'Community Hub',
			description:
				"More than a café - we're a gathering place for Porto's creative and friendly locals."
		},
		{
			icon: Award,
			title: 'Award-Winning',
			description: "Recognized as one of Porto's best brunch spots by Time Out Porto and Eater."
		}
	];
</script>

<section class="grainy-gradient-orange relative py-24">
	<div
		class="absolute top-0 right-0 left-0 -mt-16 h-16 bg-[#E6B325]"
		style="clip-path: polygon(0 0, 100% 40%, 100% 100%, 0 100%)"
	></div>

	<div class="container mx-auto px-4">
		<div class="mb-20 grid items-center gap-16 lg:grid-cols-2">
			<div in:fly={{ x: -30, duration: 600 }}>
				<h2 class="mb-6 text-5xl text-white md:text-6xl">Our Story</h2>
				<div class="space-y-4 text-lg leading-relaxed text-white/90">
					<p>
						Born in Porto's vibrant Bonfim neighborhood in 2019, we set out to create more than just
						another café. We wanted to build a home where locals and travelers could slow down,
						savor exceptional food, and connect over world-class coffee.
					</p>
					<p>
						Our founder, Sofia, spent years traveling the world's best brunch spots—from Melbourne
						to Copenhagen to Los Angeles—before returning to her hometown with a vision: bring that
						same quality and creativity to Porto, but with a distinctly Portuguese soul.
					</p>
					<p>
						Today, we're proud to serve our community with locally-sourced ingredients, specialty
						coffee from independent roasters, and a warm, welcoming atmosphere that feels like
						Sunday morning at home.
					</p>
				</div>
			</div>

			<div in:fly={{ x: 30, duration: 600 }} class="relative">
				<div class="arch-shape overflow-hidden shadow-2xl">
					<img
						src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
						alt="Bonfim interior"
						width="800"
						height="600"
						class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
					/>
				</div>

				<div
					in:scale={{ delay: 400, duration: 500 }}
					class="absolute -right-6 -bottom-6 rounded-full bg-white p-6 shadow-2xl"
				>
					<div class="text-center">
						<div class="text-4xl font-bold text-[#D97847]">5+</div>
						<div class="text-sm text-[#6B7C6B]">
							Years Serving<br />Porto
						</div>
					</div>
				</div>
			</div>
		</div>

		<div in:fly={{ y: 30, duration: 600 }}>
			<h3 class="mb-12 text-center text-4xl text-white">What We Believe</h3>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each values as value, index (value.title)}
					<div
						in:fly={{ y: 30, duration: 500, delay: index * 100 }}
						class="rounded-3xl bg-white/95 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl"
					>
						<value.icon class="mb-4 h-12 w-12 text-[#D97847]" strokeWidth={1.5} />
						<h4 class="mb-3 text-xl font-semibold text-[#2C3E2C]">
							{value.title}
						</h4>
						<p class="text-sm leading-relaxed text-[#6B7C6B]">
							{value.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
