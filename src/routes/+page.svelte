<script>
    import Menu from "../lib/Menu.svelte";
</script>


<h1>Naive&Arrogant</h1>

<div class="hero" />


<Menu />


<style>
    h1 {
        text-align: center;
        font-size: 5rem;
        text-transform: uppercase;
    }

    .hero {
        margin: auto;
        width: 500px;
        aspect-ratio: 1;
        background-image: url('hero.jpeg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        transition: all .1s ease;
        box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.9);
    }

    .hero:hover {
        transform: scale(1.1);
        animation: hue 5s infinite linear;
        box-shadow: 30px 50px 10px rgba(0, 0, 0, 0.9);
    }


    @keyframes hue {
        0% {filter: hue-rotate(0);}
        100% {filter: hue-rotate(360deg);}
    }
</style>