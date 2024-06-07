import Porsche from '/cars/car1.svg';
import Person from '/people.svg';
import Exchange from '/cambio.svg';
import { Container, Description, Informations, CarInfo, CarPrice } from './styles';

export function Cars() {

  return (
    <Container>
      <Description>
        <p>Porsche 718 Cayman S</p>
        <small>Coupe</small>
      </Description>
        <img src={Porsche} alt="Carro Porsche 718" />

        <Informations>
          <CarInfo>
            <span>
              <img src={Person} alt="Icone de Pessoa" />
              <p>2</p>
            </span>
            <span>
              <img src={Exchange} alt="Icone de câmbio" />
              <p>Manual</p>
            </span>
          </CarInfo>
          <CarPrice>
            <p>$400
              <small>/d</small>
            </p>
          </CarPrice>
        </Informations>
    </Container>
  )
}