<script>
    import { onMount } from "svelte";

    export let item;
    export let index;
    export let lastIndex;
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


    function handleNext(nextId) {
        if (isLast) {
            nextId = "start";
        }
        console.log(nextId);
        document.getElementById(nextId).scrollIntoView();
    }
</script>


<li use:actionWhenInViewport
    id="#q{index}"
    class="wrapper py-32 relative overflow-x-hidden min-h-dvh dark:text-white flex flex-col {(isOdd ? "odd items-start" : "even items-end")}">
    
    <h2 class="{(isOdd ? "h2-odd right-2" : "h2-even left-6")} 
        inline text-3xl absolute dark:!mix-blend-luminosity mix-blend-color font-bold tracking-widest uppercase">
        {item.title}
    </h2>

    <ol class="points-wrapper text-lg w-max">
        {#each item.points as point, i}
            <li class:started={started} 
                style="transition-delay: {i * 300}ms"
                class="point px-4 max-w-xs bg-[#3e99ce] bg-opacity-65 py-4">

                {point}
            </li>
        {/each}
    </ol>

    <div
        class="btn-wrapper mt-10 w-full flex flex-col items-center justify-center">
        <button on:click={() => handleNext(`#q${index+1}`)}
            style="transition-delay: {item.points.length * 300}ms"
            class:last={isLast}
            class="hover:scale-110 transition-all" />
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
        outline: white 1px solid;
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
        background-image:  url("$lib/common/menu/arrow.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        transform: rotate(90deg);
        width: 2em;
        height: 2em;
        transition: all ease-in-out .5s;
    }
    button.last {
        transform: rotate(-90deg) !important;
    }
</style>