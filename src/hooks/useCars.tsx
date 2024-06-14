import { useEffect, useState } from "react";
import { ICars } from "../types/cars";
import { api } from "../service/api";

export function useCars(id?: number) {
  const [carsModel, setCarsModel] = useState<ICars[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getCars() {
      try {
        const data = await api(id);
        setCarsModel(data);
      } catch (error) {
        setError('Erro ao buscar os carros:')
        console.log('Erro ao buscar os carros:', error);
      }
    }

    getCars();
  }, [id]);

  return { carsModel, error };
}