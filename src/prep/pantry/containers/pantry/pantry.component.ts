import {Component, OnInit} from '@angular/core';
import { Ingredient } from 'models/ingredient.model'
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IngredientDialogComponent} from 'prep/shared/ingredient-dialog/ingredient-dialog.component'
import { environment } from 'environments/environment'
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss']
})
export class PantryComponent implements OnInit {
  pantry: Ingredient[];
  searchText: string;
  data = {
    location: 'pantry'
  }
  constructor(
    private dialog: MatDialog,
    private authHttp: HttpClient
    ) {}

  ngOnInit() {
    this.authHttp.get(`${environment.API}/pantry`)
      .subscribe((res: any) => {
        this.pantry = res.data
        })
  }

  getSearch(event: any) {
    this.searchText = event;
  }

  editIngredient(ingredient: Ingredient) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '500px';
    dialogConfig.width = '400px';
    dialogConfig.data = ingredient

    this.dialog.open(IngredientDialogComponent, dialogConfig);
  }
}
