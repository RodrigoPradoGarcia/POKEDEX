import { useEffect, useState, memo } from 'react';
// import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Text from '../../Components/Text';
import API from '../../services/api';
import CardPok from '../../Components/Card';
import Modal from '../../Components/Modal';
import ModalResponsive from '../../Components/ModalResponsive';

function PokemonContainerNoMemo({ pokemons, setSelectedPokemon }) {
  return (
    pokemons.map((pokemon, index) => (
      <div key={pokemon.id}>
        <CardPok
          id={pokemon.id}
          imagem={pokemon?.sprites?.front_default}
          nome={pokemon.name}
          tipos={pokemon.types && pokemon.types}
          onAction={() => setSelectedPokemon(index)}
        />
      </div>
    ))
  );
}

const PokemonContainer = memo(PokemonContainerNoMemo);

function Dashboard() {
  const [pokemons, setPokemons] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(-1);
  const [cont, setCont] = useState(0);
  const [pesq, setPesq] = useState('');
  const [numPokemons, setNumPokemons] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getItem() {
      setLoading(true);
      const { data } = await API.get(`/pokemon?limit=20&offset=${20 * (pagina - 1)}`);
      setNumPokemons(data.count);
      setCont(Math.ceil(data.count / 20) - 1);
      let resultados = await Promise.all(data.results.map((item) => API.get(item.url)));
      resultados = resultados.map((item) => item.data);
      setPokemons([...resultados]);
      setNotFound(false);
      setLoading(false);
    }

    getItem();
  }, [pagina]);

  const pesquisar = async () => {
    if (pesq?.length === 0) {
      setNotFound(false);
    } else {
      try {
        const { data } = await API.get(`/pokemon/${pesq}`);

        let newArr;

        if (Object.hasOwn(data, 'results')) {
          let resultados = await Promise.all(data.results.map((item) => API.get(item.url)));
          resultados = resultados.map((item) => item.data);
          newArr = [...resultados];
        } else {
          newArr = [data];
        }

        setPokemons(newArr);
        setNotFound(false);
      } catch (erro) {
        setNotFound(true);
      }
    }
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
      margin: 'auto',
    }}
    >
      <div style={{
        gridRowStart: 1,
        gridColumnStart: 1,
      }}
      >
        {
            (window.screen.width >= 500 && selectedPokemon > -1)
              ? (
                <Modal
                  nome={pokemons[selectedPokemon]?.name}
                  abilities={pokemons[selectedPokemon]?.abilities}
                  image={pokemons[selectedPokemon]?.sprites?.front_default}
                  stats={pokemons[selectedPokemon]?.stats}
                  tipos={pokemons[selectedPokemon]?.types}
                  onClose={() => setSelectedPokemon(-1)}
                />
              )
              : selectedPokemon > -1 && (
                <ModalResponsive
                  nome={pokemons[selectedPokemon]?.name}
                  abilities={pokemons[selectedPokemon]?.abilities}
                  image={pokemons[selectedPokemon]?.sprites?.front_default}
                  stats={pokemons[selectedPokemon]?.stats}
                  tipos={pokemons[selectedPokemon]?.types}
                  onClose={() => setSelectedPokemon(-1)}
                />
              )
          }
      </div>
      <div style={{
        gridRowStart: 1,
        gridColumnStart: 1,
        margin: 'auto',
      }}
      >
        {
        pokemons?.length > 0
        && (
        <div>
          <div style={{ textAlign: 'center', margin: '20px 0' }}><Text><h1 style={{ fontSize: '42px' }}>Pokedex</h1></Text></div>
          <div style={{ textAlign: 'center', margin: '20px 0' }}><Text as="p">See description for <span style={{ color: 'red' }}>{numPokemons}</span> different pokemons</Text></div>

          <div style={{
            textAlign: 'center',
            margin: '20px 0',
          }}
          >
            <form onSubmit={(e) => { e.preventDefault(); pesquisar(); }}>
              <TextField
                variant="outlined"
                placeholder="pesquisar..."
                style={{
                  background: 'white',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ cursor: 'pointer' }} onClick={pesquisar} />
                    </InputAdornment>
                  ),
                }}
                value={pesq}
                onChange={(e) => setPesq(e.target.value)}
              />
            </form>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          >
            {
              (function ok() {
                if (notFound) {
                  return (
                    <div style={{
                      display: 'flex',
                      margin: '50px 0',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    >
                      <h1 style={{ color: 'gray' }}>No results</h1>
                      <SearchIcon style={{ color: 'gray', fontSize: '100px' }} />
                    </div>
                  );
                }
                if (loading) {
                  return (
                    <PokemonContainer
                      setSelectedPokemon={undefined}
                      pokemons={[
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                      ]}
                    />
                  );
                }
                return (
                  <PokemonContainer
                    setSelectedPokemon={setSelectedPokemon}
                    pokemons={pokemons}
                  />
                );
              }())
            }
          </div>
        </div>
        )
      }
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px 0',
        }}
        >
          <Pagination size="large" color="error" count={cont} page={pagina} onChange={(e, valor) => setPagina(valor)} />
        </div>
      </div>
    </div>
  );
}

export default memo(Dashboard);
