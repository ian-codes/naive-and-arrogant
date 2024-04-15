<script>
    import { language } from "$lib/stores/language.js";
    import { transition } from "$lib/stores/transition.js";

    export let light = false;

    function handleChange(lang) {
        transition.set($transition += 1);

        setTimeout(() => {
            language.set(lang);
        }, 1000);
    }
</script>


<div class:light={light} class="flex-r">
    <button class:active={$language == 'en'} on:click={() => handleChange('en')}>EN</button>
    <span class="divider">|</span>
    <button class:active={$language == 'de'} on:click={() => handleChange('de')}>DE</button>
</div>


<style>
    div {
        gap: .3em;
    }

    .divider {
        opacity: .3;
    }

    .light, .light button {
        color: white !important;
    }

    .light .active {
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.5) !important;
    }

    button {
        padding: 1em;
        aspect-ratio: 1;
        opacity: .4;
        letter-spacing: 2px;
        background: none;
        transition: all .3s ease;
    }

    button:hover {
        background: rgba(128, 128, 128, 0.24);
        box-shadow: -2px 3px 1px rgba(0, 0, 0, 0.26);
    }

    .active {
        font-weight: bold;
        opacity: 1;
        text-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
    }
</style>