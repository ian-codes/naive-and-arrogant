<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import Transition from "./Transition.svelte";

    let isReady = false;
    let random = (Math.round(Math.random() * 10)) % 2 == 0;

    onMount(() => {
        isReady = random == undefined ? false : true;
    });
</script>


<Transition />
<div class="outer-container">
    <div class="cntnr">
        {#if isReady}
                {#if random}
                    <div class="logo"></div>
                {:else}
                    <div class="text-logo" style="background-image: url('{base}/logo/text-logo.jpeg');"></div>
                {/if}
        {/if}
    </div>
</div>


<style>
    .outer-container {
        z-index: 99;
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    .cntnr {
        background: radial-gradient(white, rgb(225, 223, 209));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: intro 1.5s forwards ease;
        pointer-events: none;
    }

    .text-logo {
        z-index: 2;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        inset: 0;
        position: fixed;
        mix-blend-mode: darken;
    }

    .logo {
        z-index: 2;
        background-image: url("$lib/header/logo.jpg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100px;
        aspect-ratio: 1;
        border-radius: 100%;
        margin-bottom: 2rem;
        animation: spin 1s forwards ease .2s;
        filter: saturate(0);
    }

    @keyframes spin {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(720deg);
        }
    }

    @keyframes intro {
        0% {
            opacity: 1;
            height: 100%;
            width: 100%;
        }
        60% {
            opacity: 1;
            height: 100%;
            width: 100%;
            filter: blur(0);
        }
        99% {
            opacity: 0;
            height: 0;
            width: 0;
            filter: blur(50px);
        }
        100% {
            opacity: 0;
            display: none;
        }
    }
</style>