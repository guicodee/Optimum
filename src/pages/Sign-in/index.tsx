import { 
  Container, 
  ContainerForm, 
  ContentForm 
} from "./style";

export function SignIn() {
  return (
    <Container>
      <ContainerForm>
        <ContentForm>
          <h1>Acesse sua conta</h1>
          <form>
            <div>
              <div>
                <label htmlFor="">Seu e-mail</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Sua senha</label>
                <input type="password" />
              </div>
            </div>
            <button type="submit">Acessar</button>
          </form>
        </ContentForm>
      </ContainerForm>
    </Container>
  )
}