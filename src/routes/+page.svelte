<svelte:head>
	<title>Home</title>
</svelte:head>


<script>
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { onMount } from "svelte";

    onMount(() => {
        goto(base + '/phase-one');
    })
</script>