import { Component, OnInit, ViewChild } from '@angular/core';
// import { energyData } from './data';

import {
  Aggregate,
  AggregateService,
  Column,
  ExcelExportProperties,
  ExportDetailTemplateEventArgs,
  ExportGroupCaptionEventArgs,
  GridComponent,
  GroupService,
  GroupSettingsModel,
  PageOrientation,
  PdfExportProperties,
  SearchSettingsModel,
  TextWrapSettingsModel,
  ToolbarItems,
  GridAllModule,
} from '@syncfusion/ej2-angular-grids';

import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanData, loanData } from './loan-data.model'; // Ensure loan-data.model.ts exists
import { CommonModule } from '@angular/common';
import { updatedHierarchyOrderData } from './data';
import { isDevMode } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ ],
  standalone: true,
  imports: [GridAllModule],
})
export class AppComponent {
   public data: Object[] = [];
  public filterSettings?: Object;
  public toolbar?: string[];
  public editSettings?: Object;
  public orderidrules?: Object;
  public customeridrules?: Object;
  public freightrules?: Object;
  ngOnInit(): void {
     if (!isDevMode()) {
    // Production mode
    console.log('Production mode!');
  } else {
    console.log('Development mode!');
  }
    this.data = updatedHierarchyOrderData;
    this.filterSettings = {
      mode: 'Immediate',
      showFilterBarOperator: true,
      showFilterBarStatus: false,
      enableCaseSensitivity: false, // This is explicitly set to false
      operators: {},
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.orderidrules = { required: true, number: true };
    this.customeridrules = { required: true, minLength: 5 };
    this.freightrules = { required: true, min: 0 };
  }
}
