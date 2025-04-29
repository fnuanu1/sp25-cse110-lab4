let statistics = {
  redCars: 21, blueCars: 45, greencars: 12, racecars: 5, blackCars: 40, rareCars: 2
};
for (const property in statistics) {
  //  print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number
  if(property[0] === "r" || statistics[property]%2!=0) {
    console.log(`${statistics[property]}`);
  }
}
