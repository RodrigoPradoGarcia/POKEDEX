import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { memo } from 'react';
import {
  ModalBackground,
  ModalIntern,
  LeftModal,
  AbilitiesTitle,
  Ability,
  BaseStatus,
  Stats,
  BotaoFechar,
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
    <ModalBackground>
      <ModalIntern width={window.screen.width}>
        <LeftModal tipos={tipos} width={window.screen.width}>
          <BotaoFechar onClick={onClose}><CloseIcon style={{ fontSize: '40px' }} /></BotaoFechar>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
            <NomePokemon mWidth="200px">{nome}</NomePokemon>
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
                <Ability key={ability.id}>{ability.ability.name}</Ability>))}
            </div>
          </div>
        </LeftModal>
        <div style={{
          background: 'white',
          minWidth: '100%',
          maxWidth: '100%',
          padding: '30px 0',
        }}
        >
          <BaseStatus>Base Status</BaseStatus>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Stats>
              {stats?.map((stat) => (
                <tr key={stat.key} style={{ marginBottom: '5px' }}>
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
