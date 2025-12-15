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
    <div className="max-w-5xl mx-auto p-8 pt-30">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6 flex justify-between items-center">
        <p>{car.brand} — {car.model}</p>
        <p className="text-xl">⭐⭐⭐⭐⭐ {car.rating}</p>
      </h1>

      <div className=" lg:gap-10">
        <p className="text-xl text-amber-500 mt-2">{car.price}</p>
        <p className="text-xl text-gray-500 mt-2"><span className="text-gray-500 font-semibold">Discount : </span>{car.discout}%</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {car.details.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-3 text-center font-medium"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="border p-5 flex flex-col gap-3 my-5 rounded-lg border-gray-300"> 
        <h1 className="text-3xl font-jalano font-semibold ">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-[18px] text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ut obcaecati. Sunt atque ad blanditiis alias saepe numquam sed animi non. Itaque dignissimos modi enim dolor, commodi non corporis molestias sequi pariatur, cupiditate fugiat necessitatibus voluptatem dicta deleniti incidunt accusamus quasi, labore vel expedita impedit asperiores veritatis adipisci! Provident non, expedita iste, sunt impedit exercitationem et deserunt magni tempore veniam optio ipsum reprehenderit, magnam rem. Nam, accusamus. Quasi libero alias numquam autem cumque amet repellendus culpa? Nobis soluta, odio aliquam omnis iusto quam. Optio numquam soluta quae neque adipisci iusto laborum natus? Dolor perferendis quis iure pariatur cumque voluptates vel!
        </p>
      </div>
    </div>
  );
};

export default CarsDetails;
