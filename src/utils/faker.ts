import { Faker, pt_BR, pt_PT } from "@faker-js/faker";

export const faker = new Faker({
  locale: [pt_BR, pt_PT]
})