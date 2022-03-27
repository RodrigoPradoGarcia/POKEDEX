import { memo } from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {
  ModalBackground,
  ModalIntern,
  LeftModal,
  AbilitiesTitle,
  Ability,
  BaseStatus,
  Stats,
} from './styled';
import NomePokemon from '../NomePokemon';

function Modal({
  nome,
  image,
  abilities,
  stats,
  tipos,
  onClose,
}) {
  return (
    <ModalBackground onClick={onClose}>
      <ModalIntern width={window.screen.width}>
        <LeftModal tipos={tipos} width={window.screen.width}>
          <div style={{
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
            {
              nome.length > 10
                ? <NomePokemon font="1.2em">{nome}</NomePokemon>
                : <NomePokemon font="2em">{nome}</NomePokemon>
            }
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridTemplateRows: '1fr',
            }}
            >
              {
                image
                  ? (
                    <img
                      src={image}
                      style={{
                        height: '150px',
                        width: '150px',
                        gridColumnStart: 1,
                        gridRowStart: 1,
                      }}
                      alt={`imagem do ${nome}`}
                    />
                  )
                  : <QuestionMarkIcon style={{ height: '100px', width: '100px' }} />
              }
            </div>
            <AbilitiesTitle>Abilities</AbilitiesTitle>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              {abilities?.map((ability) => (
                <Ability key={ability.key}>{ability.ability.name}</Ability>
              ))}
            </div>
          </div>
        </LeftModal>
        <div style={{
          background: 'white',
          borderTopRightRadius: '40px',
          borderBottomRightRadius: '40px',
          minWidth: '50%',
          maxWidth: '50%',
        }}
        >
          <BaseStatus>Base Status</BaseStatus>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Stats>
              {stats?.map((stat) => (
                <tr key={stat.id} style={{ marginBottom: '5px' }}>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                </tr>
              ))}
            </Stats>
          </div>
        </div>
      </ModalIntern>
    </ModalBackground>
  );
}

export default memo(Modal);
