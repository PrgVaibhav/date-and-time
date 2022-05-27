setInterval(() => {
  const clock = document.querySelector('#time');
  const dates = document.querySelector('.date');
  let a = new Date();
  let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
  let date = a.getDate() + '-' + (a.getMonth() + 1) + '-' + a.getFullYear();
  console.log(date);
  dates.textContent = date;
  clock.textContent = time;
}, 1000);
