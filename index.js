// ЗАДАЧА: "Менеджер расходов"
// 🔹 Пользовательский функционал:
// 1. Форма добавления расхода:
// ○ Название (input)
// ○ Сумма (number)
// ○ Категория (select)
// ○ Дата (input[type="date"])
// 2. При отправке — расход добавляется в список ниже.
// 3. Список отображает:
// ○ Название
// ○ Сумма
// ○ Категорию
// ○ Дату
// ○ И кнопку ❌ для удаления
// 4. Отображение итоговой суммы всех расходов (например, внизу страницы)
// Дополнительные задания
// ● Фильтр по категории
// ● Подсветка крупных расходов (если amount > 100)
// ● Сортировка по дате

const add = document.querySelector(".add");
const form = document.querySelector(".form");
const shut = document.querySelector(".shut");
const list = document.querySelector(".list");
const finSum = document.querySelector(".fin-sum");
const date = document.querySelector(".date");
const category = document.querySelector(".category");
let arr = "";

add.addEventListener("click", () => {
  form.style.display = "flex";
});

form.addEventListener("click", (e) => {
  e.target.style.display = e.target === e.currentTarget && "none";
});

shut.addEventListener("click", (e) => {
  form.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tr = document.createElement("tr");

  tr.classList.add("new-goods");

  const info = [
    e.target.elements.name.value,
    e.target.elements.sum.value,
    e.target.elements.category.value,
    e.target.elements.date.value,
    "❌",
  ];

  info.forEach((el, i) => {
    const td = document.createElement("td");
    if (el === "❌") {
      td.addEventListener("click", (e) => {
        finSum.textContent = +finSum.textContent - +tr.children[1].textContent;
        tr.remove();
      });
    }

    if (el > 100 && i === 1) {
      td.style.backgroundColor = "red";
    }

    td.textContent = el;
    tr.append(td);
  });

  list.append(tr);

  arr = document.querySelectorAll(".new-goods");

  finSum.textContent = +finSum.textContent + +e.target.elements.sum.value;

  e.target.elements.category.value = "";
  e.target.elements.date.value = "";
  e.target.elements.name.value = "";
  e.target.elements.sum.value = "";
  e.target.style.display = "none";
});

category.addEventListener("click", () => {
  [...arr].sort();
  //   list.innerHTML = "";
  //   list.append()
});
date.addEventListener("click", () => {});
