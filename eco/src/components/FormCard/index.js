import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Input, TextArea } from "../Form";
import { Button, Form } from "react-bootstrap";
import productAPI from "../../utils/productAPI.js";
import ImageCloud from "../ImageCloud";

function FormCard() {
  const [formObject, setFormObject] = useState({});
  const [file, setFile] = useState("");
  const [products, setProducts] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    salary: "",
    countInStock: "",
    image: "",
  });
  const [image, setImage] = useState({
    imageUrl: null,
    imageAlt: null,
  });

  console.log(formObject);
  // Load all books and store them with setBooks
  useEffect(() => {}, []);

  // Loads all products and sets them to products
  function loadProducts() {
    productAPI
      .getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.price) {
      productAPI
        .saveProduct({
          name: formObject.title,
          description: formObject.description,
          salary: formObject.price,
          image: formObject.image,
          countInStock: 1,
          rating: 1,
          numReviews: 0,
        })
        .then((res) => loadProducts())
        .catch((err) => console.log(err));
    }
  }

  function onFileChange(e) {
    setFile(e.target.files[0]);
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
      .then((res) => {
        console.log(image);
        setImage({
          imageUrl: res.secure_url,
          imageAlt: `An image of ${res.original_filename}`,
        });
        setFormObject({ image: image.imageUrl });
      })
      .catch((err) => console.log(err));
  }

  /**
   * Component to display thumbnail of image.
   */
  const ImageThumb = ({ image }) => {
    return (
      <img
        name="image"
        src={URL.createObjectURL(image)}
        alt={image.name}
        style={{ width: "200px" }}
      />
    );
  };
  console.log(formObject);
  // console.log(file);
  return (
    <Container fluid className="py-3">
      <Row>
        <Col size="md-6">
          <form action="/" method="POST" encType="multipart/form-data">
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Product Name (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Product Description (Optional)"
            />
            <Input
              onChange={handleInputChange}
              name="price"
              placeholder="Price (required)"
            />
            <Form.Group>
              <div id="upload-box">
                <input name="image" type="file" onChange={onFileChange} />
              </div>
              {file && <ImageThumb name="image" image={file} />}
            </Form.Group>

            <Button
              className="mb-2"
              disabled={!(formObject.price && formObject.title)}
              onClick={handleFormSubmit}
            >
              Add Product
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormCard;
