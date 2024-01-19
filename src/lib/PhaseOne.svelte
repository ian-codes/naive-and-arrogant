<script>
    import { isPhaseOne } from '$lib/store';

    function handleClick() {
        $isPhaseOne = true;
        console.log(isPhaseOne);
    }
</script>


{#if !$isPhaseOne}
<div class="button-container">
    <div class="arrow right"></div>
    <button on:click={() => handleClick()}>
        begin phase one
    </button>
    <div class="arrow left"></div>
</div>
{/if}


<style>
    .button-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5em;
    }

    button {
        color: rgb(230, 230, 230);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1rem;

        background: black;
        padding: 1em 2em;
        border-radius: 10px / 20px;
        box-shadow: 0 -5px 20px rgba(255, 255, 255, 0.26) inset, 
        0 0 50px rgba(0, 0, 0, 0.336);

        transition: all .3s ease;
        cursor: pointer;
    }

    button:hover {
        filter: invert(1);
    }

    .arrow {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 30px;
        aspect-ratio: 1;
        animation: flicker infinite linear 1s;
    }

    .left {
        transform: scaleX(-1);
    }

    @keyframes flicker {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>