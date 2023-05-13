import Card from './Card/Card';
import styled from 'styled-components';

const DivCards = styled.div`
   display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export default function Cards(props) {
   const { characters, onClose } = props;

   return <DivCards>
      {characters.map(character => (<Card 
         key={character.id}
         name={character.name}
         id={character.id}
         status={character.status}
         species={character.species}
         gender={character.gender}
         image={character.image}
         onClose={() => onClose(character.id)}
      />))}
   </DivCards>;
}
