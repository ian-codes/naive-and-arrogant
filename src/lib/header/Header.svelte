<script>
    import LanguageSwitcher from "../common/LanguageSwitcher.svelte";
    import ThemeSwitcher from "../common/ThemeSwitcher.svelte";
    import LogoText from "./LogoText.svelte";

    import { onMount } from 'svelte';

    export let isSticky = false;

    onMount(() => {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            isSticky = scrollTop > 1; // Adjust 50 to the scroll threshold you want
        });
    });
</script>


<header class="sm:mb-8 mb-4 px-2 outline-6 outline-white" 
    class:sticky={isSticky}>
    <div>
        <LogoText light={isSticky} />
        <div class="flex flex-row items-center gap-4">
            <ThemeSwitcher light={isSticky} />
        </div>
    </div>
</header>


<style>
    header {
        position: relative;
        background: transparent;
        z-index: 1;
        width: 100%;
        transition: var(--transition);
    }
    header > div {
        max-width: 800px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }
    header::before {
        position: absolute;
        margin: auto;
        content: '';
        inset: 0;
        z-index: -1;
        opacity: 0;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        background: rgba(0, 0, 0, 0.797);
        transition: var(--transition);
    }
    .sticky {
        position: sticky;
        top: 0;
    }
    header.sticky::before {
        opacity: .95 !important;
    }

    /* header div::after {
        content: '';
        position: absolute;
        inset: 0;
        width: 80%;
        height: 80%;
        margin: auto 0;
        left: -2em;
        opacity: .9;
        background-image: url("/img/stroke.png");
        background-size: contain;
        background-repeat: no-repeat;
        mix-blend-mode: lighten;
    } */
</style>