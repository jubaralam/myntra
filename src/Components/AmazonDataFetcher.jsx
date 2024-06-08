import React, { useEffect, useState } from "react";
import axios from "axios";

const AmazonDataFetcher = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://real-time-amazon-data.p.rapidapi.com/asin-to-gtin",
        {
          params: { asin: "B01FHOWYA2", country: "US" },
          headers: {
            "x-rapidapi-key":
              "c047d2de18msh658948c19f6f310p1f2fb8jsn3e5b160aea41",
            "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
          },
        }
      );

      setData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount < 3) {
        setRetryCount(retryCount + 1);
        setTimeout(fetchData, 2000); // Retry after 2 seconds
      } else {
        setError(error.message);
      }
    }
  };

  // Retry if retryCount changes

  const options = {
    method: "GET",
    url: "https://real-time-amazon-data.p.rapidapi.com/products-by-category",
    params: {
      category_id: "2478868012",
      page: "1",
      country: "US",
      sort_by: "RELEVANCE",
      product_condition: "ALL",
    },
    headers: {
      "x-rapidapi-key": "c047d2de18msh658948c19f6f310p1f2fb8jsn3e5b160aea41",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };
  const getDataFromAPI = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchData();
    getDataFromAPI();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Amazon Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AmazonDataFetcher;
