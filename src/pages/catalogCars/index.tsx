import { Cars } from "../../components/Cars";
import { Header } from "../../components/Header";
import { useCars } from "../../hooks/useCars";
import { ContainerCars, Container } from "./styles";

export default function CatalogCars() {
  const { carsModel } = useCars();

  return (
    <>
      <Header />
      <Container>
        <section>
          <h1>Carros disponíveis</h1>
          <h3>{carsModel.length} carros encontrados</h3>
        </section>
        <ContainerCars>
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
        </ContainerCars>
      </Container>
    </>
  )
}