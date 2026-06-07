// =============================================
//  POKÉMON — Carga de datos desde PokéAPI
// =============================================

async function fetchPokemonByType(type, range, count) {
  const r    = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await r.json();
  let ids = data.pokemon
    .map(p => parseInt(p.pokemon.url.split('/').filter(Boolean).pop()))
    .filter(id => id >= range[0] && id <= range[1]);
  shuffle(ids);
  ids = ids.slice(0, count * 4);
  const results = [];
  for (const id of ids) {
    if (results.length >= count) break;
    const p = await fetchSinglePokemon(id);
    if (p) results.push(p);
  }
  return results;
}

async function fetchPokemonRandom(range, count) {
  const allIds = [];
  for (let i = range[0]; i <= range[1]; i++) allIds.push(i);
  shuffle(allIds);
  const ids     = allIds.slice(0, count * 3);
  const results = [];
  for (const id of ids) {
    if (results.length >= count) break;
    const p = await fetchSinglePokemon(id);
    if (p) results.push(p);
  }
  return results;
}

async function fetchSinglePokemon(id) {
  try {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!r.ok) return null;
    const d   = await r.json();
    const img = d.sprites.other['official-artwork']?.front_default || d.sprites.front_default;
    if (!img) return null;
    return { name: capitalize(d.name), img };
  } catch { return null; }
}
