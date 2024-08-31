
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DesignMovie from "../../component/designMovie/DesignMovie";
import axiosInstance from "../../axios/axiosInst";

export default function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`${StringsManager.baseUrl}${id}?${StringsManager.api_key}`)
  //     .then((res) => {
  //       setMovie(res.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, [id]);


  useEffect(() => {
    async function fetchData() {
      let res = await await axiosInstance.get(`/movie/${id}`);
               console.log(res.data);
               
      setMovie(res.data);
    }
    fetchData();
  },[id] );



  function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60); 
    const remainingMinutes = minutes % 60; 
    return `${hours}h ${remainingMinutes}m `;
}

  return (
    <DesignMovie
      name={movie.title}
      backDrop={movie.backdrop_path}
      movie={movie}
      posterImg={movie.poster_path}
      release_date = {movie.release_date}
      vote={movie.vote_average}
      overview={movie.overview}
      genres = {movie.genres}
      runtime = {convertMinutesToHours(movie.runtime)}
    />
  );
}
