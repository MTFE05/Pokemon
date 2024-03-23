import React, { useState, useEffect } from 'react';


function App() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="App">
        <div className="pokemon-container">
          {pokemonData ? (
              pokemonData.results.map((pokemon, index) => (
                  <div key={index} className="pokemon-card">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
                        1}.png`}
                        alt={pokemon.name}
                        className="pokemon-image"
                    />
                    <h2 className="pokemon-name">{pokemon.name}</h2>
                  </div>
              ))
          ) : (
              <p>Loading...</p>
          )}
        </div>
      </div>
  );
}

export default App;
