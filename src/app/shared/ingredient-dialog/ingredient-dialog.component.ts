import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Ingredient } from 'src/app/core/models/ingredient.model';
import { integerValidator } from '../validators/checkInteger.validator';

@Component({
  selector: 'mp-ingredient-dialog',
  templateUrl: './ingredient-dialog.component.html',
  styleUrls: ['./ingredient-dialog.component.scss']
})
export class IngredientDialogComponent implements OnInit {
  @Output() onDelete = new EventEmitter<any>();
  @Output() onComplete = new EventEmitter<any>();

  isHandset!: boolean;
  pageTitle: string;
  source: string;
  ingredientForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<IngredientDialogComponent>
  ) { }

  ngOnInit() {
    //initialize form
    this.ingredientForm = this.fb.group(
      {
        name: ['', Validators.required],
        quantity: [null, [Validators.required, integerValidator]],
        measurement: ['', Validators.required],
        expiration: [],
        price: [null, [integerValidator]]
      }
    );

    //manage data
    if (this.data) {
      this.pageTitle = 'Edit ingredient'
      this.source = 'edit'
      this.fillIngredient(this.data)
    } else {
      this.pageTitle = 'Add new ingredient'
    }
  }

  fillIngredient(data: Ingredient) {
    this.ingredientForm.patchValue({
      name: data.name,
      quantity: data.quantity,
      measurement: data.measurement,
    })
    if (data.expiration) {
      this.ingredientForm.patchValue({
        expiration: data.expiration
      })
    }
    if (data.price) {
      this.ingredientForm.patchValue({
        price: data.price
      })
    }
  }

  onSubmit(form: Ingredient) {
    console.log(form)
    form.id = this.data.id
    this.onComplete.emit(form)
    this.dialogRef.close()
  }

  delete() {
    this.onDelete.emit(this.data.id)
    this.dialogRef.close();
  }
}
