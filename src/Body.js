import { hardCodedData } from "../utils/constant";
import { Card } from "./Card";
const Body = () => {
  return (
    <div className="container">
      <input type="text" placeholder="Search Places" />
      <div className="cards">
        {/* giving key prop or attribute so comp is uniquely represented  */}
        {/* if there is one more item is added in data key is helpful then  */}
        {hardCodedData.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
