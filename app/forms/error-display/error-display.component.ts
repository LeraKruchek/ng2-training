import {Component, Input, Host} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'error-display',
    templateUrl: './error-display.component.html'
})
export class ErrorDisplayComponent {
    @Input() control: FormControl;
    @Input() errors: any;

    // constructor(@Host() private _formDir: FormGroup) {
    //     console.log("obj="+_formDir);
    //
    // }
    get errorMessage() {

        // let c = this._formDir.formDirective.find(this.control);

        if (this.control && this.control.errors) {
            for (let key of Object.keys(this.control.errors)) {
                if (this.control.dirty) {
                    if (this.errors) {
                        return this.errors[key];
                    } else if (!this.control.pending) {
                        return JSON.stringify(this.control.errors);
                    }
                }
            }
        } else {
            return null;
        }
    }
}
