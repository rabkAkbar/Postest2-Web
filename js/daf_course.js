const form = document.querySelector("form");
const storageKey = "datacourse";
const coursesEl = document.querySelectorAll("[name='course']");
function storeData(name, email, gender, jurusan, courses, alasan) {
  if (!courses.length) {
    courses = ["kosong"];
  }
  const data = JSON.parse(sessionStorage.getItem(storageKey)) || [];
  data.push({ name, email, gender, jurusan, courses, alasan });

  sessionStorage.setItem(storageKey, JSON.stringify(data));
}
form.addEventListener("submit", (event) => {
  console.log(form.course.value);
  event.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const gender = form.gender.value;
  const jurusan = form.jurusan.value;
  // const course = form.course.value;
  const alasan = form.alasan.value;
  const courses = [];

  coursesEl.forEach((c) => {
    if (c.checked) courses.push(c.value);
    console.log(c.value);
  });
  console.log(coursesEl);
  storeData(name, email, gender, jurusan, courses, alasan);
  alert("Data berhasil di Input!");
  window.location.href = "dataform.html";
  form.reset();
});
