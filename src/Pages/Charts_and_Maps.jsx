import axios from "axios";
import { motion } from "framer-motion";
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { MapContainer, TileLayer } from "react-leaflet";
import WorldMap from "../Components/WorldMap";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

const Dashboard = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios(
      "https://disease.sh/v3/covid-19/countries"
    ).then((res) => {
      const data = res.data;
      setCountriesData(data);
    });
  }, []);

  useEffect(() => {
    axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    ).then((res) => {
      const data = res.data;
      const newChartData = {
        labels: Object.keys(data.cases),
        datasets: [
          {
            label: "Cases",
            data: Object.values(data.cases),
            fill: false,
            borderColor: "#f50057",
            tension: 0.2,
          },
        ],
      };
      setChartData(newChartData);
    });

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  return (
    <div className="w-full pt-20 px-4 pb-8">
      <motion.h1
        className="text-4xl font-bold mb-4 text-pink-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Corona Cases Chart
      </motion.h1>
      <motion.div
        className="border-2 border-red-100 w-11/12 m-auto 10 auto 10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {chartData.datasets ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-pink-600 mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </motion.div>

      <motion.h1
        className="text-4xl font-bold mb-4 mt-4 text-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Corona Cases World Map
      </motion.h1>
      <motion.div
        className="border-2 border-blue-500 w-11/12 m-auto 5 auto 5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <MapContainer
          className="m-auto w-full border-blue-700"
          bounds={[[-60, -180], [85, 180]]}
          zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <WorldMap countriesData={countriesData} />
        </MapContainer>
      </motion.div>
    </div>
  );
};

export default Dashboard;
