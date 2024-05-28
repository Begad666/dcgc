<script lang="ts">
	import { page } from "$app/stores";
	import logo from "../images/logo.png";
	import moeLogo from "../images/moe-logo.svg";

	export let setHidden = (isHidden: boolean) => {};
</script>

<header class="navbar text-base-content">
	<div class="flex-none sm:hidden">
		<button class="btn btn-square btn-ghost" on:click={() => setHidden(false)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path></svg
			>
		</button>
	</div>
	<div class="flex-1">
		<a
			class="btn btn-ghost text-l sm:text-xl"
			href="/"
			aria-current={$page.url.pathname === "/"}>التوجيه المهني</a
		>
	</div>
	<div class="flex-none">
		<img src={moeLogo} alt="شعار وزارة التعليم" class="w-24" />
		<div class="w-[1px] bg-black h-12 m-2"></div>
		<img src={logo} alt="شعار مسارك" class="w-20" height="114" width="128" />
	</div>
</header>
