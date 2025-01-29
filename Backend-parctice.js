const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://registry.jsonresume.org/explore');
xhr.send();




// function check(fun) {
// }

// new Promise((resolve) => {
//   check(() => {
//     resolve();
//   });
// }).then(() => {
//   console.log("Hello");
// });
