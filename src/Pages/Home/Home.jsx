import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ToyCollections from "./Home/ToyCollections/ToyCollections";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HappiClints from "./Home/HappyClints/HappiClints";

const Home = () => {
  const toyes = useLoaderData();
  console.log(toyes);

  const [toys, setToys] = useState([]);
  const [product, setProduct] = useState([]);

  const  populerHandleTabs = (toyes)=>{
    setToys(toyes)
  }

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

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <Banner></Banner>

      <h2 className="text-5xl text-center font-bold text-red-800 mt-11 mb-2">
        Best Toys for Baby & Kids Collections
      </h2>
      <hr />

<p className="text-2xl my-3 font-bold">Cetagory by toys:</p>
      <Tabs>
        <TabList>
          <Tab  onClick={() => populerHandleTabs(toyes)}>Populer</Tab>

          <Tab onClick={() => carHandleTabs(toyes)}>Cars Toys</Tab>

          <Tab onClick={() => truckHandleTabs(toyes)}>Trucks Toys</Tab>
          <Tab onClick={() => helicopterHandleTabs(toyes)}>Helicopter Toys</Tab>
        </TabList>

        <TabPanel>
          <div className="my-11 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {toys.map((toy) => (
              <ToyCollections toy={toy} key={toy._id}></ToyCollections>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="my-11 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {toys.map((toy) => (
              <ToyCollections toy={toy} key={toy._id}></ToyCollections>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="my-11 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {toys.map((toy) => (
              <ToyCollections toy={toy} key={toy._id}></ToyCollections>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="my-11 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            {toys.map((toy) => (
              <ToyCollections toy={toy} key={toy._id}></ToyCollections>
            ))}
          </div>
        </TabPanel>
      </Tabs>

      <HappiClints></HappiClints>
    </div>
  );
};

export default Home;
