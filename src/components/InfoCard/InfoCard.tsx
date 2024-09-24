import styles from "./InfoCard.module.css";

function InfoCard({ resp }: any) {
    const agent = resp.agent;
    const faction = resp.faction;

    return (
        <>
            <h1 className={styles.title}>{agent.symbol}</h1>
            <p>Credits: {agent.credits}</p>
            <p>Faction: {faction.symbol}</p>
            <p>Faction Description: {faction.description}</p>
            <p>Traits:</p>
            <ul>
                {faction.traits.map((trait: any, index: any) => (
                    <li key={index}>
                        <strong>{trait.symbol}</strong>: {trait.description}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default InfoCard;
