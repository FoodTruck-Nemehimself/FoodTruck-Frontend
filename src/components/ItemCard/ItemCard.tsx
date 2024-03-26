import OrangeButton from '../OrangeButton/OrangeButton';
import "./ItemCard.css";
import { Link } from "react-router-dom";

function ItemCard({ image, title, description }) {
  return (
    <Link to="/menudetailspage">
      <div className="food-item-card">
        <img src={`../images/${image}`} />
        <h5>{title}</h5>
        <p>{description}</p>
        <OrangeButton buttonText="Add to Cart" />
      </div>
    </Link>
  );
}

export default ItemCard;
