<script>
    import { base } from "$app/paths";
    import { page } from '$app/stores';

    export let item;

    $: currentlyVisited = $page.url.pathname.split('/').pop();

    $: anchorClass = currentlyVisited == item ? "current" : "";
</script>


<li>
    <a class="{anchorClass}" href="{base}/{item}">
        {item}
        <span class="arrow"></span>
    </a>
</li>



<style>
    a {
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;

        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: .3em;

        background: black;
        padding: 12px 1em;
        border-radius: 10px / 20px;
        transition: all .2s ease;
    }

    a:hover {
        background: white;
        color: var(--clr-main);
        box-shadow: 0 -2px 0 inset var(--clr-main), 0 0 30px rgba(255, 255, 255, 0.3);
    }

    a:hover::after {
        opacity: 1;
        animation: arrow 2s linear infinite;
    }


    a.current::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        left: -1em;
        top: calc(100% / 2 - 3px);
        background: var(--clr-main) !important;
    }

    a::after {
        position: absolute;
        background-image: url("$lib/common/menu/arrow.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        content: '';

        height: 100%;
        width: 40px;
        right: -2em;
        top: 0;

        opacity: 0;
        pointer-events: none;
        transition: all .3s ease;

    }

    @keyframes arrow {
        0% {
            transform: translateX(0);
            opacity: 0;
        }
        50% {
            transform: translateX(20px);
            opacity: 1;
        }
        100% {
            transform: translateX(0);
            opacity: 0;
        }
    }
</style>