import { Component, OnInit } from '@angular/core';
import { SearchCup } from 'src/app/model/search-cup.model';
import { CupService } from 'src/app/services/cup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count: number = 10
  color: string = "GREEN"
  

  data: SearchCup[] = [];

  constructor(private cupservice: CupService) {

  }


  ngOnInit(): void {

    this.cupservice.readCups().subscribe({

      next: value => {
        this.data = value
      },
      error: err => console.log(err)
    })
  }

  countGrenn() : number {
    return this.data.filter((cup) => cup.color === "GREEN").length
  }

  countRed() : number {
    return this.data.filter((cup) => cup.color === "RED").length
  }

  countBlue() : number {
    return this.data.filter((cup) => cup.color === "BLUE").length
  }

  countWhite() : number {
    return this.data.filter((cup) => cup.color === "WHITE").length
  }

  total() : number {
    return this.data.length
  }

  
}
