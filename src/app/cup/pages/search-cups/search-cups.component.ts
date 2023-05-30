import { Component, OnInit } from '@angular/core';
import { SearchCup } from 'src/app/model/search-cup.model';
import { CupService } from 'src/app/services/cup.service';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-search-cups',
  templateUrl: './search-cups.component.html',
  styleUrls: ['./search-cups.component.scss']
})
export class SearchCupsComponent implements OnInit {

  loading = false;
  isButtonDisabled: boolean = false;

  data: SearchCup[] = [];

  constructor(private cupservice: CupService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {

    this.loading = true;
    this.cupservice.readCups().subscribe({

      next: value => {
        console.log("ok");
        this.loading = false;
        this.data = value
      },

      error: err => console.log(err)
    })
  }

  deleteButton(cup: SearchCup): void {
    if (this.isButtonDisabled) {
      return;
    }
  
    this.isButtonDisabled = true;
  
    this.cupservice.deleteCup(cup.id).subscribe({
      next: () => {
        this.toastr.success('Congrat 😎');
        this.refresh();        
        this.isButtonDisabled = false;
        console.log("Je passe une fois")
        
      },
      error: () => {
        this.toastr.error('Erreur 😔');
      },
      
    });
  }
}





