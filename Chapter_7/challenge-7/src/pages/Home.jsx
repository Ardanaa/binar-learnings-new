import { Accordion, Button, Nav, Navbar } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsFillStarFill } from "react-icons/bs";

export default function Home() {
  return (
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
          <Link to="/login">
            <Button className="btn btn-success" href="/Login">
              Register
            </Button>
          </Link>
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
              <Link to="/login">
                <Button className="btn btn-success" href="/Login">
                  Register
                </Button>
              </Link>
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

      {/* <Our Services Start */}

      <div id="our-services">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6">
              <img
                className="w-75 img-service mx-auto d-block mb-5"
                sty
                src="/assets/img_service.svg"
                alt="Our Services Img"
              />
            </div>
            <div className="col-sm-6 my-auto">
              <h1 className="fw-bold fs-4">
                Best Car Rental for any kind of trip in (Lokasimu)!
              </h1>
              <p className="fw-light fs-7 mb-2">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>

              <p className="fs-7">
                <img className="me-2" src="/assets/ceklis.svg" />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p className="fs-7">
                <img className="me-2" src="/assets/ceklis.svg" />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p className="fs-7">
                <img className="me-2" src="/assets/ceklis.svg" />
                Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p className="fs-7">
                <img className="me-2" src="/assets/ceklis.svg" />
                Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p className="fs-7">
                <img className="me-2" src="/assets/ceklis.svg" />
                Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services End */}

      {/* Why Us Start */}
      <div id="why-us">
        <div
          className="container text-center"
          style={{ padding: "20px 40px 0px", marginBottom: "100px" }}
          id="why-us"
        >
          <h1 className="fw-bold fs-4">Why Us?</h1>
          <p className="fw-light fs-7 py-4">
            Mengapa Harus Pilih Binar Rental Car?
          </p>

          <div className="row">
            <div className="col-sm-3">
              <div className="card card-1">
                <div className="card-body">
                  <img
                    src="/assets/icon_complete.svg"
                    style={{ marginBottom: "15px" }}
                  />
                  <h5 className="fw-bold fs-6">Mobil Lengkap</h5>
                  <p className="fw-light fs-7">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card card-1">
                <div className="card-body">
                  <img
                    src="/assets/icon_price.svg"
                    style={{ marginBottom: "15px" }}
                  />
                  <h5 className="fw-bold fs-6">Harga Murah</h5>
                  <p className="fw-light fs-7">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card card-1">
                <div className="card-body">
                  <img
                    src="/assets/icon_24hrs.svg"
                    style={{ marginBottom: "15px" }}
                  />
                  <h5 className="fw-bold fs-6">Layanan 24 Jam</h5>
                  <p className="fw-light fs-7">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card card-1">
                <div className="card-body">
                  <img
                    src="/assets/icon_complete.svg"
                    style={{ marginBottom: "15px" }}
                  />
                  <h5 className="fw-bold fs-6">Sopir Profesional</h5>
                  <p className="fw-light fs-7">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Us End */}

      {/* Testimonial Start */}
      <section className="testimonial" id="testimonial">
        <div className="Testimonial-tittle" id="Testimonial">
          <h2 className=" font-weight-bold">Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>

        <OwlCarousel
          items={2}
          className="owl-theme"
          loop
          center
          margin={10}
          nav
        >
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <div className="card item">
                  <div className="card-body">
                    <div className="card-left img-card">
                      <img src="/assets/img_photo.svg" className="rounded-circle" />
                    </div>
                    <div className="card-right">
                      <div className="faq-icon">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur furete elit,
                        sed do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod”
                      </p>
                      <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <div className="card item">
                  <div className="card-body">
                    <div className="card-left img-card">
                      <img src="/assets/img_photo (1).svg" />
                    </div>
                    <div className="card-right">
                      <div className="faq-icon">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur furete elit,
                        sed do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod”
                      </p>
                      <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <div className="card item">
                  <div className="card-body">
                    <div className="card-left img-card">
                      <img src="/assets/img_photo.svg" />
                    </div>
                    <div className="card-right">
                      <div className="faq-icon">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur furete elit,
                        sed do eiusmod lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod”
                      </p>
                      <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
      {/* Testimonial End */}

      {/* Banner Start */}
      <section className="banner">
        <div className="container">
          <div className="banner-content text-center text-white">
            <h3 className=" font-weight-bold">Sewa Mobil di (Lokasimu) Sekarang</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <a className="btn btn-success">Mulai Sewa Mobil</a>
          </div>
        </div>
      </section>
      {/* Banner End */}

      {/* FAQ Start */}
      <section id="faq">
        <div
          className="container"
          style={{ marginTop: "100px", padding: "20px 40px 0px" }}
          id="faq"
        >
          <div className="row">
            <div className="col-sm-6">
              <h1 className="fw-bold fs-4">Frequently Asked Question</h1>
              <p className="fw-light fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-sm-6">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Apa saja syarat yang dibutuhkan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Berapa hari minimal sewa mobil lepas kunci?
                  </Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Apakah Ada biaya antar-jemput?
                  </Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Bagaimana jika terjadi kecelakaan
                  </Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ End */}

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
  );
}
