const jobs = [' a Designer', ' an Animator', ' a Developer'];
let i = 0;

setInterval(
function occupation () {
  document.getElementById("occs").innerHTML = jobs[i++];
  if (i == jobs.length) i = 0;
}, 2000)
