<script>
    import { isPhaseOne, theme } from '$lib/store';
</script>


<div class="bg-texture"></div>


<style>
    .bg-texture {
        z-index: -5;
        pointer-events: none;
        position: absolute;
        inset: 0;
        background-image: url('$lib/background/bg.jpg');
        background-repeat: repeat-y;
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