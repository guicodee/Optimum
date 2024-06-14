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
        <NavLink to={'/entrar'}>
          Entrar
        </NavLink>
      </NavBar>
    </HeaderContainer>
  )
}