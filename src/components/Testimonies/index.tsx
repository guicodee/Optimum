import { Container, 
  ContainerTestemonie, 
  Testemonie 
} from "./styles";

export function Testimonies() {
  const testimonial = [
    {
      text: '"Desde que entrei no site até a devolução do carro alugado, fiquei constantemente impressionado com a facilidade e a eficiência de todo o processo. O site é intuitivo, simples de navegar e oferece uma vasta gama de opções de veículos, permitindo que eu encontrasse o carro ideal para as minhas necessidades."',
      user: {
        name: 'Ruben Johns',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }
    },
    {
      text: '"Tive uma experiência fantástica com o serviço de aluguel de carros. Desde a navegação fácil e intuitiva do site até a devolução do veículo, todo o processo foi rápido e eficiente. A variedade de opções de veículos foi impressionante e encontrei o carro perfeito para minhas necessidades."',
      user: {
        name: 'Bryan Harvey',
        image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }
    }
  ];

  return (
    <Container> 
      {testimonial.map((item) => (
        <ContainerTestemonie>
          <p>{item.text}</p>
          <Testemonie>
            <img src={item.user.image} alt="" />
            <span>{item.user.name}</span>
          </Testemonie>
        </ContainerTestemonie>
      ))}
    </Container>
  )
}