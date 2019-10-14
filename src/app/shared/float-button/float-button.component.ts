import { Component, Input, Output, EventEmitter } from '@angular/core';
import { speedDialFabAnimations } from './float-button.animations';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IngredientDialogComponent } from '../ingredient-dialog/ingredient-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mp-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss'],
  animations: speedDialFabAnimations
})
export class FloatButtonComponent {
  @Input() data: any;
  @Output() added = new EventEmitter<any>();
  buttons: any[] = [];
  fabTogglerState = 'inactive';

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  showItems() {
    this.fabTogglerState = 'active';
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
  }

  onToggleFab() {
    if (this.data.location === 'recipes') {
      this.router.navigate(this.data.path)
    }
    if (this.data.location === 'pantry') {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.height = '550px';
      dialogConfig.width = '400px';
      dialogConfig.data = ''
      const dialogRef = this.dialog.open(IngredientDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        this.fabTogglerState = 'inactive'
      })
      dialogRef.componentInstance.onComplete
        .subscribe(data => this.added.emit(data))
    }
    this.fabTogglerState === 'active' ? this.hideItems() : this.showItems();
  }
}
