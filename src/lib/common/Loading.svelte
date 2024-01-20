

<div class="outer-container">
    <div class="container">
        <div class="img"></div>
        <div class="logo"></div>
    </div>
</div>



<style>
    .outer-container {
        z-index: 20;
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    .img {
        z-index: 1;
        display: block;
        position: fixed;
        inset: 0;
        background-image: url('$lib/background/fg.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: .5;
        
        mix-blend-mode: luminosity;
        filter: brightness(.5) contrast(1.2) saturate(1);

        animation: img forwards 1.2s linear;
    }

    @keyframes img {
        0% {
            transform: rotate(1deg) scale(1.5);
            filter: saturate(0) brightness(.8) blur(0);
        }
        99% {
            transform: rotate(0deg) scale(1.2);
            filter: saturate(1) brightness(.4) blur(30px);
        }
        100% {
            display: none;
        }
    }

    .container {
        background: radial-gradient(white, rgb(225, 223, 209));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: intro 1.5s forwards ease;

        pointer-events: none;
    }

    .logo {
        z-index: 2;
        background-image: url("$lib/header/logo.jpg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 140px;
        aspect-ratio: 1;
        border-radius: 100%;
        margin-bottom: 2rem;
        animation: spin 1s forwards ease .2s;

        filter: saturate(0);
    }

    @keyframes spin {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(720deg);
        }
    }

    @keyframes intro {
        0% {
            opacity: 1;
            height: 100%;
            width: 100%;
        }
        80% {
            opacity: 1;
            height: 100%;
            width: 100%;
        }
        99% {
            opacity: 0;
            height: 0;
            width: 0;
        }
        100% {
            opacity: 0;
            display: none;
        }
    }
</style>