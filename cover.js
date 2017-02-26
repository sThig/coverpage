



setInterval(
function occupation () {
  const jobs = ['Web Designer', 'Animator', 'Developer'];
  const show = jobs[Math.floor(Math.random() * jobs.length)];
  const sentence = `<h1>Hi my name is Scott and I\'m a ${show}</h1>`;
  document.getElementById("intro").innerHTML = sentence;
}, 1000)
