const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click" , function(){
    sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click" , function(){
    sidebar.classList.remove("show-sidebar");
})
/*Model code*/

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closBtn = document.querySelector(".clos-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});