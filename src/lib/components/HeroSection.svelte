<script lang="ts">
	import { MapPin, Clock, Coffee } from '@lucide/svelte';
	import { fly, scale, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// Helper for consistent transition easing
	const transitionParams = { duration: 800, easing: cubicOut };
</script>

<section
	class="grainy-gradient-sage relative flex min-h-screen items-center justify-center overflow-hidden"
>
	<div class="absolute inset-0 z-0">
		<div
			class="absolute top-20 left-10 h-64 w-64 rounded-full bg-[#E6B325] opacity-20 blur-3xl"
		></div>
		<div
			class="absolute right-10 bottom-20 h-80 w-80 rounded-full bg-[#D97847] opacity-20 blur-3xl"
		></div>
	</div>

	<div class="relative z-10 container mx-auto px-4 py-20">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="text-center lg:text-left">
				<div in:scale={{ ...transitionParams, start: 0.8, delay: 200 }} class="mb-4 inline-block">
					<Coffee class="mx-auto h-16 w-16 text-white lg:mx-0" strokeWidth={1.5} />
				</div>

				<h1
					in:fly={{ ...transitionParams, y: 20, delay: 300 }}
					class="mb-4 text-6xl tracking-tight text-white md:text-7xl lg:text-8xl"
				>
					Bonfim
				</h1>

				<p
					in:fly={{ ...transitionParams, y: 20, delay: 400 }}
					class="mb-8 text-2xl font-light text-white/90 md:text-3xl"
				>
					Brunch & Specialty Coffee
				</p>

				<div class="mb-8 space-y-4">
					<div
						in:fly={{ ...transitionParams, y: 20, delay: 500 }}
						class="flex items-start gap-4 rounded-3xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
					>
						<MapPin class="mt-1 h-6 w-6 flex-shrink-0 text-[#8BA888]" />
						<div class="text-left">
							<p class="font-semibold text-[#2C3E2C]">Find Us</p>
							<p class="text-sm text-[#6B7C6B]">Rua do Bonfim 123, Porto</p>
						</div>
					</div>

					<div
						in:fly={{ ...transitionParams, y: 20, delay: 550 }}
						class="flex items-start gap-4 rounded-3xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
					>
						<Clock class="mt-1 h-6 w-6 flex-shrink-0 text-[#8BA888]" />
						<div class="text-left">
							<p class="font-semibold text-[#2C3E2C]">Hours</p>
							<p class="text-sm text-[#6B7C6B]">Mon-Fri: 8am-6pm | Sat-Sun: 9am-7pm</p>
						</div>
					</div>
				</div>

				<div
					in:fly={{ ...transitionParams, y: 20, delay: 600 }}
					class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
				>
					<a
						href="#menu"
						class="pill-button bg-[#E6B325] text-center font-semibold text-[#2C3E2C] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#D19B0F]"
					>
						View Menu
					</a>
					<a
						href="#contact"
						class="pill-button bg-white/90 text-center font-semibold text-[#2C3E2C] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white"
					>
						Reserve Table
					</a>
				</div>
			</div>

			<div class="relative" in:fly={{ ...transitionParams, x: 30, delay: 400 }}>
				<div class="grid grid-cols-2 gap-4">
					<div
						in:scale={{ ...transitionParams, start: 0.8, delay: 600 }}
						class="arch-shape h-64 overflow-hidden shadow-2xl"
					>
						<img
							src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
							alt="Specialty coffee"
							class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
						/>
					</div>

					<div
						in:scale={{ ...transitionParams, start: 0.8, delay: 700 }}
						class="arch-shape mt-8 h-64 overflow-hidden shadow-2xl"
					>
						<img
							src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80"
							alt="Brunch plate"
							class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
						/>
					</div>

					<div
						in:scale={{ ...transitionParams, start: 0.8, delay: 800 }}
						class="arch-shape -mt-8 h-64 overflow-hidden shadow-2xl"
					>
						<img
							src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"
							alt="Coffee brewing"
							class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
						/>
					</div>

					<div
						in:scale={{ ...transitionParams, start: 0.8, delay: 900 }}
						class="arch-shape h-64 overflow-hidden shadow-2xl"
					>
						<img
							src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80"
							alt="Cozy interior"
							class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
		in:fade={{ delay: 1000, duration: 600 }}
		class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
	>
		<div class="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/60 p-2">
			<div class="animate-bounce-slow h-1.5 w-1.5 rounded-full bg-white"></div>
		</div>
	</div>
</section>

<style>
	/* We replicate Framer Motion's repeat animation using standard CSS keyframes.
     This avoids runtime overhead for a simple continuous loop.
  */
	@keyframes bounce-slow {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(12px);
		}
	}

	.animate-bounce-slow {
		animation: bounce-slow 1.5s infinite ease-in-out;
	}

	/* Ensure you have .grainy-gradient-sage, .arch-shape, and .pill-button 
     defined in your global app.css or tailwind config, as they were 
     present in the source file.
  */
</style>
