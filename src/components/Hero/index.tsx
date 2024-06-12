import { Link } from 'react-router-dom';
import { 
  Container, 
  Content 
} from './style';
import Banner from '/banner.svg';

export function Hero() {

  return (
    <Container>
      <Content>
        <h1>Transporte revolucionário ao seu alcance</h1>
        <p>Alugar um carro traz liberdade. Nós ajudamos você a encontrar o melhor carro pelo melhor preço.</p>
        <Link to={'/cars'}>
          Ver catálogo
        </Link>
      </Content>
      <img src={Banner} alt="" />
    </Container>
  )
}