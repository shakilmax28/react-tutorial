import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  const style = {};
  return (
    //In style in takes a javascript object. so first braces for javascript and second braces are for javascript object values
    <header className="header">
      <h1 style={{ style }}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const isPizzaAvailable = pizzas.length > 0 ? true : false;
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {isPizzaAvailable ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from out stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((p) => (
              <Pizza pizzaObject={p} key={p.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menus. Please come back later.</p>
      )}
      {/* <Pizza
        name="Focaccia"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/focaccia.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mashroom"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </div>
  );
}

//Here we are using props destructuring
function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt="PIZZA PIC" />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const startHour = 12;
  const endHour = 22;
  const isOpen = hour >= startHour && hour <= endHour;
  //   if (hour >= startHour && hour <= endHour) alert("We're Currently Open");
  //   else alert("Sorry!!! We're Currently Closed!!!");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order endHour={endHour} />
      ) : (
        <NoAvailOrder startHour={startHour} endHour={endHour} />
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "Wr're Currently Open!");
}

function Order(props) {
  return (
    <div className="order">
      <p>We're open until {props.endHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

function NoAvailOrder(props) {
  return (
    <div className="order">
      <p>
        We're happy to welcome you between {props.startHour}:00 to{" "}
        {props.endHour}
        :00
      </p>
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
