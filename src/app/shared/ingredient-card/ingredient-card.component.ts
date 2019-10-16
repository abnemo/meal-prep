import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model';
import { PantryService } from 'src/app/pantry/pantry.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IngredientDialogComponent } from '../ingredient-dialog/ingredient-dialog.component';

@Component({
  selector: 'mp-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss']
})
export class IngredientCardComponent implements OnInit {
  @Input() ingredient: Ingredient;
  @Input() pantry: Ingredient[];

  constructor(
    private pantryService: PantryService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() { }

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
}
