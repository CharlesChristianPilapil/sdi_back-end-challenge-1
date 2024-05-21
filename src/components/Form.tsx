import React, { useContext, useState } from "react";
import { AppContext } from "../context/ContextProvider";
import calcMinCost from "../helper/calcMinCost";

const Form = () => {
  const [seat, setSeat] = useState<string>("");
  const [invalidInput, setInvalidInput] = useState<boolean>(false);
  const { solution, setSolution } = useContext(AppContext);

  const CarRental = [
    { size: "S", seatCapacity: 5, cost: 5000 },
    { size: "M", seatCapacity: 10, cost: 8000 },
    { size: "L", seatCapacity: 15, cost: 12000 },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSeat(value);
    setInvalidInput(!(parseInt(value) > 0));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputNumber = parseInt(seat);
    if (isNaN(inputNumber) || inputNumber <= 0) {
      setInvalidInput(true);
      setSolution(null);
    } else {
      setSolution(calcMinCost(inputNumber, CarRental));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="seat">Please input number (seat):</label>
        <input
          type="number"
          id="seat"
          value={seat}
          onChange={handleInputChange}
        />
        <button type="submit">Calculate</button>
      </form>
      {invalidInput && (
        <p>Invalid value. Please enter a number greater than 0.</p>
      )}
      {solution && (
        <div>
          <p>
            {solution.size} x {solution.numCars}
          </p>
          <p>
            Total = PHP{" "}
            {solution.numCars *
              CarRental.find((car) => car.size === solution.size)!.cost}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;