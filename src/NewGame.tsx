import { useState } from "react";
// import { register } from "./assets/api.js";
import { mockRegister } from "./assets/mockAPI.js";
import InfoCard from "./components/InfoCard/InfoCard.js";

/**
 * This component is a basic MVP of part one of the quickstart. It handles registering your agent and receives a token
 * which you will need to use in subsequent calls. Therefore, you might want to refactor or replace this as you move forward.
 */

function NewGame() {
    const [token, setToken] = useState();
    const [resp, setResp] = useState();
    const [form, setForm] = useState({ symbol: "", faction: "COSMIC" });
    const [isAgentCreated, setIsAgentCreated] = useState(false);

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
                    const json = await mockRegister(form.symbol, form.faction);

                    if (json.ok) {
                        setToken(json.body.data.token);
                        setResp(json.body);
                        setIsAgentCreated(true);
                    }
                }}
            />

            <pre>API token: {token}</pre>
            <pre>Response: {JSON.stringify(resp, null, 2)}</pre>

            {isAgentCreated && resp && <InfoCard resp={resp.data} />}
        </>
    );
}

export default NewGame;
