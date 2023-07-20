import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { restaurantImgURL } from "../constants";
import SkeletonUI from "./SkeletonUI";

const RestrauntDetail = () => {
  const { id } = useParams();
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

  return !restraunt ? (
    <SkeletonUI />
  ) : (
    <div className="restraunt-detail">
      {/* Restraunt Details */}
      <div>
        <h5> Restraurant ID: {restraunt?.id} </h5>
        <h1> Restraurant Name: {restraunt?.name} </h1>
        <img
          src={restaurantImgURL + restraunt?.cloudinaryImageId}
          alt="Restraunt Image"
        />
      </div>
      {/* Restraunt Menu */}

      <table border={1}>
        <caption> Menu </caption>
        <thead>
          <tr>
            <th> Items </th>
            <th> Price </th>
          </tr>
        </thead>
        <tbody>
          {Object.values(restraunt?.menu?.items).map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.price / 100}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RestrauntDetail;
