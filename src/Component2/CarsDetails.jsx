import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const CarsDetails = () => {
  const { id } = useParams(); // /cars/:id
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/CarCard.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedCar = data.find(
          (item) => item.id === parseInt(id)
        );
        setCar(selectedCar);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (!car) {
    return <div className="text-center p-10">Car not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">
        {car.brand} — {car.model}
      </h1>

      <p className="text-xl text-amber-500 mt-2">{car.price}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {car.details.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 text-center font-medium"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsDetails;
