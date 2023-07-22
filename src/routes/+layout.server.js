import { json } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const retailerData = await res.json();

    return { retailerData };
}