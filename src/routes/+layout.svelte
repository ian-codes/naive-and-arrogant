<script>
    import Header from "../lib/common/header/Header.svelte";
    import Menu from "../lib/common/Menu.svelte";
    import Background from "../lib/common/Background.svelte";
    import Loading from "../lib/common/Loading.svelte";
</script>


<Loading />
<Background />


<Header />
<main>
    <slot>

    </slot>
</main>
<Menu />
