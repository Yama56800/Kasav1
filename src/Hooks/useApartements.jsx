import { useState, useEffect } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("logements.json");
        const data = await response.json();
        setApartments(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []); 

  return apartments;
};
