import { FormEvent, useState } from 'react';
import { 
  Company,
  Container, 
  FormSupport, 
  Info 
} from './styles';

export function Footer() {
  const [value, setValue] = useState('');

  function handleFormValidate(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    setValue('');
  }

  return (
    <Container>
      <Company>
        <h4>Optimum</h4>
        <a href="/">Home</a>
        <a href="/">Sobre</a>
        <a href="/">Catálogo</a>
        <a href="/">Contato</a>
      </Company>
      <Info>
        <h4>Escritório</h4>
        <span>Brasilia-DF, Brasil</span>
        <span>Email: optimum@gmail.com</span>
        <span>+55 61 9999-9999</span>
        <span>Horário: 08:00 - 19:00</span>
      </Info>
      <Info>
        <h4>Suporte</h4>
        <FormSupport>
          <input 
            placeholder='fale conosco'
            value={value}
            onChange={(event) => setValue(event.target.value)}

          />
          <button disabled={value === ''} onClick={handleFormValidate}>Enviar</button>
        </FormSupport>
      </Info>
    </Container>
  )
}