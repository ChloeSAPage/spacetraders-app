import styles from "./LocationInfo.module.css";

function LocationInfo({ waypoint }: any) {
    return (
        <>
            <h1 className={styles.title}>Current Location</h1>
            <h2 className={styles.subheading}>
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
