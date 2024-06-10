import Logo from '/logo.svg';
import { 
  HeaderContainer, 
  NavBar 
} from './styles';

export function Header() {

  return (
    <HeaderContainer>
      <div>
        <a href='/'>
          <img src={Logo} alt="CarStore Logo" />
        </a>
      </div>

      <NavBar>
        <a href="">
          Home
        </a>
        <a href="">
          Sobre nós
        </a>
        <a href="">
          Catálogo
        </a>
        <a href="">
          Contato
        </a>
      </NavBar>
    </HeaderContainer>
  )
}