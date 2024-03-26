import { Component ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() Rating: number ;
  @Input() nameRating: string = ''
  @Output() outRating: EventEmitter<string>= new EventEmitter<string>()
  starwidth: number = 0;
  constructor(){
    this.Rating = 0;
    this.starwidth = this.Rating * 90 / 5
  }
  ngOnChanges(): void{
    this.starwidth = this.Rating * 90 / 5
  }
  ViewRating(){
    this.outRating.emit(`Rating: ${this.nameRating} ${this.Rating}`);
  }
}
