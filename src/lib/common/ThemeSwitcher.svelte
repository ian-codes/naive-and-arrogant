<script>
    import { onMount } from "svelte";

    export let light;

    let darkmode;

    function changeTheme() {
        darkmode = !darkmode;
        
        darkmode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');

        console.log(darkmode);
        console.log(document.documentElement.classList);
    }

    onMount(() => {
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            darkmode = true;
        } else {
            document.documentElement.classList.remove('dark')
            darkmode = false;
        }
    });
</script>



<button class="{(light ? "invert" : "")} dark:invert
    hover:scale-105 transition-all bg-center bg-contain bg-no-repeat w-6 h-6"
    on:click={changeTheme}
    style="background-image: url({(darkmode ? "icon/darkmode.svg" : "icon/lightmode.svg")})" />