<script>
    import { transition } from "$stores/transition.js";

    let isShown = false;

    $: if ($transition) {
        isShown = true;
        setTimeout(() => {
            isShown = false;
        }, 2000);
    }
</script>

{#key $transition}
    {#if isShown}
        <div></div>
    {/if}
{/key}

<style>
    div {
        z-index: 99;
        position: fixed;
        inset: 0;
        background: linear-gradient(-30deg, rgb(4, 24, 41), black);
        backdrop-filter: blur(3px);
        pointer-events: none;
        animation: transition 2s ease forwards;
    }

    @keyframes transition {
        0% {
            opacity: 0;
            backdrop-filter: blur(0);
            filter: hue-rotate(0deg);
        }
        50% {
            opacity: 1;
            backdrop-filter: blur(10px);
        }
        100% {
            opacity: 0;
            backdrop-filter: blur(0);
            filter: hue-rotate(360deg);
        }
    }
</style>