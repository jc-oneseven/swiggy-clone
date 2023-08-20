import { restaurantImgURL } from "../constants";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="flex flex-col h-full">
      <img alt="" src={restaurantImgURL + cloudinaryImageId} />
      <h2 className="font-bold mt-2 hover:text-orange-600"> {name} </h2>
      <h4 className="text-sm my-2"> {cuisines.join(", ")} </h4>
      <h6 className="text-sm text-sky-900 font-bold mt-auto">
        {avgRating == "--" ? "0 star" : `${avgRating} Stars`}
      </h6>
    </div>
  );
};

export default RestrauntCard;
