import { Component } from '@angular/core';
import { CustomerViewComponent } from "./customer/customer-view/customer-view.component";
import { CustomerAddComponent } from "./customer/customer-add/customer-add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerViewComponent, CustomerAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'state-mgmt';
}
