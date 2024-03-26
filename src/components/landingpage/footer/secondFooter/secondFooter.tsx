import "./secondFooter.css";

export const SecondFooter = () => {
  return (
    <div className="SecondFooter-layout">
      <div className="text-field">
        <img
          className="rectangle"
          src="../images/Logo.png"
          alt="Foodtruck Logo"
        />

        <p className="text-field-text">
          <span>
          We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />consequat...
          </span>
          <span className="text-field-text-span"><a href="#">Read More</a></span>
        </p>
      </div>

      <div className="secondFooter-contact">
        <div className="contact">
          <img
            className="rectangle-pic"
            src="../images/call.svg"
            alt="call button icon"
          />

          <p className="text-field-text">
            <span>
            Tel 
            </span>
            <br />
            <span className="text-field-text-span">310-437-2766</span>
          </p>
        </div>
        <div className="contact">
        <img
          className="rectangle"
          src="../images/mail.svg"
          alt="mail button icon"
        />

        <p className="text-field-text">
          <span>
          Mail 
          </span>
          <br />
          <span className="text-field-text-span">unreal@outlook.com</span>
        </p>
        </div>
        <div className="contact">
        <img
          className="rectangle"
          src="../images/location.svg"
          alt="location button icon"
        />

        <p className="text-field-text">
          <span>
          Address 
          </span>
          <br />
          <span className="text-field-text-span">706 Campfire Ave. <br />Meriden, CT 06450</span>
        </p>
        </div>
        <div className="contact">
        <img
          className="rectangle"
          src="../images/fax.svg"
          alt="fax button icon"
        />

        <p className="text-field-text">
          <span>
          Fax 
          </span>
          <br />
          <span className="text-field-text-span">+1-000-0000</span>
        </p>
        </div>
        
      </div>
    </div>
  );
};
