import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryBuilderClassNames, QueryBuilderConfig, QueryBuilderModule } from 'shout-angular-query-builder';

@Component({
  selector: 'app-query-builder-dialog',
  imports: [    QueryBuilderModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this schema
  templateUrl: './query-builder-dialog.component.html',
  styleUrl: './query-builder-dialog.component.scss'
})
export class QueryBuilderDialogComponent {
  title = 'angular-latest-integration';
  public queryCtrl: FormControl;

  public classNames: QueryBuilderClassNames = {
    removeIcon: 'fa fa-minus',
    editIcon: 'fa fa-edit',
    addIcon: 'fa fa-plus',
    arrowIcon: 'fa fa-chevron-right px-2',
    button: 'btn',
    buttonGroup: 'btn-group',
    rightAlign: 'order-12 ml-auto',
    switchRow: 'd-flex px-2',
    switchGroup: 'd-flex align-items-center',
    switchRadio: 'custom-control-input',
    switchLabel: 'custom-control-label',
    switchControl: 'custom-control custom-radio custom-control-inline',
    row: 'row p-2 m-1',
    rule: 'border',
    ruleSet: 'border',
    invalidRuleSet: 'alert alert-danger',
    emptyWarning: 'text-danger mx-auto',
    operatorControl: 'form-control',
    operatorControlSize: 'col-auto pr-0',
    fieldControl: 'form-control',
    fieldControlSize: 'col-auto pr-0',
    entityControl: 'form-control',
    entityControlSize: 'col-auto pr-0',
    inputControl: 'form-control',
    inputControlSize: 'col-auto',
  };

  public query = {
    condition: 'and',
    rules: [],
  };

  public entityConfig: QueryBuilderConfig = {
    entities: {
      physical: { name: 'Physical Attributes' },
      nonphysical: { name: 'Nonphysical Attributes' },
    },
    fields: {
      age: { name: 'Age', type: 'number', entity: 'physical' },
      gender: {
        name: 'Gender',
        entity: 'physical',
        type: 'category',
        options: [
          { name: 'Male', value: 'm' },
          { name: 'Female', value: 'f' },
        ],
      },
      name: { name: 'Name', type: 'string', entity: 'nonphysical' },
      notes: {
        name: 'Notes',
        type: 'textarea',
        operators: ['=', '!='],
        entity: 'nonphysical',
      },
      educated: {
        name: 'College Degree?',
        type: 'boolean',
        entity: 'nonphysical',
      },
      birthday: {
        name: 'Birthday',
        type: 'date',
        operators: ['=', '<=', '>'],
        defaultValue: () => new Date(),
        entity: 'nonphysical',
      },
      school: {
        name: 'School',
        type: 'string',
        nullable: true,
        entity: 'nonphysical',
      },
      occupation: {
        name: 'Occupation',
        entity: 'nonphysical',
        type: 'category',
        options: [
          { name: 'Student', value: 'student' },
          { name: 'Teacher', value: 'teacher' },
          { name: 'Unemployed', value: 'unemployed' },
          { name: 'Scientist', value: 'scientist' },
        ],
      },
    },
  };

  public config: QueryBuilderConfig = {
    fields: {
      age: { name: 'Age', type: 'number' },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          { name: 'Male', value: 'm' },
          { name: 'Female', value: 'f' },
        ],
      },
      name: { name: 'Name', type: 'string' },
      notes: { name: 'Notes', type: 'textarea', operators: ['=', '!='] },
      educated: { name: 'College Degree?', type: 'boolean' },
      birthday: {
        name: 'Birthday',
        type: 'date',
        operators: ['=', '<=', '>'],
        defaultValue: () => new Date(),
      },
      school: { name: 'School', type: 'string', nullable: true },
      occupation: {
        name: 'Occupation',
        type: 'category',
        options: [
          { name: 'Student', value: 'student' },
          { name: 'Teacher', value: 'teacher' },
          { name: 'Unemployed', value: 'unemployed' },
          { name: 'Scientist', value: 'scientist' },
        ],
      },
    },
  };

  public currentConfig: QueryBuilderConfig;
  public allowRuleset: boolean = true;
  public allowCollapse: boolean = true;
  public persistValueOnFieldChange: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.queryCtrl = this.formBuilder.control(this.query);
    this.currentConfig = this.config;
  }

  switchModes(event: Event) {
    this.currentConfig = (<HTMLInputElement>event.target).checked
      ? this.entityConfig
      : this.config;
  }

  changeDisabled(event: Event) {
    (<HTMLInputElement>event.target).checked
      ? this.queryCtrl.disable()
      : this.queryCtrl.enable();
  }

  submit() {
    console.log(this.query);

    const output = {
      if: {
        conditions: {
          condition: this.query.condition,
          rules: this.query.rules,
        },
        then: [],
        else: [],
      },
    };
    console.log(output);
  }

  close(){

  }

}
