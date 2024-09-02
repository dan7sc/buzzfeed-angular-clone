import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NgIf],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  title: string = ""

  questions: any
  selectedQuestion: any

  answers: string[] = []
  selectedAnswer: string = ""

  questionIndex: number = 0
  questionMaxIndex: number = 0

  finished: boolean = false
}
