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
        lastName: "Iliopoulos",
        age: "30",
        origin: "Greek",
        phoneNumber: "697458975"
      },
      {
          firstName: "Eleni",
          lastName: "Makri",
          age: "27",
          origin: "Greek",
          phoneNumber: "698874659"
        },
        {
            firstName: "Andreas",
            lastName: "Manios",
            age: "15",
            origin: "Greek",
            phoneNumber: "698297445"
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
