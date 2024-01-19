<script>
    import Header from "$lib/header/Header.svelte";
    import Menu from "$lib/common/menu/Menu.svelte";
    import Background from "$lib/background/Background.svelte";
    import Loading from "$lib/common/Loading.svelte";
</script>


<Loading />
<Background />


<Header />
<main>
    <slot>

    </slot>
</main>
<Menu />
