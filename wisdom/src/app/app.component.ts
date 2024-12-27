import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WisdomSentencesJson from '../assets/WisdomSentences.json';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router)
  {
    this.wisdomSentences = WisdomSentencesJson;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const randomIndexFromUrl = params['id'];
      if(randomIndexFromUrl !== undefined && (randomIndexFromUrl <= 0 || randomIndexFromUrl >= this.wisdomSentences.length+1)){
        this.toastr.warning("I see you Picaut 👁️");
        this.displayIfErrorSentence();
      } else {
        const index = Number(randomIndexFromUrl) - 1;
        if (!isNaN(index) && index >= 0 && index < this.wisdomSentences.length) {
          this.displayedSentence = this.wisdomSentences[index].sentence;
        } else {
          this.displayIfErrorSentence();
        }
      }
    });
  }

  displayIfErrorSentence() {
    // Générer un index aléatoire parmi les id des citations
    const randomIndex = Math.floor(1 + Math.random() * this.wisdomSentences.length);
    this.displayedSentence = this.wisdomSentences[randomIndex].sentence;
  }

  displayRandomSentence() {
    // Générer un index aléatoire parmi les id des citations
    const randomIndex = Math.floor(1 + Math.random() * this.wisdomSentences.length);
    this.router.navigate(["/"], { queryParams: {id: randomIndex}});
  }

  displayNewestSentence() {
    this.router.navigate(["/"], { queryParams: {id: this.wisdomSentences.length}});
  }
}
