import { useEffect, useState } from "react";
import Header from "./Header";
import "./App.css";
import jsonData from "./data.json";
import { ProductInterface } from "./types";
import SalesData from "./SalesData";
import ProductInfo from "./ProductInfo";

function App() {
  const [data, setData] = useState<ProductInterface | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response: ProductInterface[] = await jsonData;
        setData(response[0]); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching the JSON data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="page-container">
        {data ? <ProductInfo data={data}/> : "Loading"}
        {data ? <SalesData salesData={data?.sales} /> : "Loading..."}
      </div>
    </div>
  );
}

export default App;
