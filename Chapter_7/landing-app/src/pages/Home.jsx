import { Link, Navigate } from "react-router-dom";
import { Button, Alert, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check status user login
        // 1. Get token from localStorage
        const token = localStorage.getItem("token");

        // 2. Check token validity from API
        const currentUserRequest = await axios.get(
          "http://localhost:2000/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;

        if (currentUserResponse.status) {
          setUser(currentUserResponse.data.user);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    const postData = async () => {
      const response = await axios.get(`http://localhost:2000/api/posts`);
      console.log(response);
      const data = await response.data.data.posts;
      console.log(data);

      setPost(data);
    };

    fetchData();
    postData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setUser({});
  };

  return isLoggedIn ? (
    <Container>
      <Button className="my-3" variant="danger" onClick={(e) => logout(e)}>
        Logout
      </Button>

      <Alert>Selamat datang {user.name}</Alert>
      <Link to="/post">
        <Button className="me-3" variant="success">
          Create Post
        </Button>
      </Link>
      <Link to="/about">
        <Button variant="success">Go to about page</Button>
      </Link>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Picture</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {post.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.description}</td>
              <td><img className="w-25" src={`http://localhost:2000/public/files/${p.picture}`}/></td>
              <td>
                <Link to={`/update/${p.id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Link to={`/delete/${p.id}`}>
                  <Button className="ms-3" variant="outline-danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Home;
