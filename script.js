setInterval(() => {
  const clock = document.querySelector('#time');
  const dates = document.querySelector('.date');
  let a = new Date();
  let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
  let date = a.toLocaleDateString();
  console.log(date);
  clock.textContent = time;
  dates.textContent = date;
}, 1000);
