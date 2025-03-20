document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const tab = button.getAttribute("data-tab");
        buttons.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));
        button.classList.add("active");
        document.getElementById(tab).classList.add("active");
      });
    });
  });

const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');


openModalBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  modalOverlay.style.display = 'flex'; 
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
