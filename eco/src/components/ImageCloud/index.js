import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import "./style.css";

function ImageCloud() {
  const [image, setImage] = useState({
    imageUrl: null,
    imageAlt: null,
  });

  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "productimages");
    const options = {
      method: "POST",
      body: formData,
    };

    // replace cloudname with your Cloudinary cloud_name
    return fetch(
      "https://api.cloudinary.com/v1_1/hsmzl2fw7/image/upload",
      options
    )
      .then((res) => res.json())
      .then(res => {
          console.log(image);
        setImage({
          imageUrl: res.secure_url,
          imageAlt: `An image of ${res.original_filename}`
        })
      })
      .catch((err) => console.log(err));
  };

  const { imageUrl, imageAlt } = image;

  return (
    <main className="CloudForm">
      <section className="left-side">
        <Form.Group>
          <div className="form-group">
            <input type="file" />
          </div>

          <button type="button" className="btn" onClick={handleImageUpload}>
            Submit
          </button>
          <button type="button" className="btn widget-btn">
            Upload Via Widget
          </button>
        </Form.Group>
      </section>
      <section className="right-side">
        <p>The resulting image will be displayed here</p>
        {imageUrl && (
          <img src={imageUrl} alt={imageAlt} className="displayed-image" />
        )}
      </section>
    </main>
  );
}

export default ImageCloud;
