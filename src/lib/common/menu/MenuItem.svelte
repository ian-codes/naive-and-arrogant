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


<li class="px-2 inline-block relative bg-white outline outline-black outline-2">
    <span class="deco absolute uppercase -left-14 bg-white outline outline-black 
        outline-2 h-full aspect-square flex items-center justify-center" 
        class:visible={currentlyVisited}>
        {menuItem?.deco}
    </span>
    <a on:click={handleClick} class:current={currentlyVisited} href="{base}/{menuItem?.slug}"
        class="text-black block w-full text-center font-bold tracking-widest">

        <div class="bg" />
        <span class="link">
            {menuItem?.title[$language]}
        </span>
    </a>
</li>


<style lang="postcss">
    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
    }
    .deco {
        transform: scaleX(0);
        opacity: 0;
        transform-origin: right;
        transition: all .1s ease-out;
    }
    .deco.visible, li:hover .deco {
        pointer-events: none;
        color: black;
        opacity: 1;
        font-weight: bolder;
        transform: scaleX(1);
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