<script>
    import { page } from '$app/stores';
    import Burger from "./Burger.svelte";
    import MenuItem from './MenuItem.svelte';

    const menuPoints = ["Phase One", "Roadmap", "Lore", "FAQ"];
    let slugs = menuPoints.map((mp) => mp.toLowerCase().replace(' ', '-'));

    let currentlyVisited = $page.url.pathname.substring(1);
    let isMenuOpen = false;

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
                <MenuItem item={slug} bind:currentItem={currentlyVisited} />
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
        transition: all .2s ease;
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