// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useState } from "react";
import "./menupage.css";
import ItemCard from "../../components/ItemCard/ItemCard";
import UserDashboardTopBar from "../../components/Navbar/UserDashboardTopBar";
import Sidebar from "../../components/Sidebar/Sidebar";

//Test data for menu page
const categories = [
  {
    image: "category-image-1.png",
    categoryName: "Pizza",
    categoryImage: "pizza.png",
  },

  {
    image: "category-image-1.png",
    categoryName: "Rice",
    categoryImage: "Rice.png",
  },

  {
    image: "category-image-1.png",
    categoryName: "Chicken",
    categoryImage: "Chicken.png",
  },

  {
    image: "category-image-1.png",
    categoryName: "Grilled Meat",
    categoryImage: "Grilled Meat.png",
  },

  {
    image: "category-image-1.png",
    categoryName: "Burger&Fries",
    categoryImage: "Burger&Fries.png",
  },

  {
    image: "category-image-1.png",
    categoryName: "Burger",
    categoryImage: "Burger.png",
  },

  {
    image: "category-image-1.png",
    categoryName: "Pasta",
    categoryImage: "Pasta.png",
  },

  {
    image: "category-image-1.png",
    categoryName: "cocktails",

    categoryImage: "cocktails.png",
  },
];
const categoryItems = [
  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },

  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },

  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },

  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },

  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },

  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },

  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },

  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    image: "food-item-1.png",

    title: "Lorem ipsum dolor sit amet",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

function MenuPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCategories, setCurrentCategories] = useState([...categories]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCategoryItems, setCurrentCategoryItems] = useState([
    ...categoryItems,
  ]);

  const categoriesList = currentCategories.map((category, index) => {
    return (
      <div key={index} className="category-item">
        <img src={`../images/${category.image}`} />
        <p>{category.categoryName}</p>
      </div>
    );
  });

  const categoryItemsList = currentCategoryItems.map((category, index) => {
    return (
      <ItemCard
        key={index}
        image={category.image}
        title={category.title}
        description={category.description}
      />
    );
  });
  return (
    <div className="menu-page-container">
      <Sidebar />

      <div className="menu-area">
        <UserDashboardTopBar />

        {currentCategories.length ? (
          <div className="category-area">
            <div>
              <div className="heading-section">
                <h2 className="category-heading">Category</h2>
                <img
                  src="../images/filter.png"
                  alt="filter icon"
                  className="filter-icon"
                />
              </div>
              <div className="category-list">{categoriesList}</div>
            </div>

            <div className="category-item-area">
              <h2 className="category-item-heading">Jollof Rice</h2>
              <div className="category-items-list">{categoryItemsList}</div>
            </div>
          </div>
        ) : (
          <h1>No Menu Information</h1>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
