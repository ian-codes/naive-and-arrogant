import { BLOCKFROST_API_KEY } from '$env/static/private';


export function GET(Request) {
    // https://cardano-mainnet.blockfrost.io/api/v0
    // TODO: implement check NFT in address method
    return new Response(BLOCKFROST_API_KEY);
}

export const config = {
    runtime: 'edge',
};