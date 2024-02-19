import Article from "./Articles";
import logo from "../assets/logonytimesarticle.png";

const Home = () => {

  return (
    <div className="absolute w-full h-screen overflow-x-auto">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-screen">
            <div className="flex p-2">
              <img src={logo} alt="NY Times Article Logo" />
            </div>
          </div>
        </div>
        <div className=" mt-2 flex flex-col">
          <div className=""></div>
          <h3 className="font-general-regular text-center text-md sm:text-xl mb-3">
            Search articles by keywords
          </h3>
          <div className="flex place-self-center justify-between border-b border-primary-light pb-3 gap-3">
            <div></div>
            <div></div>
          </div>
          <Article />
        </div>
      </div>
    </div>
  );
};

export default Home;
