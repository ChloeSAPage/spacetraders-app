// @ts-ignore
import json from "./response.json";
import startingLocation from "./startinglocation.json";

export async function mockRegister(
    symbol: string,
    faction: string
): Promise<{ ok: boolean; body: any }> {
    symbol;
    faction;
    return {
        ok: true,
        body: json,
    };
}

export async function mockGetStartingLocation(
    token: string,
    system: string,
    waypoint: string
): Promise<{
    ok: boolean;
    body: any;
}> {
    token;
    system;
    waypoint;
    return {
        ok: true,
        body: startingLocation,
    };
}
