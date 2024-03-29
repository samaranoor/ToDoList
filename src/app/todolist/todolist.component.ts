import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  newTask: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTask.length >= 4 && this.newTask.length <= 200 && /^[a-zA-Z0-9 ]+$/.test(this.newTask)) {
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.saveToLocalStorage();
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  ngOnInit() {
    this.loadFromLocalStorage();
  }
}
