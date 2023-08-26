import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Add.scss";
import { showFailureToaster } from "../../utils/toaster";
import { auth } from "../../services/authService";
import { gigService } from "../../services/gigService";
import { uploadImage } from "../../services/imageService";
import { cloudinary, imageUploadUrl } from "../../constants/config";

const Add = () => {
  const [gigDetails, setGigDetails] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    deliveredIn: "",
    NoOfRevisions: "",
    price: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    try {
      const { _id } = await auth.getCurrentUserDetails();
      setGigDetails((prev) => {
        return { ...prev, userId: _id };
      });
    } catch (error) {}
  };

  const handleChange = (e) => {
    setGigDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinary.upload_preset);

    try {
      console.log("calling set gig details");
      let uploadedImageUrl = await uploadImage(imageUploadUrl, formData);
      console.log("image link ", uploadedImageUrl);
      setGigDetails((prev) => {
        return { ...prev, image: uploadedImageUrl };
      });
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = gigService.gigSchema.validate(gigDetails);
    if (error) return showFailureToaster(error.message);

    try {
      const newGig = await gigService.addGig({ ...gigDetails });
      if (newGig.status === 200) {
        setGigDetails({
          title: "",
          image: "",
          description: "",
          category: "",
          deliveredIn: "",
          NoOfRevisions: "",
          price: "",
        });

        navigate("/myGigs");
      }
    } catch (error) {}
  };

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              name="title"
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />

            <label htmlFor="">Category</label>
            <select name="category" id="category" onChange={handleChange}>
              <option value="">Select</option>
              <option value="digitalArtists">Digital Artists</option>
              <option value="craftArtists">Craft Artists</option>
              <option value="painters">Painters</option>
              <option value="photographers">Photographers</option>
              <option value="sculptors">Sculptors</option>
              <option value="illustrators">Illustrators</option>
              <option value="aiArtists">AI Artists</option>
            </select>

            <label htmlFor="">Cover Image</label>
            <input name="image" type="file" onChange={handleUploadImage} />

            {/* <label htmlFor="">Upload Images</label>
            <input type="file" multiple /> */}

            <label htmlFor="">Description</label>
            <textarea
              name="description"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="details">
            {/* <label htmlFor="">Service Title</label>
            <input
              name="serviceTitle"
              type="text"
              placeholder="e.g. One-page web design"
              onChange={handleChange}
            />

            <label htmlFor="">Short Description</label>
            <textarea
              name="serviceDescription"
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea> */}

            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input name="deliveredIn" type="number" onChange={handleChange} />

            <label htmlFor="">Revision Number</label>
            <input name="NoOfRevisions" type="number" onChange={handleChange} />

            {/* <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" /> */}
            <label htmlFor="">Price</label>
            <input name="price" type="number" onChange={handleChange} />

            <button onClick={handleSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
