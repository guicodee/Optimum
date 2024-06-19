import { Link, useParams } from "react-router-dom";
import { useCars } from "../../hooks/useCars";
import { Header } from "../../components/Header";
import { Container, DetailedInformation, PrintDocument, VehicleRented } from "./styles";
import CheckCircle from '/checkcircle.svg';
import { faker } from '../../utils/faker';
import { differenceInDays, format } from "date-fns";

export function VehicleSucess() {
  const { id } = useParams();

  const { carsModel } = useCars();
  const singleCar = carsModel.find((car) => car.id === id);

  const pickDate = faker.date.future();
  const deliveryDate = faker.date.future({ refDate: pickDate})

  function formatDate(date: Date) {
    return format(date, 'dd/MM/yyyy');
  }

  function formatHours(date: Date) {
    return format(date, 'HH:mm')
  }

  function handlePage() {
    window.print()
  }

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
              {singleCar?.color}
            </p>
            <p>
              <strong>Placa: </strong>
              {faker.vehicle.vrm()}
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
              {formatDate(new Date())} às {formatHours(new Date())}
            </p>
          </div>

          <div>
            <h2>Informações para retirada</h2>
            <p>
              <strong>Endereço: </strong>
              {faker.location.streetAddress()}
            </p>
            <p>
              <strong>Data: </strong>
              {formatDate(pickDate)}
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
              {faker.location.streetAddress()}
            </p>
            <p>
              <strong>Data: </strong>
              {formatDate(deliveryDate)}
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
              {faker.phone.number('(##) #####-####')}
            </p>
          </div>

          <div>
            <h2>Resumo do pedido</h2>
            <p>
              <strong>Código da transação: </strong>
              {faker.string.uuid()}
            </p>
            <p>
              <strong>Duração: </strong>
              {differenceInDays(pickDate, deliveryDate)}
            </p>
            <p>
              <strong>Valor total: </strong>
              {singleCar?.price}
            </p>
          </div>
        </DetailedInformation>
        <PrintDocument>
          <button onClick={handlePage}>Imprimir documento</button>
          <Link to={'/cars'}>
            Retornar ao Início
          </Link>
        </PrintDocument>
      </Container>
    </>
  )
}