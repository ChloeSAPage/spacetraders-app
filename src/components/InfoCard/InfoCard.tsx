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
            <p>
                Traits:{" "}
                {faction.traits.map((trait: any) => (
                    <div>
                        <li>{trait.symbol}</li>
                        <p>{trait.description}</p>
                    </div>
                ))}
            </p>
        </>
    );
}

export default InfoCard;
