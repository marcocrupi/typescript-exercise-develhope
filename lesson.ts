// Proviamo a usare le intersection types anche su una variabile oggetto

interface Country {
  name: string;
  code: string;
}

interface CountryData {
  languages: string[];
  population: number;
}

type CountryWithData = Country & CountryData;

// Possiamo usare la intersection typ "Country & CountryData"
// ma anche un type alias
const greece: CountryWithData = {
  name: "Greece",
  code: "GR",
  languages: ["Greek"],
  population: 10_678_632,
};
