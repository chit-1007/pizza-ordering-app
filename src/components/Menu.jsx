import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import "./Menu.css";

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const location = useLocation();
  const userName = location.state?.name;
  console.log(userName)

  // Fetch pizzas on component mount
  useEffect(() => {
    const fetchPizzas = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/aditya-samal/c075c71045acb8fd3b04a7996c7463a7/raw/905b79d1510842e3a770e9fa2641b44bc9d3c716/pizzas.json"
        );
        console.log(response)
        if (!response.ok) throw new Error("Failed to fetch pizzas");
        const data = await response.json();
        setPizzas(data.data);
        setIsLoading(false);

      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPizzas();
  }, []); // Empty dependency array = runs once on mount

  console.log(pizzas);

  if (isLoading) return <div>Loading pizzas... 🍕</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(pizzas.length)
  if (!pizzas.length) return <div>No pizzas found.</div>;

  return (
    <div className="menu-container">
      <div className="username">
        {userName && <h3>Welcome, {userName}!</h3>}
      </div>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="pizza-card">
          <div className="image">
            <img src={pizza.imageUrl} alt={pizza.name} className="pizza-image" style={{ width: "150px", height: "auto" }} />
          </div>
          <div className="info">
            <div className="inf">
              <h3>{pizza.name}</h3>
              <p>{Array.isArray(pizza.ingredients) ? pizza.ingredients.join(", ") : pizza.ingredients}</p>
            </div>
            <div className="price">
              <p>${pizza.unitPrice}</p>
            </div>
          </div>
          <div className="btn">
            <button onClick={() => dispatch(addItem(pizza))} disabled={pizza.soldOut}> {pizza.soldOut ? "SOLD OUT" : "ADD TO CART"}</button>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Menu;