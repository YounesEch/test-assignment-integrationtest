/***
* @jest-environment jsdom
*/

import { testMovies } from "../services/__mocks__/movieservice";
import { movieSort } from "../functions";

jest.mock("../services/movieservice");

beforeEach (()=>{
  document.body.innerHTML="";
});

test("shoud moviesort from A if correct", ()=>{
    //arrange
    let movies = testMovies;
    //act
    let result =  movieSort(movies, true);

    //assert

    expect(result[0].Title).toBe(movies[0].Title);
});

test("shoud moviesort descending if correct",  ()=>{
    //arrange
    let movies = testMovies;
    //act
    let result = movieSort(movies, false);

    //assert

    expect(result[1].Title).toBe(movies[1].Title);
})