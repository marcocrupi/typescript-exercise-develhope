interface Country {
  name: string;
  code: string;
  currency: string;
  population: number;
}

const countries: Country[] = [
  {
    name: "China",
    code: "CN",
    currency: "Renminbi",
    population: 1_412_600_000,
  },
  {
    name: "France",
    code: "FR",
    currency: "Euro",
    population: 67_600_000,
  },
  {
    name: "Spain",
    code: "ES",
    currency: "Euro",
    population: 47_600_000,
  },
  {
    name: "Italy",
    code: "IT",
    currency: "Euro",
    population: 60_317_000,
  },
  {
    name: "New Zealand",
    code: "NZ",
    currency: "New Zealand dollar",
    population: 5_317_000,
  },
  {
    name: "India",
    code: "IN",
    currency: "New Zealand dollar",
    population: 1_325_317_000,
  },
];

const newZealand = countries.find((country) => {
  return country.code === "NZ";
});

console.log(newZealand);

const populationsOverOneBillion = countries.filter((country) => {
  return country.population > 1_000_000_000;
});

console.log(populationsOverOneBillion);

countries.forEach((country) => {
  console.log(
    `The ${country.currency} is the official currency of ${country.name}`
  );
});

// Typescript capisce automaticamente che è un array di numeri
const population = countries.map((country) => {
    return country.population;
})

console.log(population);
