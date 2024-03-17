// index.js

class Task {
    constructor(name, dueDate) {
      this.name = name;
      this.dueDate = dueDate;
    }
  
    display() {
      console.log(`${this.name} - Due: ${this.dueDate}`);
    }
  }
  
  class TaskScheduler {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    displayTasks() {
      console.log('Tasks:');
      this.tasks.forEach(task => task.display());
    }
  }
  
  const taskScheduler = new TaskScheduler();
  taskScheduler.addTask(new Task('Finish report', '2024-03-15'));
  taskScheduler.addTask(new Task('Meeting with client', '2024-03-20'));
  taskScheduler.addTask(new Task('Submit proposal', '2024-03-25'));
  taskScheduler.displayTasks();
  