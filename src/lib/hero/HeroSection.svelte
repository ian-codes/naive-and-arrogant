<script>
    import Description from "./Description.svelte";
    import Hero from "./Hero.svelte";

    import { isPhaseOne } from '$lib/store'; 
</script>


{#if $isPhaseOne}
<section class="hero-container">
    <Hero />
    <!-- <Description /> -->
</section>
{/if}


<style>
    .hero-container {
        margin: 2rem 0;
        display: flex;
        flex-direction: column;

        animation: appear forwards 3s ease;
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