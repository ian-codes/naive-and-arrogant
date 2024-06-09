<script>
    export let isHovered;
</script>


<a class:hover={isHovered} 
    class="call-to-action dark:bg-black dark:text-white 
        bg-white px-8 py-4 font-bold outline 
        outline-black dark:outline-white outline-[6px]"
    href="#">
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
        font-family: "Inter";
        font-size: 1.2rem;
        display: inline-block;
        margin: auto;
        /* box-shadow: -10px -10px 30px inset rgba(0, 0, 0, 0.226)
        , 0 2px 20px rgba(0, 0, 0, 0.425)
        , 0 0 50px white; */
        cursor: pointer;
        transition: all .1s ease;
    }
    a:hover, .hover {
        filter: none;
    }
</style>