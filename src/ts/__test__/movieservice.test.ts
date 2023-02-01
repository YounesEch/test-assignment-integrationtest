/**
* @jest-environment jsdom
*/

import { getData } from "../services/movieservice"

jest.mock("./../services/movieservices.ts");

test("should create html structor correctl",() => {
    //arrange
    let s="thor";
    //act
    let movies = getData(s);

    //assert
    expect(movies).toBeCalled()
});