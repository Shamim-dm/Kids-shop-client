import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ToyCollections from "./Home/ToyCollections/ToyCollections";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HappiClints from "./Home/HappyClints/HappiClints";
import ChoiseShop from "./Home/ChoiseShop/ChoiseShop";
import ToyGallery from "./Home/ToyGallery/ToyGallery";
import Marquee from "react-fast-marquee";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const toyes = useLoaderData();
  // console.log(toyes);
useTitle("")
  const [toys, setToys] = useState([]);
  const [product, setProduct] = useState([]);


const toyDetails = id =>{
  console.log(id)
}








  const populerHandleTabs = (toyes) => {
    setToys(toyes);
  };

  const carHandleTabs = (id) => {
    const sort = toyes.filter((toy) => toy.category == "cars");
    setToys(sort);
    console.log(sort);
  };

  const truckHandleTabs = (id) => {
    const sort = toyes.filter((toy) => toy.category == "truck");
    setToys(sort);
    console.log(sort);
  };

  const helicopterHandleTabs = (id) => {
    const sort = toyes.filter((toy) => toy.category == "Helicopter");
    setToys(sort);
    console.log(sort);
  };

  const busHandleTabs = (id) => {
    const sort = toyes.filter((toy) => toy.category == "bus");
    setToys(sort);
    console.log(sort);
  };

  useEffect(() => {
    fetch("https://toy-vehicles-server-shamim-dm.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="my-5 space-y-4">
        <h2 className=" text-2xl md:text-5xl text-sky-800 font-bold text-center">
          Here is some populer toys photos
        </h2>
        <hr />
      </div>
      <Marquee speed={100} className="flex gap-11">
        {toyes.map(toy => (
          <ToyGallery toy={toy} key={toy._id} ></ToyGallery>
        ))}
      </Marquee>

      <h2 className="text-3xl md:text-5xl text-center font-bold text-red-800 mt-11 mb-2">
        Best Toys for Baby & Kids Collections
      </h2>
      <hr />

      <p className="text-2xl my-3 font-bold">Cetagory by toys:</p>
      <Tabs>
        <TabList>
          <Tab onClick={() => populerHandleTabs(toyes)}> Populer</Tab>

          <Tab onClick={() => carHandleTabs(toyes)}> Cars Toys</Tab>

          <Tab onClick={() => truckHandleTabs(toyes)}> Trucks Toys</Tab>
          <Tab onClick={() => helicopterHandleTabs(toyes)}>         
            Helicopter Toys
          </Tab>
          <Tab onClick={() => busHandleTabs(toyes)}> Bus Toys</Tab>
        </TabList>

        <TabPanel>
          <div className="my-11 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {toys.map((toy) => (
              <ToyCollections toy={toy} key={toy._id} toyDetails={toyDetails} ></ToyCollections>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="my-11 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {toys.map((toy) => (
              <ToyCollections toy={toy} key={toy._id} toyDetails={toyDetails}></ToyCollections>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="my-11 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {toys.map((toy) => (
              <ToyCollections toy={toy} key={toy._id} toyDetails={toyDetails}></ToyCollections>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="my-11 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {toys.map((toy) => (
              <ToyCollections toy={toy} key={toy._id} toyDetails={toyDetails} ></ToyCollections>
            ))}
           
          </div>
        </TabPanel>

        <TabPanel>
          <div className="my-11 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {toys.map((toy) => (
              <ToyCollections toy={toy} key={toy._id} toyDetails={toyDetails} ></ToyCollections>
            ))}
          </div>






        </TabPanel>
      </Tabs>








      <ChoiseShop></ChoiseShop>
      <HappiClints></HappiClints>





{/* Put this part before </body> tag */}






    </div>
  );
};

export default Home;
