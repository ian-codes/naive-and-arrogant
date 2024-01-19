<a href="/">
    <div id="text-logo"></div>
</a>


<style>
    a {
        display: block;
    }

    #text-logo {
        background-image: url('$lib/header/text-logo.jpeg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 400px;
        height: 100%;
        mix-blend-mode: darken;
        transition: all .3s ease;
        cursor: pointer;
        /* mix-blend-mode: lighten;
        filter: invert(1); */
    }

    #text-logo:hover {
        filter: invert(1) drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.436));
    }
</style>