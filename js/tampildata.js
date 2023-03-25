const dataCourse = JSON.parse(sessionStorage.getItem("datacourse"))[0];
console.log(dataCourse);
const table = document.querySelector("table");
console.log(table);
const objectKeys = Object.keys(dataCourse);
for (let key of objectKeys) {
  table.innerHTML += `<tr>
  <td>${key}</td>
  <td>:</td>
  <td>${dataCourse[key]}</td>
</tr>`;
}
