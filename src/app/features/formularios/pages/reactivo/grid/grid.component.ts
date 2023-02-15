import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  formReactivo!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit() {}

  crearFormulario() {
    this.formReactivo = this.fb.group({
      campo: ['', [Validators.minLength(5)]], // COn minLength se omite el required
      camposArray: new FormArray([]),
    });
    this.crearArrayControls();
  }

  get form(){
    return this.formReactivo.controls

  }
  get camposArray() {
    return this.form['camposArray'] as FormArray;
  }

  crearArrayControls() {
    [1, 2, 3].forEach((numero) =>
      this.camposArray.push(new FormControl(true, Validators.required))
    );

    this.crearControlDinamico();
  }

  crearControlDinamico() {
    let nombreControl = 'controlDinamico';
    this.formReactivo.addControl(
      nombreControl,
      new FormControl(`ValorInicial`, Validators.required)
    );

    this.formReactivo.addControl(
      'controlDinamico2',
      new FormControl(`ValorInicial`, Validators.required)
    );
    console.log('Form creado');
    console.log(this.formReactivo.controls);
  }

  validarCampo() {
    console.log('Validando Campos con keypress');
    console.log('Vaslidadores', this.form['campo'].validator);

    this.form['campo'].updateValueAndValidity();
    this.form['campo'].markAsDirty(); //
    console.log('Status', this.form['campo'].status);
    console.log('Errores', this.form['campo'].errors);
  }

}
