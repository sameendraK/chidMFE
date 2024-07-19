import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-child-test',
  standalone: true,
  imports: [
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: ChildTestComponent
    //   }
    // ])
  ],
  templateUrl: './child-test.component.html',
  styleUrl: './child-test.component.scss'
})
export class ChildTestComponent {

}
