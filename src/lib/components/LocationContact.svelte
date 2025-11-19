<script lang="ts">
	import { MapPin, Phone, Mail, Instagram, Clock } from '@lucide/svelte';
	import { fly, scale } from 'svelte/transition';

	// --- Data ---
	const instagramPosts = [
		'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
		'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
		'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&q=80',
		'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400&q=80',
		'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80',
		'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&q=80'
	];

	const schedule = [
		{ day: 'Monday', hours: '8:00 AM - 6:00 PM' },
		{ day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
		{ day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
		{ day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
		{ day: 'Friday', hours: '8:00 AM - 6:00 PM' },
		{ day: 'Saturday', hours: '9:00 AM - 7:00 PM' },
		{ day: 'Sunday', hours: '9:00 AM - 7:00 PM' }
	];

	// --- State ---
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		date: '',
		guests: '',
		message: ''
	});

	// --- Handlers ---
	const handleSubmit = (e: Event) => {
		e.preventDefault();
		// Handle form submission
		console.log('Reservation submitted:', formData);
		alert("Reservation request submitted! We'll contact you soon.");
	};
</script>

<section id="contact" class="grainy-gradient-mustard relative py-24">
	<div
		class="absolute top-0 right-0 left-0 -mt-16 h-16 bg-[#F8F4E8]"
		style="clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 100%)"
	></div>

	<div class="container mx-auto px-4">
		<div in:fly={{ y: 30, duration: 600 }} class="mb-12 text-center">
			<h2 class="mb-4 text-5xl text-white md:text-6xl">Visit Us</h2>
			<p class="mx-auto max-w-2xl text-lg text-white/90">
				Located in the heart of Porto's historic Bonfim neighborhood
			</p>
		</div>

		<div class="mb-16 grid gap-12 lg:grid-cols-2">
			<div in:fly={{ x: -30, duration: 600 }}>
				<div class="mb-6 overflow-hidden rounded-xl border-none bg-white shadow-2xl">
					<div
						class="relative flex h-64 items-center justify-center bg-gradient-to-br from-[#8BA888] to-[#6B8A6B]"
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.5555555555555!2d-8.6133!3d41.1579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA5JzI4LjQiTiA4wrAzNic0Ny45Ilc!5e0!3m2!1sen!2spt!4v1234567890"
							title="Map"
							width="100%"
							height="100%"
							style="border: 0"
							allowfullscreen={true}
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							class="absolute inset-0"
						></iframe>
					</div>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					<div class="rounded-xl border-none bg-white p-6 shadow-lg">
						<MapPin class="mb-3 h-8 w-8 text-[#8BA888]" />
						<h4 class="mb-2 font-semibold text-[#2C3E2C]">Address</h4>
						<p class="text-sm text-[#6B7C6B]">
							Rua do Bonfim 123<br />
							4300-067 Porto<br />
							Portugal
						</p>
					</div>

					<div class="rounded-xl border-none bg-white p-6 shadow-lg">
						<Phone class="mb-3 h-8 w-8 text-[#8BA888]" />
						<h4 class="mb-2 font-semibold text-[#2C3E2C]">Contact</h4>
						<p class="text-sm text-[#6B7C6B]">
							+351 222 000 000<br />
							hello@bonfim.pt
						</p>
					</div>
				</div>

				<div class="mt-4 rounded-xl border-none bg-white p-6 shadow-lg">
					<div class="mb-4 flex items-center gap-3">
						<Clock class="h-8 w-8 text-[#8BA888]" />
						<h4 class="text-xl font-semibold text-[#2C3E2C]">Opening Hours</h4>
					</div>
					<div class="space-y-2">
						{#each schedule as item (item.day)}
							<div class="flex justify-between border-b border-[#E8DCC8] py-2 last:border-0">
								<span class="font-medium text-[#2C3E2C]">{item.day}</span>
								<span class="text-[#6B7C6B]">{item.hours}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div in:fly={{ x: 30, duration: 600 }}>
				<div class="rounded-xl border-none bg-white p-8 shadow-2xl">
					<h3 class="mb-6 text-3xl text-[#2C3E2C]">Reserve a Table</h3>
					<form onsubmit={handleSubmit} class="space-y-4">
						<div>
							<input
								type="text"
								placeholder="Your Name"
								bind:value={formData.name}
								class="flex h-10 w-full rounded-2xl border-[#D4C9B5] bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-[#8BA888] focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								required
							/>
						</div>

						<div class="grid gap-4 sm:grid-cols-2">
							<input
								type="email"
								placeholder="Email"
								bind:value={formData.email}
								class="flex h-10 w-full rounded-2xl border-[#D4C9B5] bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-[#8BA888] focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:outline-none"
								required
							/>
							<input
								type="tel"
								placeholder="Phone"
								bind:value={formData.phone}
								class="flex h-10 w-full rounded-2xl border-[#D4C9B5] bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-[#8BA888] focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:outline-none"
								required
							/>
						</div>

						<div class="grid gap-4 sm:grid-cols-2">
							<input
								type="date"
								bind:value={formData.date}
								class="flex h-10 w-full rounded-2xl border-[#D4C9B5] bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-[#8BA888] focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:outline-none"
								required
							/>
							<input
								type="number"
								placeholder="Number of Guests"
								bind:value={formData.guests}
								min="1"
								class="flex h-10 w-full rounded-2xl border-[#D4C9B5] bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-[#8BA888] focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:outline-none"
								required
							/>
						</div>

						<textarea
							placeholder="Special requests or dietary requirements..."
							bind:value={formData.message}
							class="flex min-h-32 w-full rounded-2xl border-[#D4C9B5] bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-[#8BA888] focus:ring-2 focus:ring-[#8BA888] focus:ring-offset-2 focus:outline-none"
						></textarea>

						<button
							type="submit"
							class="pill-button w-full rounded-full bg-[#8BA888] px-4 py-2 font-semibold text-white shadow-lg transition-colors hover:bg-[#6B8A6B]"
						>
							Request Reservation
						</button>
					</form>
				</div>
			</div>
		</div>

		<div in:fly={{ y: 30, duration: 600 }} class="text-center">
			<div class="mb-8 flex items-center justify-center gap-3">
				<Instagram class="h-8 w-8 text-white" />
				<h3 class="text-4xl text-white">@bonfim_porto</h3>
			</div>

			<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
				{#each instagramPosts as post, index}
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						in:scale={{ start: 0.8, duration: 400, delay: index * 50 }}
						class="block aspect-square overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
					>
						<img
							src={post}
							alt="Instagram post"
							class="h-full w-full object-cover transition-opacity hover:opacity-90"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
