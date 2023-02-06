/***
* @jest-environment jsdom
*/


import { createHtml, displayNoResult, init, handleSubmit } from "../movieApp";
import { IMovie } from "../models/Movie";
import * as movieservice from "../services/movieservice";
import * as movieApp from "../movieApp";
import { testMovies } from "../services/__mocks__/movieservice";

jest.mock("../services/movieservice");

beforeEach(() => {
  document.body.innerHTML = ``;
});


test ("should test init",() => {
  //arrange
  document.body.innerHTML = 
  `<form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här"/>
      <div id="movie-container"></div>
    </form>`;

    let form = document.getElementById("searchForm") as HTMLFormElement;
    let spyOnHandleSubmit = jest.spyOn(movieApp, 'handleSubmit').mockReturnValue(new Promise<void>((resolve) => {
      resolve();
    }));
    
  //act
  init();
  form.submit();

  //assert
  expect(spyOnHandleSubmit).toHaveBeenCalled();
});


/*test("Should test handleSubmit", async ()=> {
  //arrange
  document.body.innerHTML = 
  `<form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök
      </button>
  </form>
  <div id="movie-container"></div>`;

  let searchText = (document.getElementById("searchText") as HTMLInputElement); 
  let createHtmlSpy = jest.spyOn(movieApp, "createHtml").mockReturnValue(Promise.resolve([]));

  searchText.value = "Black Panther";
  //act
  await handleSubmit();

  //assert
  expect(createHtmlSpy).toHaveBeenCalled();
});*/


test("should create HTML", ()=> {
    //arrange
    document.body.innerHTML = 
    `<div id="movie-container"></div`;

    let container = document.getElementById("movie-container") as HTMLDivElement;

    //act
    createHtml(testMovies, container);

    //assert
    expect(container.innerHTML).toContain("h3");
    expect(container.innerHTML).toContain("img");
    expect(container.innerHTML).toContain("div");
});


test ("should check displayNoResult", () => {
  document.body.innerHTML = 
  `<div id="movie-container"></div`;

  //arrange
  let container = document.getElementById("movie-container") as HTMLDivElement;

  //act
  displayNoResult(container);

  //assert
  expect(container.innerHTML).toContain('p');
})

