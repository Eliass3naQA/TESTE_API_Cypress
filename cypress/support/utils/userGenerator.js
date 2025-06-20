import { faker } from '@faker-js/faker';

export function generateUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email()
  };
}
