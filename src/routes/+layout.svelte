<script>
    import Header from "$lib/header/Header.svelte";
    import Menu from "$lib/common/menu/Menu.svelte";
    import Background from "$lib/background/Background.svelte";
    import Loading from "$lib/common/Loading.svelte";
    import { language } from "$lib/stores/language.js";
    import { onMount } from "svelte";


    onMount(() => {
        language.set(navigator.language.includes('en') ? 'en' : 'de'); 
    });
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
</div>


<style>
    .outer-container {
        margin: auto;
    }
</style>