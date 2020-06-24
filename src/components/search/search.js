import React, { useEffect, useState } from "react";
import { Row, Col, Input, Alert } from "antd";
// import Suggestions from "./suggestion";
import MovieList from "../movie_list/movie_list";
import "./search.css";
import Spinner from "../spinner/spinner";
const { Search } = Input;
const API_KEY = "b9bd48a6";
const SearchBox = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Marvel");
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&page[limit]`
    )
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [searchTerm]);
  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Search
            placeholder="Enter a movie name"
            enterButton="Search"
            size="large"
            onSearch={(value) => setSearchTerm(value)}
          />
          {/* <Suggestions results={data} /> */}
        </Col>
      </Row>
      <Row gutter={16} type="flex" justify="center">
        {loading && <Spinner />}
        {error !== null && (
          <div className="errorBody">
            <Alert message={error} type="error" />
          </div>
        )}

        {data !== null &&
          data.length > 0 &&
          data.map((result, index) => <MovieList key={index} {...result} />)}
      </Row>
    </div>
  );
};

export default SearchBox;
