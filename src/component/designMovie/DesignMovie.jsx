/* eslint-disable react/prop-types */

import { Col, Image, Row } from 'react-bootstrap'

export default function DesignMovie(props) {
  return (
    <Row
      className="m-0 p-5 w-100"
      style={{
        backgroundColor: "#3c2323",
        color: "#fff",
        backgroundImage: props.movie
          ? `linear-gradient(rgba(60, 35, 35, 0.7), rgba(60, 35, 35, 0.7)), url(https://image.tmdb.org/t/p/original${props.backDrop})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Col className="px-5" md={4}>
        <Image
          src={"https://image.tmdb.org/t/p/w500/" +props.posterImg}
          fluid
          style={{ height: "500px" }}
        />
      </Col>

      <Col className="p-5" md={8}>
        <h1>{props.name}</h1>
        <p>
          {props.release_date} (US) • {props.genres?.map((movie)=>`${movie.name}, ` )} • {props.runtime}
        </p>
        <div className="d-flex align-items-center my-3">
          <h5 className="mt-2">{props.vote}</h5>
          <span style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
            User Score
          </span>
        </div>
        <hr style={{ backgroundColor: "#fff" }} />
        <h2>overview</h2>
        <h5>{props.overview}</h5>
        <hr style={{ backgroundColor: "#fff" }} />
        <h6>Director & Writers</h6>
        <Row>
          <Col md={4}>
            <p>Shawn Levy</p>
            <p>Director, Writer</p>
          </Col>
          <Col md={4}>
            <p>Fabian Nicieza, Len Wein</p>
            <p>Characters</p>
          </Col>
          <Col md={4}>
            <p>Herb Trimpe, Roy Thomas</p>
            <p>Characters</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
