// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Category } from './categories';
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {
//     const categories = [
//       {
//         id: 0,
//         name: 'Dairy products',//Молочные продукты
//       },
//       {
//         id: 1,
//         name: 'Vegetables fruits' //Овощи, фрукты
//       },
//       {
//         id: 2,
//         name: 'Cereals, seasonings'//Крупы, приправы
//       },
//       {
//         id: 3,
//         name: 'The drinks', //
//       },
//     ];
//     return {categories};
//   }
//   genId(categories: Category[]): number {
//     return categories.length > 0 ? Math.max(...categories.map(category => category.id)) + 1 : 11;
//   }
//   constructor() { }
// }
