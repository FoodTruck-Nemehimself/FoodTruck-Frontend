import { useState, useEffect } from 'react';
import './AddMenu.css';
import { Link, Navigate } from 'react-router-dom';
import { FormEvent, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Sider from '../AddMenu-Sider/Sider';
import SiderTopBar from '../AddMenu-Sider/Sider-Top-Bar';

const AddMenu = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [droppedImageName, setDroppedImageName] = useState('');
const [nameofDish, setNameofDish] = useState("")
const [category, setCategory] = useState("")
const [priceofDish, setPriceofDish] = useState("")
const [description, setDescription] = useState("")
const [imageofDish, setImageofDish] = useState("")
const [userName, setUserName] = useState(""); 

const navigate = useNavigate()

useEffect(() => {
  // Fetch user details when the component mounts
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("http://localhost:4000/protected-routes/restaurant", {
        withCredentials: true,
      });

      if (response.status === 200 && response.data.restaurant) {
        setUserName(response.data.restaurant.nameofRestaurant); // Assuming the restaurant's name is available
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  fetchUserDetails();
}, []); // Empty dependency array ensures this effect runs only once on mount

  const dropHandler = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    const droppedFile = droppedFiles[0];
    setDroppedImageName(droppedFile.name);
    setIsDragging(false);
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const dragLeaveHandler = () => {
    setIsDragging(false);
  };

  const handleFileInputChange = () => {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      fileInput.click();
      setDroppedImageName(selectedFile.name);
    }
  };

  const handleSubmit = async (e:FormEvent) => {
    // Handle form submission logic here
    e.preventDefault()

    const res = await axios.post(
      "http://localhost:4000/restaurant/addMenu",

      {
        nameofDish:nameofDish,
        priceofDish:priceofDish,
        category:category,
        description:description,
        imageofDish:imageofDish
      },
      {
        withCredentials:true,
      }
    );

    if(res.status === 200 && res.data.message){
      navigate("")
      console.log("Submitted")

      setNameofDish("");
      setPriceofDish("");
      setCategory("");
      setDescription("");
      setImageofDish("");
    }    

  }
      
      // const handleClick = (e)=>{
      //   e.preventDefault()
      //   console.log(nameofDish,category,priceofDish,description,imageofDish)
      // }
  return (
    <>
      {/* <div className="addmenu-navbar">
        <div className="notifify">
          <img src="images/Icon.png" alt="notification bell" />
          <span className="notification-count"></span>
          <div className="user-profile-container">
            <img src="images/profiledummy.png" alt="user profile" className="user-profile" />
            <span className="user-name">{userName}</span>
          </div>
        </div>
      </div>
      <aside>
        <div className="logo"></div>
        <div className="cont">
          <a href="#" className="sidebar-item">
            <img src="images/check_circle_outline.png" alt="Home Icon" />
            <span className="home">Order Conformation</span>
          </a>
          <a href="#" className="sidebar-item">
            <img src="images/circle-plus.png" alt="Home Icon" />
            <span className="home">Add Menu</span>
          </a>
          <a href="#" className="sidebar-item">
            <img src="images/cog.png" alt="Home Icon" />
            <span className="home">Settings</span>
          </a>
          <Link to="/" className="sidebar-item">
            <img src="images/logout.png" alt="Home Icon" />
            <span className="home">Logout</span>
          </Link>
        </div>
      </aside> */}
      <SiderTopBar />
      <Sider />
      <form onSubmit={handleSubmit}>
        <div className={`menu ${isDragging ? 'dragging' : ''}`}>
          <div className="flex">
            <img src="images/add.png" alt="add icon" className="add-icon" />
            <span className="addtext">Add Menu</span>
        </div>
        <div className="form-field">
          <label>Name of Dish</label>
          <input type="text" placeholder="" className="addMe" value={nameofDish} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setNameofDish(e.currentTarget.value)}}/>
          <label>Price of Dish</label>
          <input type="text" placeholder="" id="price" className="addMe" value={priceofDish} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPriceofDish(e.currentTarget.value)}}/>
          <label>Category</label>
          <input type="text" placeholder="" id="category" className="addMe" value={category} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setCategory(e.currentTarget.value)}}/>
          <label>Description</label>
          <input type="text" placeholder="" id="description" className="addMe" value={description} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setDescription(e.currentTarget.value)}} />

          <label>Picture Upload</label>
          <div 
            className="file-drop-container" 
            onDrop={dropHandler} 
            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
            >
              {droppedImageName ? (
                <p>File Name: {droppedImageName}</p>
              ) : (
                <>
                  <img src="images/Group 2.png" alt="upload-image" className="jpeg-icon" />
                  <p>
                    {isDragging ? 'Drop your files here' : 'Drop your files here or '}
                    <label className="drag">
                      Choose file
                      <input
                        type="file"
                        // onChange={handleFileInputChange}
                        className="file-input"
                        id="file-input"
                        value={imageofDish}
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setImageofDish(e.currentTarget.value)}}
                        style={{ display: 'none' }} />
                    </label>
                  </p></>
            )}</div>
          <div className="btn">
            <button className="button" >Add Menu</button>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default AddMenu;
