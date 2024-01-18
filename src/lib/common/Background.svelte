<script>
    import { isPhaseOne, theme } from '$lib/store';
</script>



<div class="bg-texture" />


<style>
    .bg-texture {
        position: absolute;
        inset: 0;
        z-index: -5;
        pointer-events: none;

        background-image: url('background/texture.jpg');
        background-size: cover;
        background-position: center;
        opacity: .5;
        filter: contrast(1.3) brightness(.9);
    }

    .dark {
        animation: dim .5s forwards;
    }

    @keyframes dim {
        0% {
            opacity: .5;
            filter: brightness(.9);
        }
        100% {
            opacity: 1;
            filter: brightness(.1);
        }
    }
</style>