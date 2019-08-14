import {Component, OnInit} from '@angular/core';
import { Ingredient } from 'models/ingredient.model'
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IngredientDialogComponent} from 'prep/shared/ingredient-dialog/ingredient-dialog.component'

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss']
})
export class PantryComponent implements OnInit {
  pantry: Ingredient[] = [
    {
      name: "sugar",
      quantity: 200,
      type: "grams"
    },
    {
      name: "water",
      quantity: 2,
      type: "litres"
    }
  ]

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  editIngredient(ingredient: Ingredient) {
    console.log('testing', ingredient)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '400px';
    dialogConfig.width = '400px';
    dialogConfig.data = ingredient

    this.dialog.open(IngredientDialogComponent, dialogConfig);
  }
}
