import { Component, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'checkbox-editor',
    // styleUrls: ['./editor.component.scss'],
    template: `<input type="checkbox" checked="true">`
})

export class CheckboxEditorComponent implements OnInit {
    public isChecked: boolean;

    constructor() {
    }

    ngOnInit() {}

    onChange(event: any): void {
    }
}
