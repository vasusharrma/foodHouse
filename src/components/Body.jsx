import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import Restaurants from "./Restaurants.jsx";

const Body = () => {
  const [cards, setCards] = useState([]);
  const [defaultCards, setDefaultCards] = useState([]);
  const [buttonText, setButtonText] = useState("Top Rated");
  const [currCity, setCurrCity] = useState([
    30.015538499999998,
    77.60388038805745,
  ]);

  const [filtered, setFiltered] = useState(false);

  const fetchCards = async () => {
    const fetchedData = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${currCity[0]}&lng=${
        currCity[1]
      }&offset=0&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING `,
    );
    const fetchedDataJson = await fetchedData.json();

    const arr = fetchedDataJson?.data?.cards[1]?.card?.card?.gridElements
      ?.infoWithStyle
      ?.restaurants;
    if (arr) {
      const newCards = new Set([...cards, ...arr]);
      setCards([...newCards]);
      setDefaultCards([...newCards]);
    }
  };

  function topRated() {
    if (filtered) {
      setCards([...defaultCards]);
      setFiltered(false);
      setButtonText("Top Rated");
    } else {
      const tempCards = cards.filter((card) => card.info.avgRatingString > 4.2);
      setCards([...tempCards]);
      setButtonText("All Resta");
      setFiltered(true);
    }
  }
  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <div className="w-[90%] md:w-[80%] xl:w-[70%] mx-auto">
      <div className="flex">
        <button
          type="button"
          onClick={topRated}
          className="bg-[#ED3500] text-white px-3 py-2  font-bold cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] place-items-center">
        {cards.length
          ? (cards.map((card, index) => (
            <Restaurants
              key={index}
              info={card.info}
            />
          )))
          : <Shimmer />}
      </div>
    </div>
  );
};
export default Body;
