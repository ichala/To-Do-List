import "./style.css";
import "./reset.css";

const list = [
  {
    description: "This is List Number 1",
    completed: false,
    index: 1,
  },
  {
    description: "This is List Number 2",
    completed: true,
    index: 2,
  },
  {
    description: "This is List Number 3",
    completed: false,
    index: 3,
  },
  {
    description: "This is List Number 4",
    completed: true,
    index: 4,
  },
  {
    description: "This is List Number 5",
    completed: false,
    index: 5,
  },
];

list.forEach((item) => {
  const container_list = document.querySelector(".lists");
  const NewItemHtml = `
    <div class="listinfos">
    <div class="checklist"> <input type="checkbox" name="${item.index}" id="${
    item.index
  }" ${item.completed && "checked"}> </div>
    <div class="checktitle">${item.description}</div>
</div>
    <div class="darg"> <i class="fa-solid fa-ellipsis-vertical"></i></div>
    `;
  const NewItem = document.createElement("li");
  NewItem.classList.add("sinlge-list");
  NewItem.innerHTML = NewItemHtml;
  container_list.appendChild(NewItem);
});
