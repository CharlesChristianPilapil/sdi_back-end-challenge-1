interface Car {
  size: string;
  seatCapacity: number;
  cost: number;
}

const calcMinCost = (seat: number, carRental: Car[]): { size: string; numCars: number } | null => {
  let minCost = Infinity;
  let minSolution = null;

  for (const car of carRental) {
    const numCars = Math.ceil(seat / car.seatCapacity);
    const totalCost = numCars * car.cost;

    if (totalCost < minCost) {
      minCost = totalCost;
      minSolution = { size: car.size, numCars: numCars };
    }
  }

  return minSolution;
};

export default calcMinCost;