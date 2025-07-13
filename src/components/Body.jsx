import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import Restaurants from "./Restaurants.jsx";

const Body = () => {
  const [cards, setCards] = useState([]);
  const [defaultCards, setDefaultCards] = useState([]);
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [buttonText, setButtonText] = useState("Top Rated");
  const [currCity, setCurrCity] = useState([
    30.015538499999998,
    77.60388038805745,
  ]);
  const [searchRes, setSearchRes] = useState("");

  const [filtered, setFiltered] = useState(false);

  const fetchCards = async () => {
    const fetchedData = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${currCity[0]}&lng=${
        currCity[1]
      }&offset=0&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING `,
    );
    const fetchedDataJson = await fetchedData.json();

    let arr = [];
    for (let i = 0; i < fetchedDataJson?.data?.cards.length; i++) {
      const temparr = fetchedDataJson?.data?.cards[i]?.card?.card?.gridElements
        ?.infoWithStyle
        ?.restaurants;
      if (temparr) {
        arr = [...arr, ...temparr];
      }
    }

    if (arr) {
      const newCards = new Set([...cards, ...arr]);
      setCards([...newCards]);
      setDefaultCards([...newCards]);
    }
  };

  function searchResFun() {
    const filterCards = defaultCards.filter((card) =>
      card.info.name.toLowerCase().includes(searchRes.toLowerCase())
    );

    setIsSearchOn(true);
    setSearchRes("");
    setCards(filterCards);
  }

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
  return (isSearchOn && (cards.length === 0))
    ? (
      <div className="flex flex-col items-center justify-around gap-5">
        <p>404 Not Found</p>
        <button
          type="button"
          onClick={() => {
            setIsSearchOn(false);
            const timeoutid = setTimeout(() => {
              setCards(defaultCards);
              clearTimeout(timeoutid);
            }, 100);
          }}
          className="bg-[#ED3500] text-white px-3 py-2  font-bold cursor-pointer"
        >
          back to page
        </button>
      </div>
    )
    : (
      <div className="w-[90%] md:w-[80%] xl:w-[70%] mx-auto">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={topRated}
            className="bg-[#ED3500] text-white px-3 py-2  font-bold cursor-pointer"
          >
            {buttonText}
          </button>

          <div className="flex justify-center items-center gap-4">
            <input
              type="text"
              placeholder="enter a restaurant.."
              className="h-6 border-b outline-none focus:outline:none  p-3 text-lg "
              onChange={(e) => {
                setSearchRes(e.target.value);
              }}
              value={searchRes}
            />
            <button
              type="button"
              onClick={searchResFun}
              className="bg-[#ED3500] text-white px-3 py-2  font-bold cursor-pointer"
            >
              Search
            </button>
          </div>
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
