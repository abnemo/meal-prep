import { Component, OnInit } from '@angular/core';
import { PantryService } from './pantry.service';
import { Ingredient } from 'src/models/ingredient.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IngredientDialogComponent } from '../shared/ingredient-dialog/ingredient-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss']
})
export class PantryComponent implements OnInit {
  data = { location: 'pantry' };
  pantry: Ingredient[];
  searchText: string;

  constructor(
    private pantryService: PantryService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.pantryService.getPantry().subscribe((ingredients: Ingredient[]) => {
      this.pantry = ingredients
    })
  }

  getSearch(event: any) {
    this.searchText = event;
  }

  editIngredient(ingredient: Ingredient) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '550px';
    dialogConfig.width = '400px';
    dialogConfig.data = ingredient
    const dialogRef = this.dialog.open(IngredientDialogComponent, dialogConfig);

    dialogRef.componentInstance.onDelete
      .subscribe((id) => {
        this.pantryService.removeIngredient(id).subscribe(() =>
          this.pantry = this.pantry.filter(item => item.id !== id))
      })


    dialogRef.componentInstance.onComplete
      .subscribe((data) => {
        this.pantryService.updateIngredient(data)
          .subscribe(
            (res) => {
              this.pantry.forEach((ingredient, index) => {
                if (ingredient.id === this.getIngredient(res.id).id) {
                  this.pantry[index] = res
                }
              })
            })
      })
  }

  getIngredient(id: string) {
    const list = this.pantry.filter((ingredient) => {
      return ingredient.id === id
    })
    return list[0]
  }

  onAdd(event: Ingredient) {
    this.pantryService.addIngredient(event)
      .subscribe((res) => {
        const ingredient = res['data']
        this.pantry.push(ingredient)
      })
  }

}