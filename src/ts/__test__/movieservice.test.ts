/***
* @jest-environment jsdom
*/

import { IMovie } from "../models/Movie";
import { getData } from "../services/movieservice";

const movies: IMovie []= [{
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

jest.mock("../services/movieservice");

beforeEach (()=>{
  document.body.innerHTML=""; //säger att dokumentet alltid nollställs inför ett test
  });
  

jest.mock("axios", ()=> ({
  get:async (url:string)=> {
    return new Promise((resolve, reject)=>{
      if (!url.endsWith("error")) {
        resolve({data: {search: movies}});
      } 
      else{
        reject([]);
      }
    });
  }
}));


test("should get test data",async () => {
    //arrange

    //act
    let data = await getData("movies");

    //assert
    expect(data.length).toBe(2);
});




/*test("should get an error", async ()=>{
    //arrange

    //act
    let data = await getData("movies");

    //assert
    expect(data.length).toBe(0);
});*/