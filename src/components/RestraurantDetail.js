import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { restaurantImgURL } from "../constants";
import SkeletonUI from "./SkeletonUI";
import useRestaurant from "../utils/UseRestaurantDetail";

const RestrauntDetail = () => {
  const { id } = useParams();
  const restraunt = useRestaurant(id);

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
