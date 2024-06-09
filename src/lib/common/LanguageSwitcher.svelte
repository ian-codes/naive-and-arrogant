<script>
    import { language } from "$lib/stores/language.js";
    import { transition } from "$lib/stores/transition.js";

    export let light = false;

    function handleChange(lang) {
        // transition.set($transition += 1);

        // setTimeout(() => {
        //     language.set(lang);
        // }, 1000);
        language.set(lang);
    }
</script>


<div class:light={light} class="dark:text-white h-5 text-s flex-r gap-0 sm:gap-[5px]">
    <button class="p-1" class:active={$language == 'en'} on:click={() => handleChange('en')}>EN</button>
    <span class="divider block bg-black dark:bg-white w-[3px] h-full" />
    <button class="p-1" class:active={$language == 'de'} on:click={() => handleChange('de')}>DE</button>
</div>


<style>
    .light, .light button {
        color: white !important;
    }

    .light .divider {
        background: white;
    }

    button {
        font-weight: bolder;
        aspect-ratio: 1;
        opacity: .3;
        letter-spacing: 2px;
        background: none;
    }

    .active {
        opacity: 1;
    }
</style>