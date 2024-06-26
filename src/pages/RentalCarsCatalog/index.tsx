import { Helmet } from "react-helmet";
import { Cars } from "../../components/Cars";
import { Header } from "../../components/Header";
import { useCars } from "../../hooks/useCars";
import { ContainerCars, Container } from "./styles";
import { FilterCars } from "../../components/FilterCars";

export function RentalCarsCatalog() {
  const { carsModel, error } = useCars();

  return (
    <>
      <Helmet title="Optimum Aluga | Catálogo de carros" />
      <Header />
      <Container>
        {error ? (
          <section>
            <h1>Carros disponíveis</h1>
            <h3>Erro ao listar veículos</h3>
          </section>
        ) : (
          <section>
            <h1>Carros disponíveis</h1>
            <h3>{carsModel.length} carros encontrados</h3>
          </section>
        )}

        <FilterCars />
        
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