import { IMovie } from "../../models/Movie";


const testMovies: IMovie []= [{
  Title:"Black Panther",
  imdbID:"tt1825683",
  Type: "movie",
  Poster:"...",
  Year: "2018", 
},
{
  Title:"Doctor Strange",
  imdbID: "tt1211837",
  Type: "movie",
  Poster: "...",
  Year: "2016",
}
];

  export async function getData (): Promise<IMovie[]> {
    return new Promise((resolve, reject)=>{
      if(testMovies.length > 0) {
        resolve(testMovies);
      } else {
        reject ("no movies");
      }
    }); }