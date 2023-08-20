import { useState, useEffect } from "react";
import RestrauntCard from "./RestraurantCard";
import { RESTAURANT_API } from "../constants";
import SkeletonUI from "./SkeletonUI";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

// import { Link } from "react-router-dom";

function searchRestraunt(searchText, restrauntList) {
  return restrauntList?.filter((restraurant) =>
    restraurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestraurants, setAllRestraurants] = useState([]);
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);

  useEffect(() => {
    console.log("Re-render");
    getAllRestraurants();
  }, []);

  async function getAllRestraurants() {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    setAllRestraurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  if (allRestraurants?.length === 0)
    return (
      <div className="container mx-auto p-4">
        <SkeletonUI />
      </div>
    );
  return (
    <>
      <Searchbar
        onSearch={(searchText) => {
          const data = searchRestraunt(searchText, allRestraurants);
          setFilteredRestraurants(data);
        }}
      />
      <div className="container mx-auto p-4">
        <h1 className="text-orange-600 font-bold mb-4 text-2xl">
          {" "}
          All Restaurants{" "}
        </h1>

        <div className="flex flex-wrap gap-5 " data-testid="res-list">
          {filteredRestraurants?.length > 0 ? (
            filteredRestraurants.map((restraunt) => {
              return (
                <Link
                  className="w-56 bg-slate-100 p-4 block shadow-sm rounded-sm"
                  key={restraunt.info.id}
                  to={"/restraunt/" + restraunt.info.id}>
                  <RestrauntCard {...restraunt.info} />
                </Link>
              );
            })
          ) : (
            <h1> No restraunt found! </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
