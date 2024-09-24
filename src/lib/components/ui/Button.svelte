<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	import cn from 'classnames';

	type Variants = 'default' | 'ghost';

	const variants: Record<Variants, string> = {
		default: 'bg-black text-white hover:bg-black/80',
		ghost: 'hover:bg-neutral-200'
	};

	export let variant: Variants = 'default';
	interface $$Props extends HTMLButtonAttributes {
		variant?: Variants;
	}
</script>

<button
	{...$$restProps}
	class={cn('px-3 py-1 rounded-md font-[600] transition', variants[variant])}
>
	<slot />
</button>
