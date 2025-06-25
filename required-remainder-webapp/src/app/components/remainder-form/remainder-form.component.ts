import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RemainderService } from '../../services/remainder.service';
import { RemainderRequest } from '../../models/remainder.model';

@Component({
    selector: 'app-remainder-form',
    templateUrl: './remainder-form.component.html',
    styleUrls: ['./remainder-form.component.css']
})
export class RemainderFormComponent {
    form: FormGroup;
    resultado: number[] | null = null;
    error: string | null = null;
    cargando = false;

    constructor(private fb: FormBuilder, private remainderService: RemainderService) {
        this.form = this.fb.group({
            x: [null, [Validators.required, Validators.min(2)]],
            y: [null, [Validators.required, Validators.min(0)]],
            n: [null, [Validators.required, Validators.min(0)]]
        });
    }

    submit() {
        if (this.form.invalid) return;
        const batch: RemainderRequest[] = [this.form.value];

        this.cargando = true;

        this.remainderService.calcularRemainder(batch).subscribe({
            next: (res) => {
                this.resultado = res;
                this.error = null;
                this.cargando = false;
            },
            error: (err) => {
                this.error = 'Error al llamar el servicio: ' + (err.error?.message || err.statusText);
                this.resultado = null;
                this.cargando = false;
            }
        });
    }
}
