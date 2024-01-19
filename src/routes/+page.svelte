<script>
    import Twitter from "$lib/common/Twitter.svelte";
    import HeroSection from "$lib/hero/HeroSection.svelte";
    import PhaseOne from "$lib/PhaseOne.svelte";
</script>


<div class="outer-container">
    <!-- 
        <PhaseOne />
    -->
    <HeroSection />
</div>

<!-- <Twitter /> -->


<style>
    .outer-container {
        max-width: var(--max-width);
        margin: auto;
    }
</style>