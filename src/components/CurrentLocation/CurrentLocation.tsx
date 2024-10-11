import { useState } from "react";
import { getStartingLocation } from "../../assets/api.js";
// import { mockGetStartingLocation } from "../../assets/mockAPI.js";
import LocationInfo from "../LocationInfo/LocationInfo.js";
import { ApiResponse } from "../../types/response.interface.js";

interface CurrentLocationProps {
    token: string;
    info: ApiResponse["data"];
}

function GetCurrentLocation({ token, info }: CurrentLocationProps) {
    const nav_info = info.ship.nav;

    const [waypoint, setWaypoint] = useState({ data: "" });
    const [isRendered, setIsRendered] = useState(false);
    const [error, setError] = useState("");

    return (
        <>
            {!isRendered && (
                <button
                    onClick={async () => {
                        const json = await getStartingLocation(
                            token,
                            nav_info.systemSymbol,
                            nav_info.waypointSymbol
                        );

                        if (json.ok) {
                            setWaypoint(json.body);
                            setIsRendered(true);
                        } else {
                            setError("An error has occurred");
                        }
                    }}
                >
                    Get Waypoint
                </button>
            )}
            {error && <p>{error}</p>}
            {isRendered && <LocationInfo waypoint={waypoint.data} />}
        </>
    );
}

export default GetCurrentLocation;
