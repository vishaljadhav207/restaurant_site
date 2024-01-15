import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <img src="crown.png" alt="crown" class="header-image" />
        <h1>RAJDHANI RESTAURANT</h1>
        <p>Where Every Meal is a Feast</p>
        <p style={{ display: 'flex', justifyContent: 'flex-end' }}>Contact: +91 7676767676</p>
      </header>
      <nav>
        <a href="#locations">Locations</a>
        <a href="#menu">Menu</a>
        <a href="#reviews">Reviews</a>
      </nav>
     
      <section id="locations">
        <h2>Our Locations</h2>
        <div className="locations">
          <div>
            <h3>Kranti chowk</h3>
            <p>Chh.Sambhajinagar,Sector A</p>
          </div>
          <div>
            <h3>Delhi Gate</h3>
            <p>Nashik,Sector A</p>
          </div>
          <div>
            <h3>Seaside</h3>
            <p>Mumbai,Sector A</p>
          </div>
        </div>
      </section>
      <section id="menu">
        <h2>Our Menu</h2>
        <div className="menu">
          <MenuItem name="Deluxe Burger" description="Our signature burger with all the toppings." price="Rs.99" />
          <MenuItem name="Kolhapuri Misal" description="It is a spicy and hearty breakfast" price="Rs.199" />
          <MenuItem name="Pav Bhaji" description="It is a spicy and hearty breakfast" price="Rs.199" />
          <MenuItem name="Thalipeeth" description="It is a spicy and hearty breakfast" price="Rs.199" />
          <MenuItem name="Thalipeeth" description="It is a spicy and hearty breakfast" price="Rs.199" />
         
          
        </div>
      </section>
      <section id="reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews">
          <Review author="John Doe" content="Amazing food and great service! Will definitely come back." />
          <Review author="Jane Smith" content="The atmosphere is cozy, and the desserts are heavenly." />
          <Review author="Jane Smith" content="The atmosphere is cozy, and the desserts are heavenly." />
          <Review author="Jane Smith" content="The atmosphere is cozy, and the desserts are heavenly." />
         
        </div>
      </section>
      
    </div>
  );
}

const MenuItem = ({ name, description, price }) => (
  <div className="menu-item">
    <h3>{name}</h3>
    <p>{description}</p>
    <p>{price}</p>
  </div>
);

const Review = ({ author, content }) => (
  <div className="review">
    <h3>{author}</h3>
    <p>"{content}"</p>
  </div>
);

export default App;
