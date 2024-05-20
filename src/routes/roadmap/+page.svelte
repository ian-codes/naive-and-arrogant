<svelte:head>
	<title>Roadmap</title>
    <meta name="description" content="This roadmap displays where we're headed with Naive and Arrogant.">
</svelte:head>


<script>
    import roadmap from "$lib/models/roadmap.json";
    import RoadmapItem from "$lib/roadmap/RoadmapItem.svelte";

    function determineNextItem(index) {
        return roadmap[index] == null ? roadmap[0].title : roadmap[index].title
    }
</script>


<section class="relative">
    <h1 id="start" class="px-4 mt-12 dark:text-white uppercase font-bold 
        sm:text-5xl text-3xl">
        Roadmap
    </h1>
    <ol class="flex flex-col gap-32 -mt-16 sm:-mt-12">
        {#each roadmap as item, i}
            <RoadmapItem 
                item={item} 
                nextItemId={determineNextItem(i+1)} 
                index={i} 
                lastIndex={roadmap.length-1} />
        {/each}
    </ol>
</section>