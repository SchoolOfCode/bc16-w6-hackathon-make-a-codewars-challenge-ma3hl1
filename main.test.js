import sortingHat from "./main";
import { test, expect } from "vitest";

// test("Sorting hat should return retired message when out of sorts", () => {
//     const expected = "I'm retired! Leave me alone!";
//     const actual = sortingHat();
//     expect(actual).toBe(expected);
//   });
  
  test("Sorting hat respects student choice (Gryffindor)", () => {
    const expected = "Welcome to Gryffindor!";
    const actual = sortingHat("Gryffindor");
    expect(actual).toBe(expected);
  });
  
  test("Sorting hat respects student choice (Slytherin)", () => {
    const expected = "Welcome to Slytherin!";
    const actual = sortingHat("Slytherin");
    expect(actual).toBe(expected);
  });

  test("Sorting hat respects student choice (Hufflepuff)", () => {
    const expected = "Welcome to Hufflepuff!";
    const actual = sortingHat("Hufflepuff");
    expect(actual).toBe(expected);
  });

  test("Sorting hat respects student choice (Ravenclaw)", () => {
    const expected = "Welcome to Ravenclaw!";
    const actual = sortingHat("Ravenclaw");
    expect(actual).toBe(expected);
  });
  
  test("Sorting hat handles invalid student choice", () => {
    const expected = "That's not a Hogwarts house! Go to Beauxbatons!"
    const actual = sortingHat("meep");
    expect(actual).toBe(expected);
  });

//   test("Sorting hat randomly sorts with no preference", () => {
 
//   });