// @ts-ignore
import json from "./response.json";

export async function mockRegister() {
    return {
        ok: "ok",
        body: json,
    };
}

export async function mockGetCurrentLocation() {
    return {
    };
}
