
<section>
    <h1>
        Claim your Unique, Physical Reward
    </h1>

    <p>
        Once you've got the NFT, you are eligible to receive 
        the handmade physical reward associated with it for free.
    </p>


    <div class="input-wrapper">
        <input placeholder="Your Cardano wallet address" />
        <button><span id="img-checked"/>Verify NFT</button>
    </div>
</section>


<style>
    .input-wrapper {
        display: flex;
        flex-direction: column;
    }

    input {
        font-size: 1.2rem;
        padding: 0.5em;
        background: none;
        width: 100%;
        border: none;
        text-align: center;
        border: 2px dotted black;
    }

    input::placeholder {
        opacity: .6;
    }

    button #img-checked {
        background-image: url('icon/checked.png');
        background-repeat: no-repeat;
        background-size: cover;
        width: 40px;
        aspect-ratio: 1;
        display: block;
        filter: invert(1);
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        justify-content: center;
        text-wrap: nowrap;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: 1px;
        padding: .8rem 1rem;
        color: white;
        background: linear-gradient(100deg, rgb(50, 192, 235), rgb(47, 74, 163));
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.418);
        transition: all .3s ease;
    }

    button:hover {
        scale: 1.02;
    }
</style>