import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [theData, setTheData] = useState([]);

  useEffect(() => {
    const findData = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
        );
        setTheData(response.data);
        console.log("axios response is this", response.data);
    
     
      } catch (err) {
        console.log(err);
      }
    };

    findData();
  }, []);

  const cardData = theData.map((data) => {
    return <Card key={data.id} value={data} />;
    
  });

 

console.log("data obtained after mapping",cardData);
  return (
    <div className="container">
      <div className="grid">
        {/* mapping of the data should be here */}
        {cardData}
      </div>
    </div>
  );
};

export default Home;
