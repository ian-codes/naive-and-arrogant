<script>
    import Burger from "./Burger.svelte";
    import MenuItem from './MenuItem.svelte';

    const menuPoints = ["Phase One", "Roadmap", "Lore", "FAQ"];
    let slugs = menuPoints.map((mp) => mp.toLowerCase().replace(' ', '-'));

    let isMenuOpen = false;
    let isHovered = false;

    function handleMenuClick() {
        isMenuOpen = !isMenuOpen;
    }

    function handleHover() {
        isHovered = !isHovered;
    }

    function handleBlur() {
        isHovered = false;
    }
</script>


{#if isMenuOpen}
    <div class="backdrop" on:click={() => {isMenuOpen = false}}></div>
{/if}

<div class="container">
    <nav>
        <ol class:open={isMenuOpen}>
            {#each slugs as slug}
                <MenuItem item={slug} bind:isMenuOpen={isMenuOpen} />
            {/each}
        </ol>
    
        <button class="menu-button" class:expanded={isMenuOpen} on:click={handleMenuClick}>
            Menu
            <Burger isMenuOpen={isMenuOpen} />
        </button>
    </nav>
</div>




<style>
    .container {
        z-index: 3;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: red;
        
    }

    nav {
        z-index: 2;
        position: fixed;
        bottom: 0;
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
        gap: 1em;
    }

    ol {
        overflow: hidden;
        height: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        transition: all .2s ease;
        gap: .5em;
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
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        transition: all .2s ease;
        border: 1px solid var(--clr-main);
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