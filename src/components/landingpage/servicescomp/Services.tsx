import "./services.css";

export const Services = () => {
  return (
    <div className="services-frame">
      <h3 className="services-h3">Our Services</h3>

        <div className="services-container">
            <div className="service-box">
                <img
                className="service-img"
                alt="Service"
                src="../images/services 1.png"
                />
                <h4 className="service-h4">Top Restaurants within your Reach</h4>
                <p className="service-text">
                Lorem ipsum dolor sit amet consectetur. Aenean augue eu bibendum morbi.
                </p>
            </div>
    
            <div className="service-box">
                <img
                className="service-img"
                alt="Service"
                src="../images/services 2.png"
                />
                <h4 className="service-h4">Fast Delivery</h4>
                <p className="service-text">
                Lorem ipsum dolor sit amet consectetur. Aenean augue eu bibendum morbi.
                </p>
            </div>
    
            <div className="service-box">
                <img
                className="service-img"
                alt="Service"
                src="../images/services 3.png"
                />
                <h4 className="service-h4">Varieties of Exotic Meals</h4>
                <p className="service-text">
                Lorem ipsum dolor sit amet consectetur. Aenean augue eu bibendum morbi.
                </p>
            </div>
        </div>

    </div>
  );
};
