import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Map from "./Map";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Map></Map>
      <NewsLetter></NewsLetter>
      <FeaturedRooms></FeaturedRooms>
    </div>
  );
};

export default Home;
