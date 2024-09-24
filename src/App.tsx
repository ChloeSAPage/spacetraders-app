import "./App.css";
import NewGame from "./NewGame";
import { useState } from "react";
import InfoCard from "./components/InfoCard/InfoCard";

function App() {
    const [token, setToken] = useState();
    const [resp, setResp] = useState();
    const [isAgentCreated, setIsAgentCreated] = useState(false);

    return (
        <>
            {!isAgentCreated && (
                <NewGame
                    token={token}
                    setToken={setToken}
                    resp={resp}
                    setResp={setResp}
                    isAgentCreated={isAgentCreated}
                    setIsAgentCreated={setIsAgentCreated}
                />
            )}

            {isAgentCreated && resp && <InfoCard resp={resp.data} />}
        </>
    );
}

export default App;
