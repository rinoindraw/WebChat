import React from "react";
import TrackVisibility from "react-on-screen";
import { Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import rinoImg from "../assets/pasfotoeditedthree.png";
import wanskyImg from "../assets/wansky.jpg";
import nandaImg from "../assets/nanda.jpg";
import aldiImg from "../assets/aldi.jpg";
import syahdanImg from "../assets/syahdan.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["with React Js", "and using Firebase"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="banner-container">
        <Container>
          <Row className="bannerFlex">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <Link className="tagline" to="/">
                      Back to HomePage
                    </Link>
                    <span className="tagline">About Page</span>
                    <h1>
                      {`WebChat`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "with React Js", "and using Firebase"]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      A web chat application using ReactJS and Firebase
                      typically involves creating a real-time messaging platform
                      where users can interact in a chat interface.
                    </p>
                    <a
                      className="socialBox"
                      href="https://github.com/rinoindraw/WebChat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                      <ArrowRightCircle size={25} />
                    </a>
                    <h2>Get To Know Us</h2>
                    <div className="supportLogo">
                      <div className="memberColumn">
                        <div className="createdMember">
                          <div className="image-wrapper">
                            <div className="image-inner">
                              <img
                                className="socialImage"
                                src={rinoImg}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="createdColumn">
                            <h3>Rino Indra Wicaksono</h3>
                            <h3>21120012</h3>
                            <a
                              className="socialBoxMember"
                              href="https://www.instagram.com/rinoindraw/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Instagram
                              <ArrowRightCircle size={25} />
                            </a>{" "}
                          </div>
                        </div>
                        <div className="createdMember">
                          <div className="image-wrapper">
                            <div className="image-inner">
                              <img
                                className="socialImage"
                                src={wanskyImg}
                                alt=""
                              />
                            </div>
                          </div>{" "}
                          <div className="createdColumn">
                            <h3>Muhammad Kurniawan Syamsudin</h3>
                            <h3>20120758</h3>
                            <a
                              className="socialBoxMember"
                              href="https://www.instagram.com/wawan_orian/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Instagram
                              <ArrowRightCircle size={25} />
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="memberColumn">
                        <div className="createdMember">
                          <div className="image-wrapper">
                            <div className="image-inner">
                              <img
                                className="socialImage"
                                src={aldiImg}
                                alt=""
                              />
                            </div>
                          </div>{" "}
                          <div className="createdColumn">
                            <h3>Aldi Hidayatullah</h3>
                            <h3>20120097</h3>
                            <a
                              className="socialBoxMember"
                              href="https://www.instagram.com/aldi_hdytulloh/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Instagram
                              <ArrowRightCircle size={25} />
                            </a>{" "}
                          </div>
                        </div>
                        <div className="createdMember">
                          <div className="image-wrapper">
                            <div className="image-inner">
                              <img
                                className="socialImage"
                                src={syahdanImg}
                                alt=""
                              />
                            </div>
                          </div>{" "}
                          <div className="createdColumn">
                            <h3>Muhammad Syahdan Fajriansyah</h3>
                            <h3>20120679</h3>
                            <a
                              className="socialBoxMember"
                              href="https://www.instagram.com/iqbaal.e/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Instagram
                              <ArrowRightCircle size={25} />
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="memberColumn">
                        <div className="createdMember">
                          <div className="image-wrapper">
                            <div className="image-inner">
                              <img
                                className="socialImage"
                                src={nandaImg}
                                alt=""
                              />
                            </div>
                          </div>{" "}
                          <div className="createdColumn">
                            <h3>Nanda Luthfi Yahya</h3>
                            <h3>20120832</h3>
                            <a
                              className="socialBoxMember"
                              href="https://www.instagram.com/nandaluthfyy/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Instagram
                              <ArrowRightCircle size={25} />
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    {/* <img className="imgLogoPkm" src={pkmLogo} alt="Logo" /> */}
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
