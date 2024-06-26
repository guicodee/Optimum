import { useState } from "react";
import { FormContainer, LocaleForm, Selector } from "./styl.es";

export function FilterCars() {
  const [value, setValue] = useState('');

  return (
    <FormContainer onSubmit={(event) => event.preventDefault()}>
      <fieldset>
        <Selector>
          <label htmlFor="">Marca Produtora</label>
          <select name="brand" id="brand">
            <option value="" disabled hidden selected>Selecione uma marca</option>
            <option value="porsche">Porsche</option>
            <option value="mini-cooper">Mini Cooper</option>
            <option value="toyota">Toyota</option>
          </select>
        </Selector>
        <Selector>
          <label htmlFor="">Modelo do carro</label>
          <select name="model" id="model">
            <option value="" disabled hidden selected>Selecione um modelo</option>
            <option value="coupe">Coupe</option>
            <option value="hatchback">Hatchback</option>
          </select>
        </Selector>
        <LocaleForm>
          <label htmlFor="">Localidade</label>
          <input 
            type="text" 
            placeholder="Digite o nome da cidade" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </LocaleForm>
        <button type="submit">Pesquisar</button>
      </fieldset>
    </FormContainer>
  )
}