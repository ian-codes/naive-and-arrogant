<script>
    import Burger from "./Burger.svelte";

    const menuPoints = ["Phase One", "Roadmap", "Lore", "FAQ"];
    let slugs = menuPoints.map((mp) => mp.toLowerCase().replace(' ', '-'));

    let currentlyVisited = "phase-one";
    let isMenuOpen = false;

    function isCurrentlyVisited(link) {
        console.log(link);
        return currentlyVisited == link;
    }

    function handleClick() {
        isMenuOpen = !isMenuOpen;
    }
</script>


{#if isMenuOpen}
    <div class="backdrop"></div>
{/if}

<div class="container">
    <nav>
        <ol class:open={isMenuOpen}>
            {#each slugs as slug}
                <li>
                    <a class="{isCurrentlyVisited(slug) ? "current" : ""}" href="{slug}">
                        {slug}
                        <span class="arrow"></span>
                    </a>
                </li>
            {/each}
        </ol>
    
        <button class="menu-button" class:expanded={isMenuOpen} on:click={handleClick}>
            Menu
            <Burger isMenuOpen={isMenuOpen} />
        </button>
    </nav>
</div>




<style>
    @media (max-width: 1100px) {
        .container {
            align-items: end !important;
        }
    }

    a.current::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        left: -1em;
        top: calc(100% / 2 - 3px);
        background: var(--clr-main) !important;
    }

    a::after {
        position: absolute;
        background-image: url("icon/arrow.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        content: '';

        height: 100%;
        width: 40px;
        right: -2em;
        top: 0;

        opacity: 0;
        pointer-events: none;
        transition: all .3s ease;

        filter: invert(1);
    }

    .container {
        z-index: 2;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }

    nav {
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
    }

    ol {
        overflow: hidden;
        height: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        transition: all .2s ease;
        gap: .3em;
        width: 0;
        font-size: 0;
    }

    ol.open {
        overflow: visible !important;
        font-size: 1em;
        height: 250px !important;
        width: 100% !important;
    }

    a {
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;

        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: .3em;

        background: black;
        padding: 12px 1em;
        border-radius: 10px / 20px;
        transition: all .2s ease;
    }

    a:hover {
        background: white;
        color: var(--clr-main);
        box-shadow: 0 -2px 0 inset var(--clr-main), 0 0 30px rgba(255, 255, 255, 0.3);
    }

    a:hover::after {
        opacity: 1;
    }

    .menu-button {
        color: black;
        font-size: .8em;
        text-transform: uppercase;
        cursor: pointer;
        background: white;
        border: none;
        padding: 1em;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.201);
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        transition: all .1s ease;
    }

    .menu-button:hover {
        filter: invert(1);
    }

    .menu-button.expanded {
        padding: 1em 3em;
        border-radius: 0;
        background: black;
        color: white;
    }

    .backdrop {
        position: absolute;
        inset: 0;
        z-index: 1;
        background: white;
        animation: backdrop forwards ease .2s;
    }

    @keyframes backdrop {
        0% {
            opacity: 0;
        }
        100% {
            opacity: .8;
        }
    }
</style>