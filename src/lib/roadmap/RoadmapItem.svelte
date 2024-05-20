<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Arrow from "./Arrow.svelte";

    export let item;
    export let index;
    export let lastIndex;
    export let nextItemId;

    const thisUrl = $page.url.pathname;

    let isLast = index == lastIndex;
    let isOdd = index % 2 == 1;
    let started = false;

    onMount(() => {
        setTimeout(() => {
            started = true;
        }, 500)
    });

    function actionWhenInViewport(e) {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setTimeout(() => {
                    e.classList.add("alive");
                }, 500) 
            }
        });

        observer.observe(e);
    }

    function handleNext() {
        goto(`${thisUrl}#${nextItemId}`);
    }
</script>


<li use:actionWhenInViewport
    id="{item.title}"
    class="wrapper py-32 relative overflow-x-hidden min-h-dvh dark:text-white flex flex-col {(isOdd ? "odd items-start" : "even items-end")}">
    
    <h2 class="{(isOdd ? "h2-odd right-2" : "h2-even left-6")} 
        inline text-3xl absolute dark:text-white
        font-bold tracking-widest uppercase">
        {item.title}
    </h2>

    <ol class="points-wrapper flex flex-col gap-2 text-lg w-max">
        {#each item.points as point, i}
            <li class:started={started} 
                style="transition-delay: {i * 300}ms"
                class="point px-6 max-w-md
                  uppercase font-semibold text-sm bg-black text-white
                 dark:bg-white dark:text-black py-4">

                {point}
            </li>
        {/each}
    </ol>

    <div
        class="btn-wrapper mt-10 w-full flex flex-col items-center justify-center">
        <button on:click={handleNext}
            style="transition-delay: {item.points.length * 300}ms"
            class:last={isLast}>
           <Arrow />
        </button>
    </div>
</li>


<style>
    ol {
        max-width: 100%;
    }
    .odd ol {
        padding-right: 2em;
    }
    .even ol {
        padding-left: 2em;
    }
    .odd * .point {
        transform-origin: right;
    }
    .point {
        filter: blur(5em);
        opacity: 0;
        transform-origin: left;
        transition: all ease-in-out .2s;
    }
    .wrapper.alive * .point {
        filter: blur(0);
        opacity: 1;
        transform: scaleX(1) !important;
    }
    .wrapper.alive .btn-wrapper button {
        filter: blur(0);
    }
    .h2-odd {
        transform: rotateZ(270deg);
        transform-origin: right .8em;
    }
    .h2-even {
        transform: rotateZ(90deg);
        transform-origin: left .3em;
    }
    button {
        filter: blur(5em);
        width: 3em;
        height: 3em;
        transition: all ease-in-out .5s;
    }
    button.last {
        transform: rotate(180deg) !important;
    }
</style>