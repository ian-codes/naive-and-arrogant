<script>
    import Logo from "./Logo.svelte";
    import LogoText from "./LogoText.svelte";

    import { isPhaseOne } from "$lib/store";
</script>


<header>
    <Logo />

    {#if !$isPhaseOne}
    <LogoText />
    {/if}
</header>


<style>
    header {
        padding: 2rem 0;
        margin: auto;
        max-width: var(--max-width);

        display: flex;
        justify-content: center;
        gap: 2em;

        transition: all 1s ease;
    }
</style>