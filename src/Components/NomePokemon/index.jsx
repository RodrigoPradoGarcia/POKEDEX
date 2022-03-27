import Nomepok from './styled';

function NomePokemon({ children, font }) {
  return (
    <Nomepok font={font}>{children}</Nomepok>
  );
}

export default NomePokemon;
