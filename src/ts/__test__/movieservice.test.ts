/***
* @jest-environment jsdom
*/

import { IMovie } from "../models/Movie";
import { getData } from "../services/movieservice"; 
import { testMovies } from "../services/__mocks__/movieservice";

jest.mock("../services/movieservice");

beforeEach (()=>{
  document.body.innerHTML="";
  });
  

jest.mock("axios", ()=> ({
  get:async (url:string)=> {
    return new Promise((resolve, reject)=>{
      if (!url.endsWith("error")) {
        resolve({data: {search: testMovies}});
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
    expect(data[0].Title).toBe(testMovies[0].Title);
});




test("should get an error", async ()=>{
    //arrange
  try {
    await getData("error");
  } catch (error: any) {
      expect(error.length).toBe(0);
    }
    });