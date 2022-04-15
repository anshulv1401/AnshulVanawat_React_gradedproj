import axios from "axios";
import IMovie from "../model/IMovie";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getMovies = async (moviesCategory: string) => {
  const response = await axios.get<IMovie[]>(`${baseUrl}${moviesCategory}`);
  return response.data;
};

const getMovieById = async (moviesCategory: string, id: string | number) => {
  const response = await axios.get<IMovie>(`${baseUrl}${moviesCategory}/${id}`);
  return response.data;
};

const getMovieByTitle = async (
  moviesCategory: string,
  title: string | number
) => {
  const response = await axios.get<IMovie[]>(
    `${baseUrl}${moviesCategory}/?title=${title}`
  );
  return response.data[0];
};

export { getMovies, getMovieById, getMovieByTitle };
