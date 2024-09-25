// @ts-ignore
import json from "./response.json";
import startingLocation from "./startinglocation.json";

export async function mockRegister() {
    return {
        ok: "ok",
        body: json,
    };
}

export async function mockGetStartingLocation() {
    return {
        ok: "ok",
        body: startingLocation,
    };
}
