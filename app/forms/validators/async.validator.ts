import {FormControl} from "@angular/forms";

export function validateAsync(control: FormControl): Promise<{[key: string]: boolean}> {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'Alex1') {
                resolve({validateAsync: true});
            } else {
                resolve(null);
            }
        }, 2000)
    });
}