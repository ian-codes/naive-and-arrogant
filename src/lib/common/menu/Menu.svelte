<script>
    import Burger from "./Burger.svelte";
    import MenuItem from './MenuItem.svelte';
    import ThemeSwitcher from "$lib/common/ThemeSwitcher.svelte";
    import { MENU_DATA } from "$lib/models/menu_data.js";

    let isMenuOpen = false;
    let isHovered = false;

    function handleMenuClick() {
        isMenuOpen = !isMenuOpen;
    }

    function handleHover() {
        isHovered = !isHovered;
    }
</script>


{#if isMenuOpen}
    <div class="backdrop" on:click={() => {isMenuOpen = false}}></div>
{/if}

<div class="cntnr">
    <nav>
        <ol class:open={isMenuOpen}
            class="w-max">
            {#each MENU_DATA as menuItem}
                <MenuItem menuItem={menuItem} bind:isMenuOpen={isMenuOpen} />
            {/each}
        </ol>
    
        <button class="menu-button text-black bg-white outline
             outline-black outline-2" 
            class:expanded={isMenuOpen} 
            on:click={handleMenuClick}
            on:mouseover={handleHover}
            on:mouseout={handleHover}
            on:focus={handleHover}
            on:blur={handleHover}>
            Menu
            <Burger isMenuOpen={isMenuOpen} bind:isHovered={isHovered} />
        </button>
    </nav>
</div>


<style>
    .cntnr {
        z-index: 3;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
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
        gap: .6em;
    }
    ol {
        font-size: 1em;
        overflow: hidden;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: .5em;
        transition: var(--transition);
        opacity: 0;
        height: 0;
    }
    ol.open {
        overflow: visible !important;
        opacity: 1 !important;
        height: auto !important;
    }
    .menu-button {
        z-index: 5;
        position: relative;
        font-size: .8rem;
        text-transform: uppercase;
        font-weight: bold;
        padding: .5em;
        cursor: pointer;
        transition: all .2s ease;
    }
    .menu-button.expanded {
        padding: 1em 3em;
        border-radius: 0;
    }
    .menu-button:hover::after {
        opacity: 0;
        width: 0;
        right: 50%;
        left: 50%;
    }
    .backdrop {
        position: absolute;
        inset: 0;
        z-index: 2;
        background: black;
        animation: backdrop forwards ease .4s;
    }
    @keyframes backdrop {
        0% {
            opacity: 0;
        }
        100% {
            opacity: .85;
        }
    }
</style>