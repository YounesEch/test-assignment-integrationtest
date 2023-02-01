/**
* @jest-enviroment jsdom
*/


import { createHtml } from "../movieApp";
import { IMovie } from "../models/Movie";


test("should create HTML", ()=> {
    //arrange
    document.body.innerHTML= `
    
    `;
    let movies: IMovie[]= [new movies()];

    //act
    createHtml(movies);

    //assert
    expect(movies).toBeCalled();
});