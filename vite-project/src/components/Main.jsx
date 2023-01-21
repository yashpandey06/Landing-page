import React from "react";
import Footer from "./Footer";
const Main = () => {
  return (
    <div className="h-screen w-full">
      <div className="container mx-auto px-6 pt-12 flex-1 text-center my-8">
        <h2 className="text-md md:text-3xl uppercase">hello</h2>
        <h3 className="text-3xl md:text-4xl lg:text-6xl">
          Welcome to Chimp Travels
        </h3>
        <div className="flex flex-col justify-center items-center text-center mt-8 p-4">
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque
          eius explicabo quis aut cupiditate possimus voluptas fuga inventore.
          Saepe quasi vitae autem porro cupiditate quisquam est, aspernatur
          voluptatibus perspiciatis?</p>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default Main;
