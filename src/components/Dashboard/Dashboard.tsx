import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import UserDashboardTopBar from "../Navbar/UserDashboardTopBar";
import ItemCard from "../ItemCard/ItemCard";

function Dashboard() {
  return (
    <>
    <div className="userDashboard-component">
      <UserDashboardTopBar />
      </div>
      <div className="userDashboard-mainContainer">
        <Sidebar />
        </div>
        <div className="dashboard-container">
        <div className="dashboard-body">
          <h1 style={{ marginLeft: "3.5rem", marginTop:"5rem" }}>Top Restaurants</h1>
          <div className="first-col">
            <div className="sub-first">
              <img
                src="/src/assets/images/Ellipse.svg"
                alt="Kripsy Kreme Doughnuts"
              />
              <img src="/src/assets/images/Ellipse 5.svg" alt="Chicken filla" />
              <img src="/src/assets/images/Ellipse 8.svg" alt="Tasty Burger" />
              <img src="/src/assets/images/Ellipse 4.svg" alt="Pizza Hut" />
              <img src="/src/assets/images/Ellipse 6.svg" alt="Chicken Farm" />
              <img
                src="/src/assets/images/0hlv_ieme_211029-removebg-preview 1.png"
                alt="Pizza Hut"
              />
            </div>
          </div>

          <div style={{ marginLeft: "3.5rem" }}>
            {" "}
            <h1>New Offers</h1>
          </div>
          <div className="sec-col">
            {/* <div className="sub-sec-col">
              <div className="container">
                <img
                  src="/src/assets/images/Rectangle 57.png"
                  alt="A delicious bowl of delecious food"
                />
                <div>
                  <p className="heading">Lorem ipsum dolor sit</p>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam.
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>

              <div className="container">
                <img
                  src="/src/assets/images/Rectangle 57 (1).png"
                  alt="A delicious bowl of potaton chips and Chicken"
                />
                <div>
                  <p className="heading">Lorem ipsum dolor sit</p>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam.
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>

              <div className="container">
                <img
                  src="/src/assets/images/Rectangle 57 (2).png"
                  alt="A delicious platter of rice and chicken"
                />
                <div>
                  <p className="heading">Lorem ipsum dolor sit</p>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam.
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="sub-sec-col">
              <div className="container">
                <img
                  src="/src/assets/images/Rectangle 57.png"
                  alt="A delicious bowl of delecious food"
                />
                <div>
                  <p className="heading">Lorem ipsum dolor sit</p>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam.
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>

              <div className="container">
                <img
                  src="/src/assets/images/Rectangle 57 (1).png"
                  alt="A delicious bowl of potaton chips and Chicken"
                />
                <div>
                  <p className="heading">Lorem ipsum dolor sit</p>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam.
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>

              <div className="container">
                <img
                  src="/src/assets/images/Rectangle 57 (2).png"
                  alt="A delicious platter of rice and chicken"
                />
                <div>
                  <p className="heading">Lorem ipsum dolor sit</p>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam.
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>
            </div> */}
            <ItemCard
              image="food-item-1.png"
              title="Lorem ipsum dolor sit"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam."
            />
            <ItemCard
              image="food-item-1.png"
              title="Lorem ipsum dolor sit"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam."
            />
            <ItemCard
              image="food-item-1.png"
              title="Lorem ipsum dolor sit"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam."
            />
          </div>
          <div className="sec-col">
            <ItemCard
              image="food-item-1.png"
              title="Lorem ipsum dolor sit"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam."
            />
            <ItemCard
              image="food-item-1.png"
              title="Lorem ipsum dolor sit"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam."
            />
            <ItemCard
              image="food-item-1.png"
              title="Lorem ipsum dolor sit"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt temporibus necessitatibus beatae. Commodi,
                    inventore quam."
            />
          </div>
        </div>
        </div>
      </>
  );
}

export default Dashboard;
