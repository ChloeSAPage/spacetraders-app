import json from "./response.json"

export async function mockRegister(symbol, faction) {
    return {
        ok: "ok",
        body: json,
    };
}
