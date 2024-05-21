<script>
    import { base } from "$app/paths";
    import { page } from '$app/stores';

    export let isMenuOpen;
    export let menuItem;

    import { language } from "$lib/stores/language.js";

    $: currentlyVisited = $page.url.pathname.split('/').pop() == menuItem.slug;

    function handleClick() {
        isMenuOpen = false;
    }
</script>


<li class="px-2 flex relative bg-white dark:bg-black dark:outline-white outline 
    outline-black outline-[6px]">
    <!-- <span class="deco absolute -left-8" 
        class:currently-visited={currentlyVisited}>
        {menuItem?.deco}
    </span> -->

    <a on:click={handleClick} class:current={currentlyVisited} href="{base}/{menuItem?.slug}"
        class="text-black dark:text-white w-full text-center font-extrabold 
            tracking-widest">

        <div class="bg" />
        <span class="link">
            {menuItem?.title[$language]}
        </span>
    </a>
</li>


<style>
    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
    }
    .deco {
        text-transform: lowercase;
        color: gray;
        font-size: 1.5rem;
        opacity: .8;
    }
    .deco.currently-visited {
        color: white;
        font-weight: bolder;
        opacity: 1;
    }
    a {
        position: relative;
        z-index: 5;
        text-transform: uppercase;
        gap: .3em;
        padding: .8em 1em;
        transition: var(--transition);
    }

    .link {
        z-index: 3;
    }
    .bg {
        bottom: 0;
        left: 0;
        width: 100%;
        position: absolute;
        z-index: 1;
        height: 0;
        transition: var(--transition-fast);
    }
</style>