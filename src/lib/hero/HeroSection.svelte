<script>
    import Description from "./Description.svelte";
    import Hero from "./Hero.svelte";
</script>


<section class="hero-container">
    <Description />
    <Hero />
</section>


<style>
    .hero-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        animation: appear forwards 3s ease;
        width: 100%;
        max-width: 100vw;
        margin-bottom: 10rem;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>