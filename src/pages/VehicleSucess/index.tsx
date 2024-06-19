import { useParams } from "react-router-dom";
import { useCars } from "../../hooks/useCars";
import { Header } from "../../components/Header";
import { Container, DetailedInformation, VehicleRented } from "./styles";
import CheckCircle from '/checkcircle.svg';

export function VehicleSucess() {
  const { id } = useParams();

  const { carsModel } = useCars();
  const singleCar = carsModel.find((car) => car.id === id);

  return (
    <>
      <Header />
      <Container>
        <VehicleRented>
          <img src={singleCar?.imageUrl} alt={singleCar?.name} />
          <div>
            <h1>
              <img src={CheckCircle} alt="" />
              Veículo alugado com sucesso!
            </h1>
            <p>
              Sua reserva foi realizada com sucesso. 
              Em breve você receberá um e-mail com as informações do aluguel.
            </p>
          </div>
        </VehicleRented>
        <DetailedInformation>
          <div>
            <h2>Informações do veículo</h2>
            <p>
              <strong>Modelo: </strong>
              {singleCar?.name}
            </p>
            <p>
              <strong>Cor: </strong>
              
            </p>
            <p>
              <strong>Placa: </strong>
              JUW56CP
            </p>
          </div>

          <div>
            <h2>Informações do pagamento</h2>
            <p>
              <strong>Valor: </strong>
              {singleCar?.price}
            </p>
            <p>
              <strong>Forma de pagamento: </strong>
              Cartão de Crédito
            </p>
            <p>
              <strong>Data de pagamento: </strong>
              {new Date().toISOString()}
            </p>
          </div>

          <div>
            <h2>Informações para retirada</h2>
            <p>
              <strong>Endereço: </strong>
              Batista Rodovia 6263
            </p>
            <p>
              <strong>Data: </strong>
              {new Date().toISOString()}
            </p>
            <p>
              <strong>Horário: </strong>
              08:00 às 18:00
            </p>
          </div>

          <div>
            <h2>Informações para devolução</h2>
            <p>
              <strong>Endereço: </strong>
              Miguel Rua 8994
            </p>
            <p>
              <strong>Data: </strong>
              {new Date().toISOString()}
            </p>
            <p>
              <strong>Horário: </strong>
              08:00 às 18:00
            </p>
          </div>

          <div>
            <h2>Informações do locatário</h2>
            <p>
              <strong>Nome: </strong>
              undefined
            </p>
            <p>
              <strong>E-mail: </strong>
              undefined
            </p>
            <p>
              <strong>Telefone: </strong>
              (61) 982939032190
            </p>
          </div>

          <div>
            <h2>Resumo do pedido</h2>
            <p>
              <strong>Código: </strong>
              #7123371207120
            </p>
            <p>
              <strong>Duração: </strong>
              51 dias
            </p>
            <p>
              <strong>Valor total: </strong>
              {singleCar?.price}
            </p>
          </div>
        </DetailedInformation>
      </Container>
    </>
  )
}