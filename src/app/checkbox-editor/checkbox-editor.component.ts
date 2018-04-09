import { Component } from '@angular/core';

import { DefaultEditor, Cell } from 'ng2-smart-table';

@Component({
    selector: 'checkbox-editor',
    //styleUrls: ['./editor.component.scss'],
    template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `,
})
export class RenderCheckboxComponent extends DefaultEditor {
    //CheckboxEditorComponent
    constructor() {
        super();
    }

    onChange(event: any): void {
        const trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        const falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    }
}