import { restaurantImgURL } from "../constants";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="restraunt-card">
      <img alt="" src={restaurantImgURL + cloudinaryImageId} />
      <h2> {name} </h2>
      <h4> {cuisines.join(", ")} </h4>
      <h6> {avgRating == "--" ? "0 star" : `${avgRating} Stars`} </h6>
    </div>
  );
};

export default RestrauntCard;
