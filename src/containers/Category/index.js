import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { getCategories, addCategory } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Input from "../../components/UI/Input";
import "./style.css";

const Category = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  const handleSave = () => {
    const form = new FormData();
    form.append("name", categoryName);
    form.append("parentId", parentCategoryId);
    form.append("categoryImage", categoryImage);
    dispatch(addCategory(form));
    if (!errorMessage) {
      dispatch(getCategories());
    }
    setShow(false);
  };

  const dispatch = useDispatch();
  const { categories, errorMessage } = useSelector((state) => state.category);

  const renderCategories = (categories) => {
    let categoryList = [];
    for (let category of categories) {
      categoryList.push(
        <li key={category._id}>
          {category.name}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return categoryList;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12}></Col>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Category</h3>
            <Button onClick={handleShow}>Add</Button>
          </div>
        </Row>
        <Row>
          <Col md={12}>
            <ul>{renderCategories(categories)}</ul>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            label="Category Name"
            controlId="forCategoryName"
            value={categoryName}
            placeholder={"Category Name"}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <label htmlFor="parentCategory">Parent Category</label>
          <select
            id="parentCategory"
            name="parentId"
            value={parentCategoryId}
            onChange={(e) => setParentCategoryId(e.target.value)}
          >
            <option>-- Select --</option>
            {createCategoryList(categories).map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>

          <Input
            controlId="forCategoryImage"
            label="Category Image"
            type="file"
            name="categoryImage"
            onChange={handleCategoryImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Category;
