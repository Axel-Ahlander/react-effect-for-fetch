import { useState, useEffect } from "react"
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";




function AdviceSection() {

  const [slip, setSlip] = useState("");
  const [favoriteSlip, setFavoriteSlip] = useState([]);
  const url = "https://api.adviceslip.com/advice";

  const fetchData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setSlip(jsonData);
  };

  const handleMoreAdvice = () => {
    fetchData();
  }

useEffect(() => {
  fetchData();
}, []);

  return (
    <section>
      <h2>Advice Section</h2>
      {slip && slip.slip ? (
      <AdviceSlip data={slip.slip.advice} handleMoreAdvice = {handleMoreAdvice} />
      ) : (
    <p>Loading advice...</p>
  )}
      <section className="favourtite-slips-list">
        <FavouriteSlipsList/>
      </section>
    </section>
  )
}

export default AdviceSection
