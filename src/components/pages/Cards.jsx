import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


const Cards = () => {
  const { cardID } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const cities = useSelector((state) =>
    state.cities.value.find((city) => city.id.toString() === cardID)
  );

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, [cardID]);

  if (!isModalOpen) {
    return null;
  }

  if (!cities) {
    return null;
  }

  console.log(cities);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-blue-950 text-white rounded-2xl shadow-lg max-w-md w-full relative p-4">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white text-black font-semibold px-2 rounded-full hover:bg-red-700"
        >
          X
        </button>

        <div className="flex flex-col items-center p-4">
          <h1 className="text-3xl font-bold text-blue-500">{cities?.name}</h1>
          <p className="text-gray-300 my-4">{cities?.description}</p>
          {cities?.isVisited ? (
            <span className="text-green-600">✔️ visitata</span>
          ) : (
            <span className="text-red-600">✖️ non visitata</span>
          )}
          <div className="mt-4">
            <img
              src={cities?.imgURL}
              className="rounded-md object-cover w-64 aspect-[376/251]"
              alt={cities?.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
