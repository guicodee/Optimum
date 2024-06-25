import Logo from '/logo.svg';
import { 
  HeaderContainer, 
  NavBar 
} from './styles';
import { Link, NavLink } from 'react-router-dom';

export function Header() {

  return (
    <HeaderContainer>
      <div>
        <Link to={'/'}>
          <img src={Logo} alt="Optimum Logo" />
        </Link>
      </div>

      <NavBar>
        <NavLink to={'/sign-in'}>
          Entrar
        </NavLink>
      </NavBar>
    </HeaderContainer>
  )
}