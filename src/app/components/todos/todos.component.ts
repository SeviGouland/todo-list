import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { Person } from './../../models/person';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  persons: Person[] = [];

  // fruits: string[] = ['Apple', 'Orange', 'Banana'];
  
  inputTodo:string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      },
      {
        content: 'Third todo',
        completed: false
      }
    ],

    this.persons = [
      {
        firstName: "Giorgos",
        lastName: "Anagnost",
        age: "30",
        origin: "Greek",
        phoneNumber: "6982825945"
      },
      {
          firstName: "Sevasti",
          lastName: "Gouland",
          age: "27",
          origin: "Greek",
          phoneNumber: "6984499854"
        },
        {
            firstName: "Loukia",
            lastName: "Gouland",
            age: "15",
            origin: "Albanian",
            phoneNumber: "6982825945"
          }
        
    ]
  }

  toggleDone (id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

  removePerson (person: Person) {
    this.persons = this.persons.filter(test => test !== person);
  }

}
