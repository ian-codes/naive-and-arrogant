<script>
    export let isMenuOpen;
    export let isHovered;
</script>


<div id="burger" class:open={isMenuOpen}>
    {#each {length: 3} as _}
        <span class:dots={isMenuOpen} class:hover={isHovered} class="line"></span>
    {/each}
</div>


<style>
    #burger {
        height: 20px;
        width: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .open {
        flex-direction: row !important;
    }
    .line {
        background: white;
        width: 100%;
        height: 2px;
        transition: var(--transition-fast);
    }
    .dots {
        background: white;
        width: 2px;
        border-radius: 100%;
    }
</style>