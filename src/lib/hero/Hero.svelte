<script>
    import Incentive from "./Incentive.svelte";

    let isHovered = false;

    function handleHover() {
        isHovered = !isHovered;
    }
</script>


<div class="hero" on:mouseover={handleHover} on:mouseout={handleHover} 
on:focus={handleHover} on:blur={handleHover} role="main">
    <Incentive bind:isHovered={isHovered} />
</div>


<style>
    .hero {
        width: 100%;
        aspect-ratio: 1;
        max-width: 500px;
        border: 2px solid black;
        overflow: hidden;
        background-image: url('$lib/hero/hero.jpeg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.8)
        , 0 30px 70px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: all .5s ease;
    }

    .hero:hover {
        transform: scale(1.1);
        animation: hue 5s infinite linear;
        box-shadow: -20px 20px 0 rgba(0, 0, 0, 0.8);
    }


    @keyframes hue {
        0% {filter: hue-rotate(0);}
        100% {filter: hue-rotate(360deg);}
    }
</style>