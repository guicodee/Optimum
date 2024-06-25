import { Helmet } from "react-helmet";
import { 
  Container, 
  ContainerForm, 
  ContentForm 
} from "./style";

export function SignIn() {
  return (
    <>
      <Helmet title="Optimum Aluga | Entrar" />
      <Container>
        <ContainerForm>
          <ContentForm>
            <h1>Acesse sua conta</h1>
            <form>
              <div>
                <div>
                  <label htmlFor="">Seu e-mail</label>
                  <input type="text" placeholder="Digite seu e-mail" />
                </div>
                <div>
                  <label htmlFor="">Sua senha</label>
                  <input type="password" placeholder="Digite sua senha" />
                </div>
              </div>
              <button type="submit">Acessar</button>
            </form>
          </ContentForm>
        </ContainerForm>
      </Container>
    </>
  )
}