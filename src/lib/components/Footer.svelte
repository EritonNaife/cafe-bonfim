<script lang="ts">
	import { Coffee, Instagram, Facebook, Mail, MapPin, Phone } from '@lucide/svelte';
</script>

<footer class="bg-[#2C3E2C] py-12 text-white">
	<div class="container mx-auto px-4">
		<div class="mb-8 grid gap-8 md:grid-cols-4">
			<div>
				<div class="mb-4 flex items-center gap-2">
					<Coffee class="h-8 w-8" />
					<span class="font-serif text-2xl">Bonfim</span>
				</div>
				<p class="text-sm text-white/70">
					Porto's favorite brunch spot & specialty coffee bar in the heart of Bonfim.
				</p>
			</div>

			<div>
				<h4 class="mb-4 font-semibold">Quick Links</h4>
				<ul class="space-y-2 text-sm text-white/70">
					<li><a href="#menu" class="transition-colors hover:text-white">Menu</a></li>
					<li><a href="#contact" class="transition-colors hover:text-white">Reservations</a></li>
					<li><a href="#contact" class="transition-colors hover:text-white">Contact</a></li>
					<li><a href="#" class="transition-colors hover:text-white">Careers</a></li>
				</ul>
			</div>

			<div>
				<h4 class="mb-4 font-semibold">Contact</h4>
				<ul class="space-y-3 text-sm text-white/70">
					<li class="flex items-start gap-2">
						<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0" />
						<span>Rua do Bonfim 123<br />4300-067 Porto</span>
					</li>
					<li class="flex items-center gap-2">
						<Phone class="h-4 w-4 flex-shrink-0" />
						<span>+351 222 000 000</span>
					</li>
					<li class="flex items-center gap-2">
						<Mail class="h-4 w-4 flex-shrink-0" />
						<span>hello@bonfim.pt</span>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="mb-4 font-semibold">Follow Us</h4>
				<div class="flex gap-3">
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#8BA888]"
					>
						<Instagram class="h-5 w-5" />
					</a>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#8BA888]"
					>
						<Facebook class="h-5 w-5" />
					</a>
					<a
						href="mailto:hello@bonfim.pt"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#8BA888]"
					>
						<Mail class="h-5 w-5" />
					</a>
				</div>
			</div>
		</div>

		<div class="border-t border-white/10 pt-8 text-center text-sm text-white/50">
			<p>&copy; 2024 Bonfim Porto. All rights reserved. Made with ❤️ in Porto.</p>
		</div>
	</div>
</footer>
