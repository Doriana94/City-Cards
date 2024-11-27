import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./redux/citiesSlice";
import { v4 as uuidv4 } from "uuid";

const CardForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgURL: "",
    isVisited: false,
  });

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const city = {
      id: uuidv4(),
      name: formData.name,
      description: formData.description,
      imgURL: formData.imgURL,
      isVisited: formData.isVisited,
    };

    dispatch(add(city));

    const manualCities = JSON.parse(localStorage.getItem("manualCities")) || [];
    manualCities.push(city);
    localStorage.setItem("manualCities", JSON.stringify(manualCities));

    setFormData({
      name: "",
      description: "",
      imgURL: "",
      isVisited: false,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mt-10 bg-zinc-900 p-5 rounded-lg"
    >
      <div className="flex flex-col">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          className="bg-gray-500 p-2 rounded"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Descrizione</label>
        <textarea
          id="description"
          className="bg-gray-500 p-2 rounded"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Immagine</label>
        <input
          className="bg-gray-500 p-2 rounded"
          type="text"
          name="imgURL"
          value={formData.imgURL}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Visitata?</label>
        <input
          className="bg-gray-500"
          type="checkbox"
          name="isVisited"
          checked={formData.isVisited}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="bg-black border-solid rounded h-10 text-white"
        type="submit"
      >
        Aggiungi Card
      </button>
    </form>
  );
};

export default CardForm;
