import Logo from '/logo.svg';
import { 
  HeaderContainer, 
  NavBar 
} from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {

  return (
    <HeaderContainer>
      <div>
        <a href='/'>
          <img src={Logo} alt="CarStore Logo" />
        </a>
      </div>

      <NavBar>
        <NavLink to={'/'}>
          Home
        </NavLink>
        <NavLink to={'/sobre'}>
          Sobre nós
        </NavLink>
        <NavLink to={'/cars'}>
          Catálogo
        </NavLink>
        <NavLink to={'/contact'}>
          Contato
        </NavLink>
      </NavBar>
    </HeaderContainer>
  )
}