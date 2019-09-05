import { Component, Input } from '@angular/core';
import { speedDialFabAnimations } from './float-button.animations';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { IngredientDialogComponent } from 'prep/shared/ingredient-dialog/ingredient-dialog.component'


@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss'],
  animations: speedDialFabAnimations
})
export class FloatButtonComponent {
  @Input() data: any;
  buttons: any[] = [];
  fabTogglerState = 'inactive';
  constructor(
    private router: Router,
    private dialog: MatDialog) { }

  showItems() {
    this.fabTogglerState = 'active';
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
  }

  onToggleFab() {
    if (this.data.location === 'recipes' ){
      this.router.navigate(this.data.path)
    }
    if (this.data.location === 'pantry') {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.height = '500px';
      dialogConfig.width = '400px';
      dialogConfig.data = ''
      this.dialog.open(IngredientDialogComponent, dialogConfig);
      this.dialog.afterAllClosed.subscribe((res) => {
        this.fabTogglerState = 'inactive'
        })
    }
    this.fabTogglerState === 'active' ? this.hideItems() : this.showItems();
  }

}
