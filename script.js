// script.js



//* Quiz Score Messages - Resources *//

function checkQuiz(formId, resultId) {
  let score = 0;
  const total = 4;

  const form = document.getElementById(formId);

  for(let i=1; i<=total; i++) {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if(selected) score += Number(selected.value);
  }

  let message = "";
  if(score === 4) message = "\u{1F30D} Excellent! You got all correct!";
  else if(score === 3) message = "\u{1F331} Great job! Most key ideas understood!";
  else if(score === 2) message = "\u{1F30A} Not bad! Review and try again!";
  else if(score === 1) message = "\u{1F4D8} Keep learning!";
  else if(score === 0) message = "\u26A0\uFE0F Oh no! None correct, try again!";

  document.getElementById(resultId).innerHTML = `<strong>Score:</strong> ${score}/${total}<br>${message}`;
}

//* DASHBOARD JS *//

function showSection(sectionId) {
  // hide all sections
  document.querySelectorAll('.dash-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // show the clicked section
  document.getElementById(sectionId).classList.add('active');
}


//* DROPDOWN RESPONSIVENESS *//

// Mobile dropdown toggle
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const dropdown = btn.nextElementSibling;
    dropdown.classList.toggle('show');
  });
});

// Close dropdowns when tapping elsewhere
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-content').forEach(menu => {
    menu.classList.remove('show');
  });
});










