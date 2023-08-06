/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import NetflixCard from "./components/NetflixCard.jsx";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const App = () => {
  const [myData, setMyData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a6ff66bc53mshb9d8fa1abb5adc2p18b716jsn96f6e23c7150",
      "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://netflix-data.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20",
        options
      );
      const data = await res.json();
      // console.log(data);
      setMyData(data.titles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel >
      {myData.map((curElem) => (
        <Carousel.Item key={curElem.summary.id}>
          <NetflixCard actualData={curElem} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default App;
