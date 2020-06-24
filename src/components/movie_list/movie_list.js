import React, { useState } from "react";
import { Modal } from "antd";
import { Col, Card } from "antd";
import MovieDetails from "../movie_details/movie_details";
import Spinner from "../spinner/spinner";
const { Meta } = Card;
const API_KEY = "b9bd48a6";
const MovieList = ({ Title, imdbID, Poster }) => {
  const [activateModal, setMovieDetailModal] = useState(false);
  const [detail, setShowMovieDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);

  const fetchMovieDetails = () => {
    setMovieDetailModal(true);
    setDetailRequest(true);

    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        setDetailRequest(false);
        setShowMovieDetail(response);
      })
      .catch(({ message }) => {
        setDetailRequest(false);
      });
  };

  return (
    <Col style={{ margin: "20px 0" }} className="gutter-row">
      <div className="gutter-box">
        <Card
          style={{ width: 200 }}
          cover={
            <img
              style={{ height: 250 }}
              alt={Title}
              src={
                Poster === "N/A"
                  ? "https://placehold.it/198x264&text=Image+Not+Found"
                  : Poster
              }
            />
          }
          onClick={() => fetchMovieDetails()}
        >
          <Meta title={Title} description={false} />
        </Card>
        <Modal
          title="Movie Details"
          centered
          visible={activateModal}
          onCancel={() => setMovieDetailModal(false)}
          footer={null}
          width={800}
        >
          {detailRequest === false ? <MovieDetails {...detail} /> : <Spinner />}
        </Modal>
      </div>
    </Col>
  );
};

export default MovieList;
