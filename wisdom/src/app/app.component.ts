import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WisdomSentencesJson from '../assets/WisdomSentences.json';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  wisdomSentences: any[] = [];
  displayedSentence: string = 'bonjour les ptits potes';
  title = 'wisdom';

  constructor(private route: ActivatedRoute, private toastr: ToastrService) {
    this.wisdomSentences = WisdomSentencesJson;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Vérifier si le paramètre 'randomIndex' existe
      const randomIndexFromUrl = params['id'];
      if(randomIndexFromUrl !== undefined && (randomIndexFromUrl-1 <= 0 || randomIndexFromUrl-1 >= this.wisdomSentences.length)){
        this.toastr.warning("I See you Picaut");
        this.displayRandomSentence();
      } else {
        // Si 'randomIndex' est présent, l'utiliser directement
        const index = Number(randomIndexFromUrl) - 1;
        if (!isNaN(index) && index >= 0 && index < this.wisdomSentences.length) {
          this.displayedSentence = this.wisdomSentences[index].sentence;
        } else {
          this.displayRandomSentence(); // Si l'index est invalide, choisir un random
        }
      }
    });
  }

  displayRandomSentence() {
    // Générer un index aléatoire parmi les id des citations
    const randomIndex = Math.floor(Math.random() * this.wisdomSentences.length);
    this.displayedSentence = this.wisdomSentences[randomIndex].sentence;
  }

  displayNewestSentence() {
    this.displayedSentence = this.wisdomSentences[this.wisdomSentences.length-1].sentence;
  }
}
