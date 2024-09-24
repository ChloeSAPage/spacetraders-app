export async function register(symbol, faction) {
    const resp = await fetch("https://api.spacetraders.io/v2/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            symbol: symbol,
            faction: faction,
        }),
    });

    const json = await resp.json();

    return {
        ok: resp.ok,
        body: json,
    };
}

export async function getStartingLocation(token, systemSymbol, waypointSymbol) {
    const resp = await fetch(
        `https://api.spacetraders.io/v2/systems/${systemSymbol}/waypoints/${waypointSymbol}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const json = await resp.json();

    return {
        ok: resp.ok,
        body: json,
    };
}
