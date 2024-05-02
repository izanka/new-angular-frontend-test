import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {

  response: string = '';

  constructor(private dataService: DataService) { }

  processData(name: string) {
    const data = { 
      Id: 1,
      Name: name
    };
    console.log("Name:", data);
    this.dataService.processData(data).subscribe(
      (res: any) => {
        this.response = res.result;
        console.log("res:", this.response)
      },
      (error: any) => {
        // Handle error response
        console.error('Error:', error);
      }
    );
  }

}
