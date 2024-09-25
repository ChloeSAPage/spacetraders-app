function LocationInfo({ waypoint }: any) {
    return (
        <>
            <h1>Current Location</h1>
            <h2>
                {waypoint.type}: {waypoint.symbol}
            </h2>
            <ul>
                {waypoint.traits.map((trait: any, index: any) => (
                    <li key={index}>
                        <strong>{trait.symbol}</strong>: {trait.description}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default LocationInfo;
