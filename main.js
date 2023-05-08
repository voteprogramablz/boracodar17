const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function render() {
  let output = "";

  const thisMonth = months[new Date().getMonth()];

  for (let month of months) {
    const classActive = month === thisMonth ? "class='active'" : "";

    output += `<div ${classActive}>${month}</div>`;
  }

  return output;
}

app.querySelector("main").innerHTML = render();
app.querySelector("header span").innerHTML = new Date().getFullYear();
