<script>
    import { isPhaseOne } from '$lib/store';
</script>


<a href="/">
    <div id="logo" class="{$isPhaseOne ? 'lamp' : ''}">
        {#if $isPhaseOne}
        <div class="shadow left" />
        <div class="shadow right" />
        <div class="glow" />
        {/if}
    </div>
</a>



<style>
    .glow {
        z-index: -3;
        position: absolute;
        height: 200vh;
        width: 100%;
        background: rgba(255, 255, 255, 0.308);
        box-shadow: 0 0 500px white;
        top: 0;
        left: 0;
        inset: 0;
    }

    .shadow {
        z-index: -2;
        position: absolute;
        width: 50vw;
        height: 200vh;
        top: -0;
        background: rgba(0, 0, 0, 0.445);
    }

    .left {
        right: 90%;
        clip-path: polygon(0 0, 100% 0, 0 100%);
    }

    .right {
        left: 90%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%);
    }

    #logo {
        position: relative;
        width: 80px;
        aspect-ratio: 1;
        padding: 1rem;
        cursor: pointer;
        border-radius: 100%;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.329);
        background-image: url('$lib/header/logo.jpg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transition: all .5s ease;
    }

    #logo:hover {
        box-shadow: none;
        animation: intro 1s ease;
    }


    .lamp {
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.589) inset, 0 2px 3px rgba(0, 0, 0, 0.329) !important;
        transform: rotateX(-60deg);
        pointer-events: none;
    }


    @keyframes intro {
        0% {
            transform: rotate(0) scale(1);
        }
        50% {
            transform: rotate(360deg) scale(1.2);
        }
        100% {
            transform: rotate(720deg) scale(1);
        }
    }
</style>