<script>
    import { onMount } from 'svelte';
    
    let data;
    let errorMessage;
    
    onMount(async () => {
        try {
            const res = await fetch('/api/test');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            data = await res.json();
        } catch (error) {
            errorMessage = error.message;
        }
    });
    </script>
    
    <main>
        <p>This is from the Test Component</p>
        {#if data}
            <div>{JSON.stringify(data)}</div>
        {:else if errorMessage}
            <div>Error: {errorMessage}</div>
        {:else}
            <div>Loading...</div>
        {/if}
    </main>
    