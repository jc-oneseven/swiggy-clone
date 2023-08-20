import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restraunt, setRestraunt] = useState(null);

  useEffect(() => {
    getRestrauntDetail();
  }, []);

  async function getRestrauntDetail() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestraunt(json?.data);
  }

  return restraunt;
};

export default useRestaurant;
