<script>
    import { claim_yours } from "$t";
    import { language } from "$stores/language";

    let isVerified = false;
</script>



<section>
    <h1>
        {claim_yours.header[$language]}
    </h1>

    <p>
        {claim_yours.p1[$language]}
    </p>


    <div class="input-wrapper">
        <div>
            <button title="Paste address" class="paste icon" />
            <input id="wallet-input" placeholder="{claim_yours.your_wallet[$language]}">
        </div>
        <button 
            on:click={() => {isVerified = true;}}
            class="verify-button" 
            title="Verify NFT">
            
            <span class="unlock icon" />
            {claim_yours.verify_nft[$language]}
        </button>
    </div>

    {#if isVerified}
        <form>
            <input placeholder="First name" />
            <input placeholder="Last name" />
            <input placeholder="Address" />
            <input placeholder="City" />
            <input placeholder="Country" />
        </form>
    {/if}
</section>


<style>
    form {
        margin: 1em 0;
    }

    form input {
        text-align: start;
    }

    p {
        font-size: 1.2em;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    .input-wrapper div {
        position: relative;
    }

    input {
        font-size: 1.2rem;
        padding: 0.5em;
        background: none;
        width: 100%;
        border: none;
        text-align: center;
        border: 1px dotted black;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.418) inset;
    }

    .paste {
        box-shadow: none;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        background-image: url("/icon/paste.svg");
        background-size: 60%;
        height: 100%;
        aspect-ratio: 1;
        opacity: .5;
    }

    .unlock {
        position: absolute;
        display: block;
        background-image: url("/icon/unlock.svg");
        background-size: 60%;
        height: 100%;
        aspect-ratio: 1;
        filter: invert(1);
        left: 0;
    }

    #wallet-input::placeholder {
        opacity: .6;
        padding-left: 1.5em;
    }

    .verify-button {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        justify-content: center;
        text-wrap: nowrap;
        font-size: 1.2rem;
        letter-spacing: 1px;
        padding: .8rem 1rem;
        color: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.418);
        transition: all .3s ease;
    }

    .verify-button::before {
        content: '';
        inset: 0;
        position: absolute;
        background: linear-gradient(100deg, rgb(50, 192, 235), rgb(47, 74, 163));
        z-index: -1;
    }

    button:hover {
        scale: 1.02;
    }
</style>