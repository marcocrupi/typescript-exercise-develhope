var countries = [
    {
        name: "China",
        code: "CN",
        currency: "Renminbi",
        population: 1412600000
    },
    {
        name: "France",
        code: "FR",
        currency: "Euro",
        population: 67600000
    },
    {
        name: "Spain",
        code: "ES",
        currency: "Euro",
        population: 47600000
    },
    {
        name: "Italy",
        code: "IT",
        currency: "Euro",
        population: 60317000
    },
    {
        name: "New Zealand",
        code: "NZ",
        currency: "New Zealand dollar",
        population: 5317000
    },
    {
        name: "India",
        code: "IN",
        currency: "New Zealand dollar",
        population: 1325317000
    },
];
var newZealand = countries.find(function (country) {
    return country.code === "NZ";
});
console.log(newZealand);
var populationsOverOneBillion = countries.filter(function (country) {
    return country.population > 1000000000;
});
console.log(populationsOverOneBillion);
countries.forEach(function (country) {
    console.log("The ".concat(country.currency, " is the official currency of ").concat(country.name));
});
// Typescript capisce automaticamente che è un array di numeri
var population = countries.map(function (country) {
    return country.population;
});
console.log(population);
