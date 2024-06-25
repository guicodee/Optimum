import { Link, useParams } from "react-router-dom";
import Person from '/people.svg';
import Exchange from '/cambio.svg';
import { useCars } from "../../hooks/useCars";
import { 
  Container, 
  ContentContainer, 
  ModelCarContainer, 
  VehicleInfo,
  VehiclePrice
} from "./styles";
import { Header } from "../../components/Header";
import { Helmet } from "react-helmet";

export function SingleCarModel() {
  const { id } = useParams();
  const { carsModel } = useCars();

  const singleCar = carsModel.find((car) => car.id === id);

  return (
    <>
      <Helmet title="Veículo" />
      <Header />
      <Container>
        <ModelCarContainer>
          <img src={singleCar?.imageUrl} alt="" />
        </ModelCarContainer>
        <ContentContainer>
          <div>
            <h1>{singleCar?.name}</h1>
            <small>{singleCar?.category}</small>
          </div>
          <p>{singleCar?.description}</p>
          <VehicleInfo>
            <span>
              <img src={Person} alt="Icone de Pessoa" />
              {singleCar?.capacity}
            </span>
            <span>
            <img src={Exchange} alt="Icone de câmbio" />
              {singleCar?.type}
            </span>
          </VehicleInfo>
          <VehiclePrice>
            <h3>{singleCar?.price}<span>/d</span></h3>
            <Link to={`/car/${singleCar?.id}/sucess`}>
              Alugar veículo
            </Link>
          </VehiclePrice>
        </ContentContainer>
      </Container>
    </>
  )
}