<script>
    import { onMount } from 'svelte';
    onMount(() => {
      // Function to load the Twitter script
    const loadTwitterScript = () => {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    };

      // Check if the Twitter widgets script is already loaded
    if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
    } else {
        loadTwitterScript();
    }
    });
</script>


<div class="container">
    <h2>Get to know us better</h2>
    
    <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/NaiveArrogant_?ref_src=twsrc%5Etfw">
        Tweets by NaiveArrogant_
    </a>
</div>


<style>
    .container {
        max-width: var(--max-width);
        margin: 5em auto;
    }

    h2 {
        margin-bottom: 2rem;
        font-weight: normal;
    }
</style>