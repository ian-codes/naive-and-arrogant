<script>
    export let isHovered;
</script>


<a class:hover={isHovered} class="call-to-action" href="#">
    MINT NOW
</a>


<style>
    @media screen and (max-width: 1100px) {
        a {
            font-size: 1.2rem !important;

        }
    }

    a {
        width: max-content !important;
        text-transform: uppercase;
        font-style: italic;
        letter-spacing: 2px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 1.2rem;
        display: inline-block;
        margin: auto;
        background: lightblue;
        padding: 1em;
        padding-right: 1.5em;
        box-shadow: -10px -10px 30px inset rgba(0, 0, 0, 0.226)
        , 0 2px 20px rgba(0, 0, 0, 0.425)
        , 0 0 50px white;

        cursor: pointer;
        transition: all .1s ease;
        filter: invert(1);
        border-bottom-right-radius: 50px;
    }

    a:hover, .hover {
        filter: none;
    }
</style>