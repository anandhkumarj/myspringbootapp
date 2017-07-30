import { HelloService } from './hello.service';
import { Component } from '@angular/core';

@Component({
  selector: 'controller-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HelloService]
})
export class AppComponent {
  title = 'app works!';
  
  constructor(private helloService : HelloService) {};
  
  ngOnInit() {
    this.helloService.getGreeting()
      .subscribe(string => {
        this.title = string
      })
  }
}
