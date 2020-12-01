import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Input, TextArea } from "../Form";
import { Button, Form } from "react-bootstrap";
import productAPI from "../../utils/productAPI.js";

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
  // console.log(formObject);
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
    // setFile(event.target.files[0]);
    // const formData = new FormData();
    // formData.append("productImg", formObject.image);
    if (formObject.title && formObject.price) {
      productAPI
        .saveProduct({
          name: formObject.title,
          description: formObject.description,
          salary: formObject.price,
          image: "http://res.cloudinary.com/hsmzl2fw7/image/upload/v1606711375/y2rb6ykrxmktufldgdia.jpg",
          countInStock: 1,
          rating: 1,
          numReviews: 0,
        })
        .then((res) => loadProducts())
        .setFormObject({})
        .catch((err) => console.log(err));
    }
  }

  function onFileChange(e) {
    setFormObject({ image: e.target.files[0] });
    setFile(e.target.files[0]);
  }

  // Handles file upload event and updates state
  // function handleUpload(event) {
  //   setFile(event.target.files[0]);

  // Add code here to upload file to server
  // ...
  // }

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
            {/* <FilePond
              files={file}
              onupdatefiles={onFileChange}
              allowMultiple={false}
              allowFileEncode={true}
              maxFiles={1}
              // server="/api/products"
              name="files"
              
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            /> */}
            <Form.Group>
              <div id="upload-box">
                <input name="image" type="file" onChange={onFileChange} />
                <p>File type: {file.type}</p>
                <p>File size: {file.size} bytes</p>
                {file && <ImageThumb name="image" image={file} />}
              </div>
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
