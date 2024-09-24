import "./App.css";
import NewGame from "./NewGame";
import { useState } from "react";

function App() {
    const [token, setToken] = useState();
    const [resp, setResp] = useState();
    const [isAgentCreated, setIsAgentCreated] = useState(false);

    return (
        <>
            <h1>STQS</h1>
            <NewGame
                token={token}
                setToken={setToken}
                resp={resp}
                setResp={setResp}
                isAgentCreated={isAgentCreated}
                setIsAgentCreated={setIsAgentCreated}
            />
        </>
    );
}

export default App;
