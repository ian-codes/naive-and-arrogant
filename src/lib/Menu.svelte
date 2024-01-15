

<div class="container">
    <button class="menu-button">
        Menu
    </button>
</div>



<style>
    .container {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .menu-button {
        font-size: 1em;
        text-transform: uppercase;
        cursor: pointer;
        background: white;
        padding: 1em;
    }

    .menu-button:hover {
        filter: invert(1);
    }
</style>