<script>
    import { base } from "$app/paths";

    export let light = false;
</script>



<a href="{base}">
    <div class="dark:invert w-28 h-20 sm:w-32 sm:h-20" class:light={light} id="text-logo"></div>
</a>


<style>
    a {
        display: inline-flex;
        width: min-content;
    }

    .light {
        filter: invert(1);
    }

    #text-logo {
        background-image: url('$lib/header/logo-text.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transition: all .1s ease;
        cursor: pointer;
        /* mix-blend-mode: lighten;
        filter: invert(1); */
    }

    #text-logo:hover {
        filter: drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.436));
    }

    .light:hover {
        filter: invert(1) drop-shadow(5px 5px 0 rgba(111, 209, 255, 0.436)) !important;
    }
</style>