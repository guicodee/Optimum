import { Cars } from "./components/Cars";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MordernApp } from "./components/ModernApp";
import { useCars } from "./hooks/useCars";
import { Container } from "./styles/styles";

export default function App() {
  const { carsModel, error } = useCars();
  
  return (
    <>
      <Header />
      <Hero />
      <MordernApp />
      {carsModel.length >= 1 && !error ? (
        <Container>
          {carsModel.map((car) => (
            <Cars
              key={car.id}
              name={car.name}
              imageUrl={car.imageUrl}
              capacity={car.capacity}
              category={car.category}
              price={car.price}
              type={car.type}
            />
          ))}
        </Container>
      ) : (
        <Container>
          <h1>Erro ao buscar carros.</h1>
        </Container>
      )}
    </>
  )
}
