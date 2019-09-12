import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-ingredient-dialog',
  templateUrl: './ingredient-dialog.component.html',
  styleUrls: ['./ingredient-dialog.component.scss']
})
export class IngredientDialogComponent implements OnInit {
  isHandset!: boolean;
  isHandset$: Observable<boolean> =
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));

  ingredientForm = this.fb.group(
    {
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      measurement: ['', Validators.required],
      expiration: [''],
      price: ['']
    }
  );
  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private authHttp: HttpClient,
  ) { }

  ngOnInit() {
    this.isHandset$.subscribe(val => {
      this.isHandset = val;
    });
    if (this.data) {
      console.log('data', this.data)
      this.ingredientForm.patchValue({
        name: this.data.name,
        quantity: this.data.quantity,
        measurement: this.data.measurement,
      })
      if (this.data.expiration) {
        this.ingredientForm.patchValue({
          expiration: this.data.expiration
        })
      }
      if (this.data.price) {
        this.ingredientForm.patchValue({
          price: this.data.price
        })
      }
    }
  }

  onSubmit(form: Ingredient) {
    console.log('form', form)
  }
}
