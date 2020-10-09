
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-update-bicycle',
  templateUrl: './update-bicycle.page.html',
  styleUrls: ['./update-bicycle.page.scss'],
})
export class UpdateBicyclePage implements OnInit {
  
  UpdateBicycleForm: FormGroup;

  constructor(public fb: FormBuilder,
    private bicycleService: BicycleService,
    private router: Router
    ) { }

    getBicycleData(id) {
      console.log("estoy en bicycle data: " + id)
      this.bicycleService.getBicycleById(id).subscribe(res => {
        this.UpdateBicycleForm.setValue({
          brand: res['brand'],
          model: res['model']
        });
      });
    }

  ngOnInit() {
    let id = this.bicycleService.getCurrentBicycleId();
    this.getBicycleData(id);
    console.log("estoy en nginit ID:" + id)
    this.UpdateBicycleForm = this.fb.group({
      brand: [''],
      model: ['']
    })
  }

  /*findBicycle(id) {
    console.log("estyo en find")
     id = this.bicycleService.getCurrentBicycleId();
    this.bicycleService.getBicycleById(id).subscribe((b) => { 
    })
  }*/

  onFormUpdateSubmit() {
    let id = this.bicycleService.getCurrentBicycleId();
    if (!this.UpdateBicycleForm.valid) {
      return false;
      //aqui donde sale si hay error, poner un modal bonito ahi
    } else {
        this.bicycleService.updateBicycle(id , this.UpdateBicycleForm.value)
        .subscribe((res) => {
          console.log(res)
          this.UpdateBicycleForm.reset();
          this.router.navigateByUrl("/list");
        })
    }
  }



}
