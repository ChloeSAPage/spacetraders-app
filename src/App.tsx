import "./App.css";
import NewGame from "./components/NewGame/NewGame";
import { useState } from "react";
import InfoCard from "./components/InfoCard/InfoCard";
import CurrentLocation from "./components/CurrentLocation/CurrentLocation";
import { ApiResponse } from "./types/response.interface";
import defaultApiResponse from "./types/defaultApiResponse";

function App() {
    const [token, setToken] = useState("");
    const [resp, setResp] = useState<ApiResponse>(defaultApiResponse);
    const [isAgentCreated, setIsAgentCreated] = useState(false);

    return (
        <>
            {!isAgentCreated && (
                <NewGame
                    setToken={setToken}
                    setResp={setResp}
                    setIsAgentCreated={setIsAgentCreated}
                />
            )}

            {isAgentCreated && resp && <InfoCard resp={resp.data} />}

            {isAgentCreated && resp && (
                <CurrentLocation token={token} info={resp.data} />
            )}
        </>
    );
}

export default App;
