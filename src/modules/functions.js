import SingleTask from './Task.js';
export default class functions {
  constructor() {
    this.tasks = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
  }

  InitData = () => {
    this.display();
    const AddBtn = document.querySelector('#addTask');
    const DeleteBtn = document.querySelectorAll('.deleteBtn');
    const EditBtn = document.querySelectorAll('.editBtn');
    const AllLi = document.querySelectorAll('.checktitle');
    AddBtn.addEventListener('click', () => {
      const data = document.querySelector('#TaskData').value;
      this.add(data, false);
    });
    DeleteBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.id);
        this.delete(id);
      });
    });
    EditBtn.forEach((btn) => {
      const id = btn.id;

      btn.addEventListener('click', () => {
        AllLi.forEach((li) => {
          if (li.id === id) {
            li.innerHTML = `<input id=${li.id} class='inputedit' type='text' value=${li.innerText}>`;
            EditBtn.forEach((buttons) => {
              buttons.classList.add('hide');
            });

            document.querySelectorAll('.inputedit').forEach((edit) => {
              edit.addEventListener('change', () => {
                if (edit.id === id) {
                  this.edit(id, document.querySelector('.inputedit').value);
                  EditBtn.forEach((buttons) => {
                    buttons.classList.remove('hide');
                  });
                }
                li.innerHTML = document.querySelector('.inputedit').value;
              });
            });
          }
        });
      });
    });
  };
  display = () => {
    const ContainerList = document.querySelector('.lists');
    if (this.tasks) {
      this.tasks.forEach((item) => {
        const NewItemHtml = `<div  class='listinfos '><div class='checklist'> <input type='checkbox' name='${
          item.index
        }' id='${item.index}' ${
          item.completed && 'checked'
        }> </div><div class='checktitle' id=${item.index}>${
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

  edit = (id, data) => {
    this.tasks.forEach((element) => {
      if (element.index === Number(id)) {
        element.description = data;
        this.LocalSave(this.tasks);
      }
    });
  };
  add = (desc, completed) => {
    let id = 1;
    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1].index + 1;
    }
    const NewTask = new SingleTask(id, completed, desc);
    this.tasks.push(NewTask);
    this.LocalSave(this.tasks);
  };

  delete = (id) => {
    this.tasks = this.tasks.filter((item) => {
      if (id === item.index) {
        return false;
      }
      return true;
    });
    this.RefactorIndex(this.tasks);
  };

  RefactorIndex = (arr) => {
    this.tasks.forEach((item, i) => {
      item.index = i + 1;
    });
    this.LocalSave(this.tasks);
  };

  LocalSave = (arr) => {
    localStorage.setItem('tasks', JSON.stringify(arr));
    location.reload();
  };
}
