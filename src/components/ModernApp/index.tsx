import { 
  Container, 
  TextContainer, 
  ButtonDownload, 
  ImageApp 
} from './style';
import App from '/app.svg';
import ApppleIcon from '/apple-icon.svg';

export function MordernApp() {

  return (
    <Container>
      <div>
        <ImageApp src={App} alt="Um smarthphone mostrando a interface do aplicativo da Optimum." />
      </div>
      <TextContainer>
        <h2>App moderno</h2>
        <span>
          Desenvolvemos um aplicativo simples e funcional. Ele foi construído 
          de forma a simplificar o processo de seleção e aluguel de carros. 
          Visualize a localização, descrição e outras informações sobre cada 
          um dos veículos com um clique.
        </span>
        <ButtonDownload href="">
          <img src={ApppleIcon} width={25} alt="Logo da AppleStore" />
          Faça download
        </ButtonDownload>
      </TextContainer>
    </Container>
  )
}