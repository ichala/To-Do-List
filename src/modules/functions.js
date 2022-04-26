/* eslint-disable  no-restricted-globals */
import SingleTask from './Task.js';

export const LocalSave = (arr) => {
  localStorage.setItem('tasks', JSON.stringify(arr));
  location.reload();
};

const RefactorIndex = (tasks) => {
  tasks.forEach((item, i) => {
    item.index = i + 1;
  });
  LocalSave(tasks);
};

export const display = (tasks) => {
  const ContainerList = document.querySelector('.lists');
  if (tasks) {
    tasks.forEach((item) => {
      const NewItemHtml = `<div  class='listinfos '><div class='checklist'> <input class='CheckboxData' type='checkbox' name='${
        item.index
      }' id='${item.index}' ${
        item.completed && 'checked'
      }> </div><div class='checktitle ${
        item.completed && 'checkedItem'
      }' id=${item.index}>${
        item.description
      }</div></div> <div class='Tools'><div class='deleteBtn' id =${
        item.index
      }> <i class='fa-solid fa-trash-can deleteIcon'></i></div> <div class='editBtn' id =${
        item.index
      }> <i class='fa-solid fa-pen-to-square editIcon'></i></div></div>`;
      const NewItem = document.createElement('li');
      NewItem.classList.add('sinlge-list');
      NewItem.innerHTML = NewItemHtml;
      ContainerList.appendChild(NewItem);
    });
  }
};

export const add = (tasks, desc, completed) => {
  let id = 1;
  if (tasks.length > 0) {
    id = tasks[tasks.length - 1].index + 1;
  }
  const NewTask = new SingleTask(id, completed, desc);
  tasks.push(NewTask);
  LocalSave(tasks);
};

export const editItem = (tasks, id, data) => {
  tasks.forEach((element) => {
    if (element.index === Number(id)) {
      element.description = data;
      LocalSave(tasks);
    }
  });
};

export const DeleteItem = (tasks, id) => {
  tasks = tasks.filter((item) => {
    if (id === item.index) {
      return false;
    }
    return true;
  });
  RefactorIndex(tasks);
};
