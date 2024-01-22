<script>
    import Header from "$lib/header/Header.svelte";
    import Menu from "$lib/common/menu/Menu.svelte";
    import Background from "$lib/background/Background.svelte";
    import Loading from "$lib/common/Loading.svelte";
    import Twitter from "$lib/common/Twitter.svelte";
</script>


<Loading />
<Background />

<div class="outer-container">
    <Header />
        <main>
            <slot>
        
            </slot>
        </main>
    <Menu />
    <Twitter />
</div>


<style>
    .outer-container {
        padding: 0 2rem;
        max-width: var(--max-width);
        margin: auto;
    }
</style>