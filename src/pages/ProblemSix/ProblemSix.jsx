import axios from "axios";
import { useEffect, useState } from "react";

const ProblemSix = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [notFoundMsg, setNotFoundMsg] = useState(false);

  useEffect(() => {
    if (pokemon) {
      const nameToUpperCase =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      setPokemonName(nameToUpperCase);
    }
  }, [pokemon]);

  const handleQuery = (evt) => {
    setQuery(evt.target.value);
  };

  const searchPokemon = (evt) => {
    evt.preventDefault()
    const keyword = query.toLocaleLowerCase()
    setPokemon(false);
    setNotFoundMsg(false);
    if (keyword.length > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${keyword}/`)
        .then((res) => {
          if (res.status === 200) {
            const pokemon = res.data;
            setPokemon(pokemon);
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setNotFoundMsg(":( 404. No se encontró ese pokemon.");
          }
        });
    }
  };
  return (
    <section className="bg-slate-800 text-white w-full h-screen flex flex-col items-center justify-start">
      <h1 className="my-6 text-5xl font-bold">Problema 6</h1>
      <form type="sumbit" onSubmit={searchPokemon} className="w-full h-24 flex flex-row items-center justify-center">
        <label className="mx-4">
          Ingrese el numero o el nombre del pokemon:
        </label>
        <input
          onChange={handleQuery}
          value={query}
          className="mx-4 px-4 w-48 h-10 bg-slate-700"
          type="text"
        ></input>
        <button
          onClick={searchPokemon}
          className="mx-6 px-4 py-2 bg-orange-700 rounded-md hover:bg-orange-600 hover:text-white"
        >
          Buscar
        </button>
      </form>
      {pokemon && (
        <div className="w-1/3 h-96 flex flex-col items-center justify-start bg-slate-700 rounded">
          <h2 className="my-6 text-3xl"> {pokemonName}</h2>
          <h3 className="text-xl">Número: {pokemon.id}</h3>
          <h3 className="text-xl">Peso: {pokemon.weight}</h3>
          <h3 className="text-xl">Altura: {pokemon.height}</h3>
          <h3 className="text-xl">
            Tipo: 
            {pokemon.types.map((element, key) => (
              <span key={key} className="text-xl mx-2">
                { element.type.name}
              </span>
            ))}
          </h3>
          <span><img src={pokemon.sprites.front_default} className="w-36 h-36" alt={pokemon.name}></img></span>
        </div>
      )}
      {notFoundMsg && (
        <div className="w-1/3 h-96 flex flex-col items-center justify-start bg-slate-700 rounded">
          <h2 className="my-6 text-2xl"> {notFoundMsg}</h2>
        </div>
      )}
    </section>
  );
};

export default ProblemSix;
