import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C1Component implements OnInit{
  @Input() person:Observable<any>;
  constructor(private cd:ChangeDetectorRef){}

  _data:any;
  ngOnInit(): void {
    this.person.subscribe((value) => {
      this._data = value;
      this.cd.markForCheck();
    })
    
  }


}
