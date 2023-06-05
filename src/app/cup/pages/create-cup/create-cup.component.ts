import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { newCup } from 'src/app/model/new-cup.model';
import { CupService } from 'src/app/services/cup.service';
import { CupAction } from 'src/app/store/cup/cup.action';
import { CupSelector } from 'src/app/store/cup/cup.selector';

@Component({
  selector: 'app-create-cup',
  templateUrl: './create-cup.component.html',
  styleUrls: ['./create-cup.component.scss']
})
export class CreateCupComponent {

  loading = false;

  userForm = new FormGroup({
    name: new FormControl<string | null>("name", [Validators.required]),
    date: new FormControl<string | null>("2023-05-06", [Validators.required]),
    volume: new FormControl<number | null>(10, [Validators.min(1), Validators.max(10), Validators.required]),
    color: new FormControl<string | null>("GREEN", [Validators.required])


  })

  constructor(private cupService: CupService, private toastr: ToastrService, private store : Store) { 
    
    this.store.select(CupSelector.getCreateLoading).subscribe(value => this.loading = value);
  }

  validate(): void {

    console.log("champs non valide", this.userForm.value, this.userForm.dirty, this.userForm.touched);
    console.log(this.userForm.value.name);
    if (this.userForm.controls.name.value) {
      console.log("Le champ 'name' est valide");
    } else {
      console.log("Le champ 'name' n'est pas valide");
    }

    if (this.userForm.controls.name.touched) {
      console.log("le champ a été cliqué")
    }
    console.log(this.userForm.controls.volume.errors);

    if (this.userForm.valid) {
      const value = this.userForm.value;
      const cup: newCup = {

        color: value.color!,
        name: value.name!,
        volume: value.volume!,
        date: value.date!

      }

      this.userForm.disable();

      this.store.dispatch(new CupAction.Create(cup)).subscribe({
        next: () => {
          this.toastr.success('Congrat 😎');
          
          this.userForm.enable()
          this.userForm.reset();
        },
        error: (err) => {
          console.log("erreur", err);
          
          this.toastr.error('Erreur 😔');
          this.userForm.enable()
        }
      });

    }

  }


  getMessage(control: FormControl): string {
    if (control.errors?.["required"]) {
      return "Le champ est requis"
    } else if (control.errors?.["min"]) {
      return "La valeur doit être supérieure à " + control.errors?.["min"].min
    } else if (control.errors?.["max"]) {
      return `La valeur doit être inférieure à ${control.errors?.["max"].max}`
    } else {
      return ""
    }
  }






}

