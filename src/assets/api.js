export async function register(symbol, faction) {
  const resp = await fetch("https://api.spacetraders.io/v2/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      symbol: symbol,
      faction: faction,
    }),
  });

  const json = await resp.json();

  return {
    ok: resp.ok,
    body: json
  };
}
