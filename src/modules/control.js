/* eslint-disable  prefer-destructuring */
import {
  display, add, editItem, DeleteItem,
} from './functions.js';

export default class Control {
  constructor() {
    this.tasks = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
  }

  InitData = () => {
    display(this.tasks);
    const AddBtn = document.querySelector('#addTask');
    const DeleteBtn = document.querySelectorAll('.deleteBtn');
    const EditBtn = document.querySelectorAll('.editBtn');
    const AllLi = document.querySelectorAll('.checktitle');
    AddBtn.addEventListener('click', () => {
      const data = document.querySelector('#TaskData').value;
      add(this.tasks, data, false);
    });
    DeleteBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.id);
        DeleteItem(this.tasks, id);
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
                  editItem(this.tasks, id, document.querySelector('.inputedit').value);
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
}
