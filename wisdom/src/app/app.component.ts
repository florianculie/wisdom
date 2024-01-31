import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WisdomSentencesJson from '../assets/WisdomSentences.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wisdomSentences: any[] = [];
  displayedSentence: string = 'bonjour les ptits potes';
  title = 'wisdom';

  constructor(){
    this.wisdomSentences = WisdomSentencesJson;
    this.displayRandomSentence();
  }

  displayRandomSentence() {
    const randomIndex = Math.floor(Math.random() * this.wisdomSentences.length);
    this.displayedSentence = this.wisdomSentences[randomIndex].sentence;
  }

}
