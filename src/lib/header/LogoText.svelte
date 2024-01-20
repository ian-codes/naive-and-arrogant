<script>
    import { base } from "$app/paths";
</script>



<a href="{base}">
    <div id="text-logo"></div>
</a>


<style>
    @media screen and (max-width: 1100px) {
        #text-logo {
            width: 20px;
        }
    }

    a {
        display: inline-flex;
        width: min-content;
    }

    #text-logo {
        background-image: url('$lib/header/logo-text.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 120px;
        height: 100px;
        mix-blend-mode: darken;
        transition: all .1s ease;
        cursor: pointer;
        /* mix-blend-mode: lighten;
        filter: invert(1); */
    }

    #text-logo:hover {
        filter: drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.436));
    }
</style>