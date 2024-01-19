

<div class="outer-container">
    <div class="container">
        <div class="logo"></div>
    </div>
</div>



<style>
    .outer-container {
        z-index: 20;
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    .container {
        background: radial-gradient(white, rgb(225, 223, 209));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: intro 1.5s forwards ease;
    }

    .logo {
        background-image: url("$lib/header/logo.jpg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin-bottom: 2rem;
        animation: spin 1s forwards ease .2s;
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