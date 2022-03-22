/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive = () => {
    let atsakymas = (this.budget > 100000000)
    return atsakymas
  }




}

let naujasFilmas = new Movie("Spider-Man", "Sam-Raimi", 100000001)
let naujasFilmas1 = new Movie("Rush Hour", "Brett Ratner", 950000)

console.log(naujasFilmas)
console.log(naujasFilmas.wasExpensive())

console.log(naujasFilmas1)
console.log(naujasFilmas1.wasExpensive())