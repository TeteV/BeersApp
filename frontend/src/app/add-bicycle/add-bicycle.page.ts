import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BicycleService } from '../services/bicycle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bicycle',
  templateUrl: './add-bicycle.page.html',
  styleUrls: ['./add-bicycle.page.scss'],
})
export class AddBicyclePage implements OnInit {

  bicycleForm: FormGroup;

  constructor(public fb: FormBuilder,
    private bicycleService: BicycleService,
    private router: Router
  ) {
    this.bicycleForm = this.fb.group({
      model: [''],//Aqui van las validaciones
      brand: ['']
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.bicycleForm.valid) {
      return false;
      //aqui donde sale si hay error, poner un modal bonito ahi
    } else {
      let bicycle = {
        id: null,
        brand: this.bicycleForm.value.brand,
        model: this.bicycleForm.value.model
      }
      this.bicycleService.addBicycle(bicycle)
        .subscribe(res => {
          this.router.navigateByUrl("/list");
        });
    }
  }


}

