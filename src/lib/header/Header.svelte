<script>
    import Logo from "./Logo.svelte";
    import LogoText from "./LogoText.svelte";
</script>


<header>
    <Logo />
    <LogoText />
</header>


<style>
    header {
        padding: 2rem 0;
        margin: auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2em;

        transition: all 1s ease;
    }
</style>