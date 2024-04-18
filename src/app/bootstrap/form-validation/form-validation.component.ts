import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {
  ngOnInit(): void{
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation');

    // console.error(`[LOG] -- forms===${forms}`);

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event: any) => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })

  }

}
