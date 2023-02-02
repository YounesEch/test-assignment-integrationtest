/**
* @jest-enviroment jsdom
*/


import { createHtml } from "../movieApp";
import { IMovie } from "../models/Movie";

jest.mock("./../service/movieservice.ts");

beforeEach(() => {
    document.body.innerHTML = "";
});

/*test("should create HTML", async ()=> {
    //arrange
    document.body.innerHTML= `
    
    `;
    let movies: IMovie[]=Imovie[];

    //act
    await createHtml(movies);

    //assert
    expect(movies).toBeCalled();
});*/