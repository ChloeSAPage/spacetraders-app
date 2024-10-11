import styles from "./InfoCard.module.css";
import { ApiResponse } from "../../types/response.interface";

function InfoCard({ resp }: { resp: ApiResponse["data"] }) {
    const agent = resp.agent;
    const faction = resp.faction;

    return (
        <>
            <h1 className={styles.title}>{agent.symbol}</h1>
            <p>
                <strong>Credits:</strong> {agent.credits}
            </p>
            <p>
                <strong>Faction:</strong> {faction.symbol}
            </p>
            <p>
                <strong>Faction Description:</strong> {faction.description}
            </p>
            <p>
                <strong>Traits:</strong>
            </p>
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
