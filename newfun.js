// SORT Osish tartibda
// function sortincres(produkt){
//   return produkt.sort(function(a, b) {
//     return a.price - b.price;
//   });
// }
// let arr = sortincres(product.products);
// console.log(arr);


// SORT kamayish tartibda
// function sortincres(produkt){
//   return produkt.sort(function(a, b) {
//     return b.price - a.price;
//   });
// }
// let arr = sortincres(product.products);
// console.log(arr);



// SORT brand tartibda

// function sortincres(produkt){
//   return produkt.sort((a, b) => {
//     if (a.brand.toLowerCase() < b.brand.toLowerCase())
//       return -1;
//     if (a.brand.toLowerCase() > b.brand.toLowerCase())
//       return 1;
//     return 0;
//   });
// }
// let arr = sortincres(product.products);
// console.log(arr);



// SORT category tartibda

// function sortincres(produkt){
//   return produkt.sort((a, b) => {
//     if (a.category.toLowerCase() < b.category.toLowerCase())
//       return -1;
//     if (a.category.toLowerCase() > b.category.toLowerCase())
//       return 1;
//     return 0;
//   });
// }
// let arr = sortincres(product.products);
// console.log(arr);



// Rating boyicha sortlash

// function sortincres(produkt){
//   return produkt.sort(function(a, b) {
//     return a.rating - b.rating;
//   });
// }
// let arr = sortincres(product.products);
// console.log(arr);


// Ozbek tilida object

// function translateUzbek(produkt){
//     return produkt.map(el => {
//         return (
//           {
//             ID : el.id,
//             SIFATI : el.quantity,
//             NOMi : el.title,
//             TAVSIFI: el.description,
//             NARX: el.price,
//             CHEGIRMAnarxi: el.discountPercentage,
//             REYTING: el.rating,
//             AKSIYA: el.stock,
//             BRAND: el.brand,
//             KATEGORIYA: el.category,
//             ASOSIYrasm : el.thumbnail,
//             Rasmlar: el.images
//           }
//         )
//     })
// }
// let arr = translateUzbek(product.products);
// console.log(arr);