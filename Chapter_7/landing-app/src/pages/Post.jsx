import { Link, useNavigate } from "react-router-dom";
import { Form, Container, Button, Alert } from "react-bootstrap";
import { useState, useRef } from "react";
import axios from "axios";

export default function Post() {
  const navigate = useNavigate();
  const titleField = useRef("");
  const descriptionField = useRef("");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const onPost = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const postPayload = {
        title: titleField.current.value,
        description: descriptionField.current.value,
      };

      const postRequest = await axios.post(
        "http://localhost:2000/posts",
        postPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const postResponse = postRequest.data;

      if (postResponse.status) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  };

  return (
    <Container className="mt-3">
      <Alert>Post Something!</Alert>
      <Form onSubmit={onPost}>
        <Form.Group className="mb-3">
          <Form.Label>Judul</Form.Label>
          <Form.Control
            type="text"
            ref={titleField}
            placeholder="Masukkan Judul"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            type="text"
            ref={descriptionField}
            placeholder="Masukkan Deskripsi"
          />
        </Form.Group>
        {errorResponse.isError && (
          <Alert variant="danger">{errorResponse.message}</Alert>
        )}
        <Button className="w-100" type="submit">
          Post
        </Button>
      </Form>
      <Link to="/home">
        <Button className="mt-3" variant="success">Go to home page</Button>
      </Link>
    </Container>
  );
}
