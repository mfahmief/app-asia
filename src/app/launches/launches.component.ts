import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LaunchesData, LaunchesService } from './launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  form: FormGroup;
  launchData: LaunchesData;
  constructor(
    private launchesService: LaunchesService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  async ngOnInit() {}

  createForm() {
    this.form = this.formBuilder.group({
      idNo: [null, Validators.required]
    });
  }

  async submit() {
    if (this.form.valid) {
      try {
        this.launchData = await this.launchesService.getLaunches(
          this.form.value.idNo
        );
      } catch (err) {
        alert(`Launch no: ${this.form.value.idNo} is not available`);
      }
    }
  }
}
