import { Cars } from "../../components/Cars";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { MordernApp } from "../../components/ModernApp";
import { useCars } from "../../hooks/useCars";
import { Container } from "../../styles/styles";


export function Home() {
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
              id={car.id}
            />
          ))}
        </Container>
      ) : (
        <Container>
          <h1>Erro ao buscar carros.</h1>
        </Container>
      )}
      <Footer />
    </>
  )
}