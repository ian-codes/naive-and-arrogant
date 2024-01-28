<script>
    import { base } from "$app/paths";
    import { page } from '$app/stores';

    export let isMenuOpen;
    export let slug;
    export let deco;

    $: currentlyVisited = $page.url.pathname.split('/').pop() == slug;

    function handleClick() {
        isMenuOpen = false;
    }
</script>


<li>
    <span class="deco" class:currently-visited={currentlyVisited}>{deco}</span>
    <a on:click={handleClick} class:current={currentlyVisited} href="{base}/{slug}">
        <div class="bg"></div>
        <span class="link">
            {slug}
        </span>
        <span class="arrow"></span>
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
        color: var(--clr-main);
        font-weight: bolder;
        text-shadow: 2px 2px 20px var(--clr-main);
        opacity: 1;
    }

    a {
        position: relative;
        z-index: 5;

        color: white;
        text-transform: uppercase;
        letter-spacing: 5px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: .3em;

        background: linear-gradient(black, rgba(0, 0, 0, 0.1));
        padding: .8em 1em;
        box-shadow: 0 -2px 0 inset var(--clr-main), 0 0 50px rgba(0, 0, 0, 0.2)
        , 0 10px 30px rgba(33, 146, 221, 0.2);

        transition: var(--transition);
    }
    a::before {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: var(--gradient-main-h);
    }
    
    .link {
        z-index: 3;
    }

    .bg {
        bottom: 0;
        left: 0;
        width: 100%;
        position: absolute;
        background: var(--gradient-main);
        z-index: 1;

        height: 0;
        transition: var(--transition-fast);
    }
    a:hover .bg {
        height: 100%;
    }
    a:hover::after {
        animation: arrow 2s ease infinite;
        animation-delay: .2s;
    }
    a::after {
        position: absolute;
        background-image: url("$lib/common/menu/arrow.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        content: '';
        filter: invert(1);

        height: 100%;
        width: 40px;
        right: -2em;
        top: 0;

        opacity: 0;
        pointer-events: none;
    }
    @keyframes arrow {
        0% {
            transform: translateX(0);
            opacity: 0;
        }
        50% {
            transform: translateX(10px);
            opacity: 1;
        }
        100% {
            transform: translateX(15px);
            opacity: 0;
        }
    }
</style>