// import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Footer() {
  const language = useSelector((state) => state.lang.language);
  return (
    <>
      <div className="text-center p-5 bg-dark">
        <div>
          <h4 className="text-light">
            {language == "en" ? "Follow Us" : " اعملى فولو "}
          </h4>
          <div className="row justify-content-center p-3">
            <div
              style={{
                width: "50px",
                height: "43px",
                backgroundColor: "#009688",
              }}
              className="me-2"
            >
              <div>
                <a href="">
                  <FaFacebookF className="text-light fs-3 mt-2" />
                </a>
              </div>
            </div>
            <div
              style={{
                width: "50px",
                height: "43px",
                backgroundColor: "#009688",
              }}
              className="me-2"
            >
              <div>
                <a href="">
                  <FaInstagram className="text-light fs-3 mt-2" />
                </a>
              </div>
            </div>
            <div
              style={{
                width: "50px",
                height: "43px",
                backgroundColor: "#009688",
              }}
              className="me-2"
            >
              <div>
                <a href="">
                  <FaTwitter className="text-light fs-3 mt-2" />
                </a>
              </div>
            </div>
            <div
              style={{
                width: "50px",
                height: "43px",
                backgroundColor: "#009688",
              }}
              className="me-2"
            >
              <div>
                <a href="">
                  <CiLinkedin className="text-light fs-3 mt-2" />
                </a>
              </div>
            </div>
            <div
              style={{
                width: "42px",
                height: "43px",
                backgroundColor: "#009688",
              }}
              className="me-2"
            >
              <div>
                <a href="">
                  <FaWhatsapp className="text-light fs-3 mt-2" />
                </a>
              </div>
            </div>
          </div>
          <p className="text-light p-2">
            {language == "en" ? "Powered by" : "تم بواسطة "}

            <a
              href=""
              target="_blank"
            >
              {language == "en" ? "moh Nasr" : "محمد نصر"}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
