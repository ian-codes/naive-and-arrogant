<div class="vignette"></div>
<div class="sides"></div>
<div class="bg-texture"></div>


<style>
    .sides, .vignette, .bg-texture {
        pointer-events: none;
        position: fixed;
        inset: 0;
    }
    .sides {
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.1), transparent 2.5% 97.5%, rgba(0, 0, 0, 0.1));
    }
    .vignette {

        background: radial-gradient(transparent 80%, rgba(85, 78, 68, 0.164));
    }
    .bg-texture {
        z-index: -5;
        background-image: url('$lib/background/bg.jpg');
        background-repeat: repeat-y;
        background-size: cover;
        background-position: center;
        opacity: .2;
        filter: contrast(1.2) brightness(.9) saturate(2);
        height: 200dvh;
    }
</style>