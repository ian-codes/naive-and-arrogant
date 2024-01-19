<script>
    import Description from "./Description.svelte";
    import Hero from "./Hero.svelte";

    import { isPhaseOne } from '$lib/store'; 
</script>



<section class="hero-container">
    <Description />
    <Hero />
</section>


<style>
    .hero-container {
        display: flex;
        flex-direction: column;
        animation: appear forwards 3s ease;
        width: 100%;
        max-width: 100vw;
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