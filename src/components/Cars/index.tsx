import Person from '/people.svg';
import Exchange from '/cambio.svg';
import { ICars } from '../../@types/cars';
import { 
  Container, 
  Description, 
  Informations, 
  CarInfo, 
  CarPrice, 
  ImageCar ,
  DetailsCar
} from './styles';
import { Link } from 'react-router-dom';

export function Cars(props: ICars) {
  const { capacity, category, imageUrl, name, price, type } = props;

  return (
    <Container>
      <Description>
        <p>{name}</p>
        <small>{category}</small>
      </Description>
      <ImageCar src={imageUrl} alt="Carro Porsche 718" />

      <Informations>
        <CarInfo>
          <span>
            <img src={Person} alt="Icone de Pessoa" />
            <p>{capacity}</p>
          </span>
          <span>
            <img src={Exchange} alt="Icone de câmbio" />
            <p>{type}</p>
          </span>
        </CarInfo>
        <CarPrice>
          <p>{price}
            <small>/d</small>
          </p>
        </CarPrice>
      </Informations>
      <DetailsCar>
        <Link to={'/'}>
          Reserve agora
        </Link>
      </DetailsCar>
    </Container>
  )
}