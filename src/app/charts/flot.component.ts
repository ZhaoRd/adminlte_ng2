import { Component,Inject } from '@angular/core';

@Component({
    selector: 'Flot',
    templateUrl: './flot.component.html'
})
export class FlotComponent { 
    
    constructor() { 
        
    }

    public ngOnInit() {


    }

    private data=[];
    private totalPoints=100;

    private getRandomData(){


      if (this.data.length > 0)
        this.data = this.data.slice(1);

      // Do a random walk
      while (this.data.length < this.totalPoints) {

        var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }

        this.data.push(y);
      }

      // Zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < this.data.length; ++i) {
        res.push([i, this.data[i]]);
      }

      return res;
    }


}