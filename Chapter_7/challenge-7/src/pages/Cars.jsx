import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { BsCalendar3, BsGearFill, BsPeopleFill } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import { addUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";

export default function FilterCar() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [cars, setCars] = useState([]);
  const capacityField = useRef();
  const isWithDriverField = useRef();
  const availableAtDateField = useRef();
  const availableAtTimeField = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check status user login
        // 1. Get token from localStorage
        const token = localStorage.getItem("token");

        // 2. Check token validity from API
        const currentUserRequest = await axios.get(
          "http://localhost:8087/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;

        if (currentUserResponse.status) {
          dispatch(
            addUser({
              user: currentUserResponse.data.user,
              token: token,
            })
          );
          setUser(currentUserResponse.data.user);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setUser({});
  };

  const filtered = async (e) => {
    e.preventDefault();
    try {
      const dateTime = new Date(
        `${availableAtDateField.current.value} ${availableAtTimeField.current.value}`
      );

      const dataCars = await axios.get(
        `http://localhost:8087/cars/filtered?isWithDriver=${
          isWithDriverField.current.value
        }&capacity=${
          capacityField.current.value
        }&availableAt=${dateTime.toISOString()}`
      );

      const payloadData = await dataCars.data.data.filteredCars;
      setCars(payloadData);
    } catch (err) {
      console.log(err);
    }
  };

  return isLoggedIn ? (
    // NavBar Start
    <div>
      <div className="offcanvas offcanvas-end w-50" id="sidebar">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title fw-bold fs-7">BCR</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body fs-7">
          <Nav.Link className="text-dark ps-0" href="#our-services">
            Our Services
          </Nav.Link>
          <Nav.Link className="text-dark ps-0" href="#why-us">
            Why Us
          </Nav.Link>
          <Nav.Link className="text-dark ps-0" href="#testimonial">
            Testimonial
          </Nav.Link>
          <Nav.Link className="text-dark ps-0" href="#faq">
            FAQ
          </Nav.Link>
          <Button
            variant="danger"
            type="button"
            className="btn"
            onClick={(e) => logout(e)}
          >
            Logout
          </Button>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light border-0 p-3">
        <div className="container">
          <a className="navbar-brand btn btn-info" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto nav">
              <Card border="primary" className="h-50 mt-2 px-3">
                {user.name}
              </Card>
              <a className="nav-link me-3" href="#our-services">
                Our Services
              </a>
              <a className="nav-link me-3" href="#why-us">
                Why Us
              </a>
              <a className="nav-link me-3" href="#testimonial">
                Testimonial
              </a>
              <a className="nav-link me-3" href="#faq">
                FAQ
              </a>
              <Button
                variant="danger"
                type="button"
                className="btn"
                onClick={(e) => logout(e)}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Hero Start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 pt-5 px-auto my-auto hero-text align-center">
            <h1 className="fw-bold fs-2">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="fw-light fs-7">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a className="btn btn-success" href="# ">
              Mulai Sewa Mobil
            </a>
          </div>
          <div className="col-md-6 image-car">
            <img src="/assets/img_car.svg" />
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* filter */}
      <div className="container position-sewa">
        <div className="card border-sewa">
          <div className="card-body shadow border-sewa">
            <Form onSubmit={(e) => filtered(e)}>
              <div className="row">
                <div className="col-11">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-sm-12">
                      Tipe Driver
                      <div className="mb-3">
                        <select ref={isWithDriverField} className="form-select">
                          <option hidden>Pilih Tipe Driver</option>
                          <option value="true">Dengan Sopir</option>
                          <option value="false">Tanpa Sopir</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-3 col-sm-12">
                      Tanggal
                      <div className="mb-3">
                        <input
                          type="date"
                          className="form-control"
                          ref={availableAtDateField}
                          placeholder="pilih tanggal booking"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-3 col-sm-12">
                      Waktu Jemput/Ambil
                      <div className="mb-3">
                        <select
                          id="inputTime"
                          className="form-select"
                          ref={availableAtTimeField}
                        >
                          <option hidden>Pilih Waktu</option>
                          <option value="08:00">08:00 WIB</option>
                          <option value="09:00">09:00 WIB</option>
                          <option value="10:00">10:00 WIB</option>
                          <option value="11:00">11:00 WIB</option>
                          <option value="12:00">12:00 WIB</option>
                          <option value="13:00">13:00 WIB</option>
                          <option value="14:00">14:00 WIB</option>
                          <option value="15:00">15:00 WIB</option>
                          <option value="16:00">16:00 WIB</option>
                          <option value="17:00">17:00 WIB</option>
                          <option value="18:00">18:00 WIB</option>
                          <option value="19:00">19:00 WIB</option>
                          <option value="20:00">20:00 WIB</option>
                          <option value="21:00">21:00 WIB</option>
                          <option value="22:00">22:00 WIB</option>
                          <option value="23:00">23:00 WIB</option>
                          <option value="24:00">24:00 WIB</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-3 col-sm-12">
                      Jumlah Penumpang
                      <div className="mb-3">
                        <select ref={capacityField} className="form-select">
                          <option hidden>Jumlah Penumpang</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-1 col-sm-3 pos-form">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sewa"
                    id="load-btn"
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      {/* card cars */}
      <Container>
        <Row>
          {cars.map((car) => (
            <Col md={4}>
              <Card style={{ marginTop: "2rem" }} key={car.id}>
                <img src={car.image} alt="" style={{ height: "250px" }} />
                <div className="card-body">
                  <p>
                    {car.model} / {car.manufacture}
                  </p>
                  <h5 className="card-title bold">
                    Rp {car.rentPerDay} / hari
                  </h5>
                  <p className="card-text">{car.description}</p>
                  <div className="">
                    <BsPeopleFill className="me-2" />
                    {car.capacity} Orang
                  </div>
                  <div className="pt-2">
                    <BsGearFill className="me-2" />
                    {car.transmission}
                  </div>
                  <div className="pt-2">
                    <BsCalendar3 className="me-2" />
                    Tahun {car.year}
                  </div>
                  <Button variant="success" className=" w-100 mt-3">
                    Pilih Mobil
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer Start */}
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row" style={{ padding: "20px 40px 0px" }}>
          <div className="col-sm-3 fw-light fs-7">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-sm-3 fw-bold fs-7">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="col-sm-3 fw-light fs-7">
            <p>Connect With Us</p>
            <img src="/assets/icon_facebook.svg" />
            <img src="./assets/icon_instagram.svg" />
            <img src="/assets/icon_twitter.svg" />
            <img src="./assets/icon_mail.svg" />
            <img src="/assets/icon_twitch.svg" />
          </div>
          <div className="col-sm-3 fw-light fs-7">
            <p>Copyright Binar 2022</p>
            <a href="" className="btn btn-info"></a>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  ) : (
    <Navigate to="/Login" replace />
  );
}
