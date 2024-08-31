// import React from 'react'

import { useSelector } from "react-redux"
import DesignMovies from "../../component/designMovies/DesignMovies";

export default function FavoriteMovies() {


  var favorite = useSelector((state)=>state.favMovie.movies)
  console.log(favorite);
  
  return  <>
  <DesignMovies movies={favorite}/>
  <div className="text-center my-5">
  </div>
  </>
}
