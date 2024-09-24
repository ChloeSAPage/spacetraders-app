function InfoCard({ resp }: any) {
    const agent = resp.agent;
    const faction = resp.faction;

    return (
        <>
            <h1>Your Agent</h1>
            <p>Symbol: {agent.symbol}</p>
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
