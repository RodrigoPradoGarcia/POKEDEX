import { memo } from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GrainIcon from '@mui/icons-material/Grain';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Carta, CardWrapper } from './styles';
import Tipo from '../Tipo';
import NomePokemon from '../NomePokemon';

function CardPok({
  id,
  nome,
  tipos,
  imagem,
  onAction,
}) {
  return (
    <CardWrapper onClick={onAction}>
      {
        id
        && (
        <Carta
          fundo="transparent"
          style={{
            gridRowStart: '1',
            gridColumnStart: '1',
            zIndex: '2',
          }}
        >
          <div style={{ marginTop: '15px', marginLeft: '20px' }}>
            <h3 style={{ color: 'white' }}>{`# ${id}`}</h3>
          </div>
          <div style={{
            margin: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          >
            {
              nome.length > 10
                ? <NomePokemon font="1.2em">{nome}</NomePokemon>
                : <NomePokemon font="2em">{nome}</NomePokemon>
            }
            {
              imagem
                ? <img src={imagem} style={{ width: '100px', height: '100px' }} alt=" " />
                : <QuestionMarkIcon style={{ height: '100px', width: '100px' }} />
            }
          </div>
          <div style={{
            maxWidth: '150px',
            marginLeft: '30px',
          }}
          >
            {tipos?.map((tipo) => <Tipo key={tipo.id} tipo={tipo.type.name} />).reverse()}
          </div>
        </Carta>
        )
      }

      <Carta fundo="#FF8888" tipos={tipos} style={{ gridRowStart: '1', gridColumnStart: '1', zIndex: '1' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <GrainIcon style={{
            fontSize: '60px',
            marginLeft: '50px',
            marginBottom: '70px',
            color: '#ffffff33',
          }}
          />
          <CatchingPokemonIcon style={{ fontSize: '150px', marginRight: '20px', color: '#ffffff33' }} />
        </div>
      </Carta>

      <Carta hoverable fundo="transparent" style={{ gridRowStart: '1', gridColumnStart: '1', zIndex: '4' }} />
    </CardWrapper>
  );
}

export default memo(CardPok);
