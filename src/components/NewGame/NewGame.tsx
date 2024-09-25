import styles from "./NewGame.module.css";
import { useState } from "react";
import { register } from "../../assets/api.js";
// import { mockRegister } from "../../assets/mockAPI.js";

function NewGame({ setToken, setResp, setIsAgentCreated }: any) {
    const [form, setForm] = useState({ symbol: "", faction: "COSMIC" });
    const [error, setError] = useState("");

    return (
        <>
            <h1 className={styles.title}>Create an Agent</h1>
            <div className={styles.form}>
                <input
                    className={styles.input}
                    name="symbol"
                    value={form.symbol}
                    onChange={(e) =>
                        setForm({ ...form, symbol: e.currentTarget.value })
                    }
                />
                <input
                    className={styles.input}
                    name="faction"
                    value={form.faction}
                    onChange={(e) =>
                        setForm({ ...form, faction: e.currentTarget.value })
                    }
                />
                <input
                    className={styles.submit}
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
            </div>
            {error && <p>{error}</p>}
        </>
    );
}

export default NewGame;
