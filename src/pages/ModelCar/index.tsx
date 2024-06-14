import { useParams } from "react-router-dom";
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

export function ModelCar() {
  const { id } = useParams();
  const { carsModel } = useCars();

  const carItem = carsModel.find((car) => car.id === id);

  return (
    <>
      <Header />
      <Container>
        <ModelCarContainer>
          <img src={carItem?.imageUrl} alt="" />
        </ModelCarContainer>
        <ContentContainer>
          <div>
            <h1>{carItem?.name}</h1>
            <small>{carItem?.category}</small>
          </div>
          <p>{carItem?.description}</p>
          <VehicleInfo>
            <span>
              <img src={Person} alt="Icone de Pessoa" />
              {carItem?.capacity}
            </span>
            <span>
            <img src={Exchange} alt="Icone de câmbio" />
              {carItem?.type}
            </span>
          </VehicleInfo>
          <VehiclePrice>
            <h3>{carItem?.price}<span>/d</span></h3>
            <a href="">
              Alugar veículo
            </a>
          </VehiclePrice>
        </ContentContainer>
      </Container>
    </>
  )
}