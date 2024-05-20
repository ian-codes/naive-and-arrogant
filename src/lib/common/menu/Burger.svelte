<script>
    export let isMenuOpen;
    export let isHovered;
</script>


<div id="burger" class:open={isMenuOpen}>
    {#each {length: 4} as _}
        <span 
            class:dots={isMenuOpen} 
            class:hover={isHovered} 
            class="line bg-black" />
    {/each}
</div>


<style>
    #burger {
        height: 20px;
        width: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .open {
        flex-direction: row !important;
    }
    .line {
        width: 100%;
        height: 2px;
        transition: var(--transition-fast);
    }
    .dots {
        width: 5px;
        height: 5px;
    }
</style>