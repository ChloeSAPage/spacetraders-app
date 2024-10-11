interface Options {
    method?: string;
    headers: {
        "Content-Type": string;
        Authorization?: string;
    };
    body?: string;
}

const requestWrapper = async (path: string, options: Options) => {
    const API_URL = "https://api.spacetraders.io/v2/";
    const resp = await fetch(`${API_URL}/${path}`, options);

    const json = await resp.json();

    return {
        ok: resp.ok,
        body: json,
    };
};

export async function register(symbol: string, faction: string) {
    return requestWrapper("register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            symbol: symbol,
            faction: faction,
        }),
    });
}

export async function getStartingLocation(
    token: string,
    systemSymbol: string,
    waypointSymbol: string
) {
    return requestWrapper(
        `systems/${systemSymbol}/waypoints/${waypointSymbol}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );
}
