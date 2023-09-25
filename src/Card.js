export const Card = ({ resData }) => {
  const { info } = resData;
  const { name, cuisines, avgRatingString } = info;
  const styleCard = {
    borderRadius: "10px",
  };
  return (
    <div className="res-card" style={styleCard}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>cusines: {cuisines.join(",")}</p>
      <p>rating: {avgRatingString}</p>
      <p>delivery time: {info?.sla?.deliveryTime} min </p>
    </div>
  );
};

// named and default export cant be used for same comp in the same file
export default Card;
