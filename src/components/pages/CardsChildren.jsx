import { Link, Outlet } from "react-router-dom";
import CardItem from "../CardItem";
import Navbar from "../Navbar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, reset } from "../redux/citiesSlice";
const CardsChildren = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.value);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  function handleRemove(cityID) {
    dispatch(remove(cityID));
  }

  function handleReset() {
    const manualCities = JSON.parse(localStorage.getItem("manualCities")) || [];

    const defaultCities = [
      {
        id: 0,
        name: "Bangkok",
        description:
          "Bangkok è la capitale della Thailandia, il centro è un mix di grattacieli moderni, templi antichi e vivaci strade affollate.",
        imgURL:
          "https://images.unsplash.com/photo-1531169628939-e84f860fa5d6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
        isDefault: true,
      },
      {
        id: 1,
        name: "Giappone",
        description:
          "Il Giappone è un mix sorprendente di storia, innovazione e bellezze naturali. La sua cultura è profondamente influenzata da valori come il rispetto, l’armonia e la bellezza della natura.",
        imgURL:
          "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
        isDefault: true,
      },
      {
        id: 2,
        name: "Corea",
        description:
          "La Corea del Sud è un paese affascinante, noto per la sua rapida crescita economica e la sua cultura dinamica.",
        imgURL:
          "https://plus.unsplash.com/premium_photo-1661948404806-391a240d6d40?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
        isDefault: true,
      },
      {
        id: 3,
        name: "Turchia",
        description:
          "La Turchia è un paese ricco di contrasti e storia. Offre paesaggi naturali mozzafiato. Con una cultura vivace, una storia affascinante e un'ospitalità calorosa, la Turchia è una meta ideale per chi cerca avventure e scoperte culturali.",
        imgURL:
          "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
        isDefault: true,
      },
    ];
    const unitedCities = [...defaultCities, ...manualCities];
    dispatch(reset(unitedCities));
    localStorage.setItem("cities", JSON.stringify(unitedCities));
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center gap-20">
        <h1 className="text-3xl font-bold">Pagina CardsChildren</h1>
        <button
          className="bg-gray-500 w-20 h-8 rounded hover:underline text-black font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap gap-5 mt-10">
        {cities.length > 0 &&
          cities
            .filter((city) => city.name && city.imgURL)
            .map((city) => (
              <Link to={`/cards-children/${city.id}`} key={city.id}>
                <CardItem
                  name={city.name}
                  isVisited={city.isVisited}
                  imgURL={city.imgURL}
                  description={city.description}
                  remove={handleRemove}
                  id={city.id}
                  isDefault={city.isDefault}
                />
              </Link>
            ))}
      </div>
      <Outlet />
    </>
  );
};

export default CardsChildren;
