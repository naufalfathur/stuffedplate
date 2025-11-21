// /functions/api/food_search.ts

function generateNonce(length = 16) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function generateSignature(params: Record<string, string>, consumerSecret: string, tokenSecret = "") {
    const sorted = Object.keys(params)
        .sort()
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join("&");

    const baseString = `GET&${encodeURIComponent("https://platform.fatsecret.com/rest/server.api")}&${encodeURIComponent(sorted)}`;
    const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`;

    const keyData = new TextEncoder().encode(signingKey);
    const baseStringData = new TextEncoder().encode(baseString);

    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: { name: "SHA-1" } },
        false,
        ["sign"]
    );

    const signatureBuffer = await crypto.subtle.sign("HMAC", cryptoKey, baseStringData);
    const signatureArray = new Uint8Array(signatureBuffer);

    // Convert to base64
    let binary = '';
    for (let i = 0; i < signatureArray.byteLength; i++) {
        binary += String.fromCharCode(signatureArray[i]);
    }
    return btoa(binary);
}

export async function onRequestGet({ request, env }: any) {
    const url = new URL(request.url);
    const query = url.searchParams.get("query") || "";

    const oauthParams: Record<string, string> = {
        oauth_consumer_key: env.FATSECRET_CLIENT_ID,
        oauth_nonce: generateNonce(),
        oauth_signature_method: "HMAC-SHA1",
        oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
        oauth_version: "1.0",
        method: "foods.search",
        search_expression: query,
        format: "json",
    };

    oauthParams.oauth_signature = await generateSignature(oauthParams, env.FATSECRET_CLIENT_SECRET);

    const apiUrl =
        "https://platform.fatsecret.com/rest/server.api?" +
        Object.entries(oauthParams)
            .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
            .join("&");

    const res = await fetch(apiUrl);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
}

export default onRequestGet;