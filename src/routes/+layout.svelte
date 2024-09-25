<script>
	import '../globals.css';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<div class="flex flex-col h-screen">
	<header class="flex items-center justify-between py-2 px-8 border-b">
		<div>Assetter</div>
		<div class="space-x-2">
			<Button variant="ghost">Корзина</Button>
			<Button href="/me">Личный кабинет</Button>
		</div>
	</header>
	<main class="flex-1 bg-background">
		<slot />
	</main>
</div>
