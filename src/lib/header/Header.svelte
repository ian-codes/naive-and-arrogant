<script>
    import LanguageSwitcher from "../common/LanguageSwitcher.svelte";
    import Logo from "./Logo.svelte";
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


<header class:sticky={isSticky}>
    <div>
        <LogoText light={isSticky} />
        <LanguageSwitcher light={isSticky} />
    </div>
</header>

<!-- <div class="bg" class:sticky={isSticky}>
    <div class="stroke stroke-left" class:strokeSticky={isSticky}></div>
    <div class="stroke stroke-right" class:strokeSticky={isSticky}></div>
    <div class="container">
        <LogoText light={isSticky} />
        <LanguageSwitcher light={isSticky} />
    </div>
</div> -->


<style>
    /* .sticky {
        position: fixed;
        top: 0;
        height: 100px;
        z-index: 30;
        width: 50%;
        position: relative;
        margin: 0 auto;
        filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.219));
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s ease;
    }
    .sticky .container, .bg .container {
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 5em;
        z-index: 90;
        transition: all .3s ease;
    }
    .stroke {
        position: absolute;
        opacity: 0;
        mask-image: url("/img/stroke.png");
        mask-mode: alpha;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
    }
    .strokeSticky {
        opacity: .95;
    }
    .stroke-left {
        background: linear-gradient(120deg, rgb(52, 135, 202), rgb(31, 43, 145));
        transform: rotateY(180deg);
        left: -10em;

    }
    .stroke-right {
        background: linear-gradient(120deg, rgb(76, 128, 196), 50%, rgb(14, 140, 199));
        right: -10em;
        mix-blend-mode: darken;
    } */


    header {
        position: relative;
        background: transparent;
        z-index: 50;
        width: 100%;
        padding: 0 2rem;
        margin-bottom: 2rem;
        transition: var(--transition);
    }

    header div {
        max-width: 900px;
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
        background: linear-gradient(120deg, rgb(67, 177, 228), rgb(31, 43, 145));
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
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