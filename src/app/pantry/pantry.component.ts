import { Component, OnInit } from '@angular/core';
import { PantryService } from './pantry.service';
import { Ingredient } from 'src/models/ingredient.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IngredientDialogComponent } from '../shared/ingredient-dialog/ingredient-dialog.component';

@Component({
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss']
})
export class PantryComponent implements OnInit {
  data = { location: 'pantry' }
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

    this.dialog.open(IngredientDialogComponent, dialogConfig);
  }

}