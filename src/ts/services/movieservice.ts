import { IOmdbResponse } from "./../models/IOmdbResponse";
import { IMovie } from "./../models/Movie";
import axios from "axios";


export const getData = async (searchText: string): Promise<IMovie[]> => {  //skickar ett löfte om att ge oss en array med filmer 
  return axios
    .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=" + searchText)
    .then((data) => { //axios respons på IOmdbRespons
      return data.data.Search;  //första data är respons från teorin, search kommer upp här pga det är detta vi är ute efter ifrån IOmbdRespons (interface)
    })
    .catch(() => {
      return [];
    });
};

