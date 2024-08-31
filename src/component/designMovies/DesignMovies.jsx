/* eslint-disable react/prop-types */
// import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import { StringsManager } from "../../const";
import { useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie, setMovie } from "../../store/slices/favMovie";
import { useContext } from "react";
import { LogedContext } from "../../context/isLoged";

export default function DesignMovies(props) {
  const language = useSelector((state) => state.lang.language);
  const nav = useNavigate();
  const favoriteMovies = useSelector((state) => state.favMovie.movies);

  const dispatch = useDispatch();
  const GoToDetails = (id) => {
    nav(`/movie/${id}`);
  };
  const { loged } = useContext(LogedContext);

  const favMovie = (id) => {
    if (!loged) {
      alert("You must be logged in to add a movie to your favorite list.");
      nav("/login");
      return;
    } else {
      const favMov = props.movies.find((movie) => movie.id === id);
      if (favoriteMovies.find((ele) => ele.id == favMov.id) == undefined) {
        dispatch(setMovie(favMov));
      }
      alert(`You added ${favMov.title} to your favorite list.`);
    }
  };

  const notFavMovie = (id) => {
    const favMov = props.movies.find((movie) => movie.id === id);
    console.log("hamada");
    alert(`You removed ${favMov.title} from your favorite list.`);
    dispatch(removeMovie(favMov));
  };

  return (
    <Row xs={1} md={4} sm={2} className="g-5 mx-5 mt-1">
      {props.movies.map(({ id, title, vote_average, poster_path }) => (
        <Col key={id}>
          <Card>
            <Card.Img
              variant="top"
              src={StringsManager.baseUrlImg + poster_path}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{vote_average}</Card.Text>
              <div className="container-fluied">
                <Row className="justify-content-around align-items-center">
                  <div className="col-8 p-0 mt-2">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        GoToDetails(id);
                      }}
                    >
                      {language == "en" ? "more details" : "مزيد من التفاصيل"}
                    </button>
                  </div>
                  <div className="col-1 fs-3 p-0 ">
                    {favoriteMovies.find((ele) => ele.id == id) == undefined ? (
                      <MdFavoriteBorder
                        id={id}
                        onClick={() => {
                          favMovie(id);
                        }}
                        style={{ color: "blueviolet" }}
                      />
                    ) : (
                      <MdFavorite
                        id={id + 1}
                        className="d-block"
                        onClick={() => {
                          notFavMovie(id);
                        }}
                        style={{ color: "blueviolet" }}
                      />
                    )}
                  </div>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
