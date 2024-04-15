<script>
    import Burger from "./Burger.svelte";
    import MenuItem from './MenuItem.svelte';
    import LanguageSwitcher from "$lib/common/LanguageSwitcher.svelte";
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

<div class="container">
    <nav>
        <ol class:open={isMenuOpen}>
            <LanguageSwitcher light={true} />
            {#each MENU_DATA as menuItem}
                <MenuItem menuItem={menuItem} bind:isMenuOpen={isMenuOpen} />
            {/each}
        </ol>
    
        <button class="menu-button" class:expanded={isMenuOpen} 
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
    .container {
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
        gap: 2em;
    }
    ol {
        font-size: 1em;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        gap: 1em;
        width: 100%;
        transition: var(--transition);
        height: 0;
        opacity: 0;
    }
    ol.open {
        overflow: visible !important;
        height: 300px !important;
        width: 100% !important;
        opacity: 1 !important;
    }
    .menu-button {
        z-index: 5;
        position: relative;
        font-size: .8rem;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        padding: 1em;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: all .2s ease;
    }
    .menu-button.expanded {
        padding: 1em 3em;
        border-radius: 0;
        background: black;
        color: white;
    }

    .menu-button::before {
        z-index: -4;
        content: '';
        top: -2px;
        left: -2px;
        position: absolute;
        height: calc(100% + 4px);
        width: calc(100% + 4px);
        background: var(--gradient-main);
    }
    
    .menu-button::after {
        z-index: -3;
        position: absolute;
        bottom: 0;
        inset: 0;
        content: '';
        background: black;

        opacity: 1;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
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
        z-index: 1;
        background: black;
        animation: backdrop forwards ease .4s;
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