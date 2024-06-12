import { useParams } from "react-router-dom"
import { useCars } from "../../hooks/useCars";

export function ModelCar() {
  const { id } = useParams();
  const { carsModel } = useCars();

  const carItem = carsModel.find((car) => car.id === id);

  return (
    <div>
      <img src={carItem?.imageUrl} alt="" />
      <h1>{carItem?.name}</h1>
    </div>
  )
}