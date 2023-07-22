<script>
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<!-- <p>{data.retailerData.title}</p> -->

{#each data.retailerData as retailer}
    <p>{retailer.title}</p>
{/each}
