<script>
    import Incentive from "./Incentive.svelte";
</script>


<div class="hero">
    <Incentive />
</div>


<style>
    .hero {
        flex: 1;
        margin: auto;
        width: 500px;
        aspect-ratio: 1;
        overflow: hidden;

        background-image: url('img/hero.jpeg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.9);


        cursor: pointer;
        transition: all .1s ease;
    }

    .hero:hover {
        transform: scale(1.1);
        animation: hue 5s infinite linear;
        /* box-shadow: 30px 50px 10px rgba(0, 0, 0, 0.9); */
        box-shadow: -30px 30px 0 rgba(0, 0, 0, 0.9);
    }


    @keyframes hue {
        0% {filter: hue-rotate(0);}
        100% {filter: hue-rotate(360deg);}
    }
</style>