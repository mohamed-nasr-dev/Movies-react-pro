import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Movies from "./pages/Movies/Movies";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import MoviesTopRated from "./pages/MoviesTopRated/MoviesTopRated";
import MoviesNowPlaying from "./pages/MoviesNowPlaying/MoviesNowPlaying";
import MoviesUpComing from "./pages/MoviesUpComing/MoviesUpComing";
import FavoriteMovies from "./pages/favoriteMovies/favoriteMovies";
import AppLayout from "./component/AppLayout/AppLayout";
import { Provider } from "react-redux";
import store from "./store/store";
import ToDoList from "./pages/ToDoList/ToDoList";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { LogedProvider } from "./context/isLoged";
import { useState } from "react";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "movies", element: <Movies /> },
      { path: "favoriteMovies", element: <FavoriteMovies /> },
      { path: "top_rated", element: <MoviesTopRated /> },
      { path: "now_playing", element: <MoviesNowPlaying /> },
      { path: "upcoming", element: <MoviesUpComing /> },
      { path: "todo", element: <ToDoList /> },
      { path: "movie/:id", element: <MovieInfo /> },

      { path: "/*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const [loged, setLoged] = useState(false);
  return (
    <>
      <Provider store={store}>
        <LogedProvider value={{ loged, setLoged }}>
          <RouterProvider router={routes} />
        </LogedProvider>
      </Provider>
    </>
  );
}

export default App;
