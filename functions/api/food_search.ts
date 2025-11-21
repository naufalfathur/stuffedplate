// /functions/api/food_search.ts
import crypto from "crypto";

function generateNonce(length = 16) {
    return crypto.randomBytes(length).toString("hex");
}

function generateSignature(params: Record<string, string>, consumerSecret: string, tokenSecret = "") {
    const sorted = Object.keys(params)
        .sort()
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join("&");

    const baseString = `GET&${encodeURIComponent("https://platform.fatsecret.com/rest/server.api")}&${encodeURIComponent(sorted)}`;
    const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`;

    return crypto.createHmac("sha1", signingKey).update(baseString).digest("base64");
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

    oauthParams.oauth_signature = generateSignature(oauthParams, env.FATSECRET_CLIENT_SECRET);

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