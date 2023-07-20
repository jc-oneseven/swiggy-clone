import { useState, useEffect } from "react";
import RestrauntCard from "./RestraurantCard";
import { RESTAURANT_API } from "../constants";
import SkeletonUI from "./SkeletonUI";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

function searchRestraunt(searchText, restrauntList) {
  return restrauntList?.filter((restraurant) =>
    restraurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestraurants, setAllRestraurants] = useState([]);
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Re-render");
    getAllRestraurants();
  }, []);

  async function getAllRestraurants() {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    setAllRestraurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (allRestraurants.length === 0) return <SkeletonUI />;
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        onClick={() => {
          const data = searchRestraunt(searchText, allRestraurants);
          console.log(data);
          setFilteredRestraurants(data);
        }}>
        Search
      </button>

      <div className="restraunt-card-list">
        {filteredRestraurants.length > 0 ? (
          filteredRestraurants.map((restraunt) => {
            return (
              <Link
                key={restraunt.data.id}
                to={"/restraunt/" + restraunt.data.id}>
                <RestrauntCard {...restraunt.data} />
              </Link>
            );
          })
        ) : (
          <h1> No restraunt found! </h1>
        )}
      </div>
    </>
  );
};

export default Body;
