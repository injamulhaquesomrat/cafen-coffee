const calculatePriceByWeight = (pricePer100g, weightInGrams, quantity = 1) => {
  const parsedWeight = parseFloat(weightInGrams);

  const weight = !isNaN(parsedWeight) ? parsedWeight : 100; // fallback to 1g if invalid

  const total = (pricePer100g * weight * quantity) / 100;
  return +total.toFixed(2);
};

export default calculatePriceByWeight;
