import {
  LocalSave,
} from './functions.js';

export default class Interactive {
  constructor() {
    this.tasks = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
  }

    GetDom = () => {
      const TaskList = this.tasks;
      const CheckBox = document.querySelectorAll('.CheckboxData');
      const DeleteAll = document.querySelector('.remove_completed');
      const RefreshBtn = document.querySelector('.refresh');
      RefreshBtn.addEventListener('click', () => {
        LocalSave(TaskList);
      });
      DeleteAll.addEventListener('click', () => {
        this.DeleteCompleted(TaskList);
      });
      CheckBox.forEach((box) => {
        box.addEventListener('change', () => {
          TaskList.forEach((task) => {
            if (task.index === Number(box.id)) {
              task.completed = !task.completed;
              LocalSave(TaskList);
            }
          });
        });
      });
    }

    DeleteCompleted = (list) => {
      list = list.filter((item) => !item.completed);
      LocalSave(list);
    }
}