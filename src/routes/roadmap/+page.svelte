<svelte:head>
	<title>Roadmap</title>
    <meta name="description" content="This roadmap displays where we're headed with Naive and Arrogant.">
</svelte:head>


<script>
    import roadmap from "$lib/models/roadmap.json";
    import RoadmapItem from "../../lib/roadmap/RoadmapItem.svelte";
</script>


<section class="relative">
    <h1 id="start" class="px-4 dark:text-white font-bold text-4xl">Roadmap</h1>
    <ol class="flex flex-col gap-32">
        {#each roadmap as item, i}
            <RoadmapItem item={item} index={i} lastIndex={roadmap.length-1} />
        {/each}
    </ol>
</section>