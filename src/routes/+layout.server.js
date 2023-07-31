import { json } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`https://my-json-server.typicode.com/vortexEditor/retailer/posts`);
    const retailerData = await res.json();

    return { retailerData };
}