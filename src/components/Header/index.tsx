import { HeaderContainer } from "./styles";
import { Timer, Scroll} from 'phosphor-react';

import logoIgnite from '../../assets/logo-ignite.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} />
      <nav>        
        <a href=""> <Timer/> </a>
        <a href=""> <Scroll/> </a>
      </nav>
    </HeaderContainer>
  );
}
