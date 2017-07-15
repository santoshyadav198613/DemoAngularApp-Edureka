import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FormsModule, ReactiveFormsModule, HttpModule],
  declarations: []
})
export class SharedModule { }
