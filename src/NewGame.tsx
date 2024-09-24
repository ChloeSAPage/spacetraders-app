import { useState } from "react";
import { register } from "./assets/api.js";
// import { mockRegister } from "./assets/mockAPI.js";

/**
 * This component is a basic MVP of part one of the quickstart. It handles registering your agent and receives a token
 * which you will need to use in subsequent calls. Therefore, you might want to refactor or replace this as you move forward.
 */

function NewGame({ setToken, resp, setResp, setIsAgentCreated }: any) {
    const [form, setForm] = useState({ symbol: "", faction: "COSMIC" });
    const [error, setError] = useState("");

    return (
        <>
            <h1>New Game</h1>
            <input
                name="symbol"
                value={form.symbol}
                onChange={(e) =>
                    setForm({ ...form, symbol: e.currentTarget.value })
                }
            />
            <input
                name="faction"
                value={form.faction}
                onChange={(e) =>
                    setForm({ ...form, faction: e.currentTarget.value })
                }
            />
            <input
                type="submit"
                onClick={async () => {
                    const json = await register(form.symbol, form.faction);

                    if (json.ok) {
                        setToken(json.body.data.token);
                        setResp(json.body);
                        setIsAgentCreated(true);
                    } else {
                        setError("An error has occurred");
                    }
                }}
            />
            {error && <p>{error}</p>}
        </>
    );
}

export default NewGame;
