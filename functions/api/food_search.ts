export async function onRequestGet(context: any) {
    const url = new URL(context.request.url);
    const query = url.searchParams.get('query') || '';

    const results = ["apple", "banana", "chicken"];

    return new Response(JSON.stringify({ query, results }), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export default onRequestGet;
