<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	import cn from 'classnames';

	type Variants = 'primary' | 'ghost';

	const variants: Record<Variants, string> = {
		primary: 'bg-black text-white bg-primary hover:bg-primary/80',
		ghost: 'hover:bg-neutral-200'
	};

	interface $$Props extends HTMLButtonAttributes {
		variant?: Variants;
		href?: string;
	}

	export let variant: Variants = 'primary';
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a
		{...$$restProps}
		class={cn('px-4 py-2 rounded-md font-[600] transition', variants[variant])}
		role="button"
		data-sveltekit-preload-data="hover"
		title="Перейти в личный кабинет"
		{href}
	>
		<slot />
	</a>
{:else}
	<button
		{...$$restProps}
		class={cn('px-4 py-2 rounded-md font-[600] transition', variants[variant])}
	>
		<slot />
	</button>
{/if}
