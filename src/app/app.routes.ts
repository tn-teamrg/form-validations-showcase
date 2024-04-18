import { Routes } from '@angular/router';
import { NgReactiveFormsWithValidationsComponent } from './primeng/ng-reactive-forms-with-validations/ng-reactive-forms-with-validations.component';

export const routes: Routes = [

	// ! NOTE: bootstrap
	// { path: '', component: AlertsComponent }
	// { path: '', component: FormValidationComponent}
	// { path: '', component: SupportedElementsComponent }

	// ! NOTE: w3schools
	// { path: '', component: ValidationComponent }

	// ! NOTE: primeng
	// { path: '', component: NgReactiveFormsWithValidationsComponent },

	// ! NOTE: angular
	{
		path: 'items', loadChildren: () =>
			import('./ng/items/items.module')
				.then(m => m.ItemsModule)
	},
];
