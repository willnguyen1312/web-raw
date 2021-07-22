import faker from "faker";

export function generate(number = 100) {
  return {
    data: Array.from({ length: number }).map(() => {
      return {
        id: faker.datatype.uuid(),
        type: "evidence",
      };
    }),
  };
}
