import axios from "axios";
import { useEffect, useState } from "react";

const ProblemTwo = () => {
  /*-------------------------------------First Point------------------------------------------*/
  const [typeNumber, setTypeNumber] = useState("");
  const [total, setTotal] = useState("");
  const handleTypeNumber = (evt) => {
    setTypeNumber(evt.target.value);
  };
  const totalPokemonByType = (type) => {
    if (type > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/type/${type.toString()}/`)
        .then((res) => {
          if (res.status === 200) {
            const pokemon = res.data.pokemon;
            console.log(pokemon);
            setTotal(pokemon.length);
          }
        });
    }
  };
  /*-------------------------------------Second Point------------------------------------------*/
  const [firstType, setFirstType] = useState("");
  const [secondType, setSecondType] = useState("");
  const [totalFirstType, setTotalFirstType] = useState("");
  const [totalSecondType, setTotalSecondType] = useState("");

  const handleFirstType = (evt) => {
    setFirstType(evt.target.value);
  };
  const handleSecondType = (evt) => {
    setSecondType(evt.target.value);
  };

  const searchPokemonByTwoTypes = (typeOne, typeTwo) => {
    if (typeOne > 0 && typeTwo > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/type/${typeOne.toString()}/`)
        .then((res) => {
          if (res.status === 200) {
            const totalFirst = res.data.pokemon;
            console.log(totalFirst);
            setTotalFirstType(totalFirst);
          }
        });
      axios
        .get(`https://pokeapi.co/api/v2/type/${typeTwo.toString()}/`)
        .then((res) => {
          if (res.status === 200) {
            const totalSecond = res.data.pokemon;
            console.log(totalSecond);
            setTotalSecondType(totalSecond);
          }
        });
    }
  };
  /*-------------------------------------Third Point------------------------------------------*/

  const [name, setName] = useState("");
  const [pokemonNumber, setPokemonNumber] = useState("");

  const handleName = (evt) => {
    setName(evt.target.value);
  };

  const onSearchByName = (pokemonName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((res) => {
        if (res.status === 200) {
          const number = res.data.id;
          setPokemonNumber(number);
        }
      });
  };
  /*-------------------------------------Fourth Point------------------------------------------*/

  const [num, setNum] = useState("");
  const [pokemonStats, setPokemonStats] = useState([]);

  const handleNum = (evt) => {
    setNum(evt.target.value);
  };

  const onSearchByNum = (number) => {
    if (number > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${number.toString()}/`)
        .then((res) => {
          if (res.status === 200) {
            const stats = res.data.stats;
            console.log(stats);
            setPokemonStats(stats);
          }
        });
    }
  };

  

  return (
    <section className="bg-slate-800 text-white w-full h-auto flex flex-col items-center justify-start">
      <h1 className="my-6 text-5xl font-bold">Problema 2</h1>
      <div className="w-full h-24 flex flex-row items-center justify-center">
        <label className="mx-4">Ingrese el numero de tipo de pokemon:</label>
        <input
          min="0"
          onChange={handleTypeNumber}
          value={typeNumber}
          className="mx-4 px-4 w-24 h-10 bg-slate-700"
          type="number"
        ></input>
        <button
          onClick={() => totalPokemonByType(typeNumber)}
          className="mx-6 px-4 py-2 bg-orange-700 rounded-md hover:bg-orange-600 hover:text-white"
        >
          Buscar
        </button>
        <div>
          <h2>Total de pokemones: {total}</h2>
        </div>
      </div>
      <div className="w-full h-24 flex flex-row items-center justify-center ">
        <label className="mx-4">Primer Tipo:</label>
        <input
          min="0"
          onChange={handleFirstType}
          value={firstType}
          className="mx-4 px-4 w-24 h-10 bg-slate-700 "
          type="number"
        ></input>
        <label className="mx-4">Segundo Tipo:</label>
        <input
          min="0"
          onChange={handleSecondType}
          value={secondType}
          className="mx-4 px-4 w-24 h-10 bg-slate-700"
          type="number"
        ></input>
        <button
          onClick={() => searchPokemonByTwoTypes(firstType, secondType)}
          className="mx-6 px-4 py-2 bg-orange-700 rounded-md hover:bg-orange-600 hover:text-white"
        >
          Buscar
        </button>
      </div>
      <h2>Resultados:</h2>
      <div className="w-1/2 h-72 my-2 flex flex-col items-center overflow-y-auto bg-slate-600">
        <span className="text-xl">Primer Tipo:</span>
        {totalFirstType.length > 0 &&
          totalFirstType.map((element, key) => (
            <div
              key={key}
              className="w-full flex flex-col justify-evenly items-center"
            >
              {element.pokemon.name}
            </div>
          ))}
      </div>
      <div className="w-1/2 h-72 my-2 flex flex-col items-center overflow-y-auto bg-slate-600">
        <span className="text-xl">Segundo Tipo:</span>
        {totalSecondType.length > 0 &&
          totalSecondType.map((element, key) => (
            <div
              key={key}
              className="w-full flex flex-col justify-evenly items-center"
            >
              {element.pokemon.name}
            </div>
          ))}
      </div>

      <div className="w-full h-24 flex my-6 flex-row items-center justify-center">
        <label className="mx-4">Buscar numero de pokemon por nombre:</label>
        <input
          onChange={handleName}
          value={name}
          className="mx-4 px-4 w-24 h-10 bg-slate-700"
          type="text"
        ></input>
        <button
          onClick={() => onSearchByName(name)}
          className="mx-6 px-4 py-2 bg-orange-700 rounded-md hover:bg-orange-600 hover:text-white"
        >
          Buscar
        </button>
        <div>
          <h2>Numero de pokemon: {pokemonNumber}</h2>
        </div>
      </div>
      <div className="w-full h-24 flex my-6 flex-row items-center justify-center">
        <label className="mx-4">Ingrese numero de pokemon:</label>
        <input
          onChange={handleNum}
          value={num}
          className="mx-4 px-4 w-24 h-10 bg-slate-700"
          type="number"
          min="0"
        ></input>
        <button
          onClick={() => onSearchByNum(num)}
          className="mx-6 px-4 py-2 bg-orange-700 rounded-md hover:bg-orange-600 hover:text-white"
        >
          Buscar
        </button>
      </div>
      <div className="w-1/2 h-72 my-2 flex flex-col items-center overflow-y-auto bg-slate-600">
        <span className="text-xl">Pokemon {num} Stats:</span>
        {pokemonStats.length > 0 &&
          pokemonStats.map((element, key) => (
            <div
              key={key}
              className="w-full flex flex-col justify-evenly items-center"
            >
              {element.stat.name} {element.base_stat}
            </div>
          ))}
      </div>
      
    </section>
  );
};

export default ProblemTwo;
