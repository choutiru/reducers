import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GetterService } from './services/getter.service';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'reducers-tutorial';


constructor(private getterService: GetterService, private store: Store<{ author: any }>) {}

ngOnInit(): void {
  this.getAuthor();
}

getAuthor() {
  this.getterService.getAuthor().subscribe(
    data => console.log(data),
  );
}

author$: Observable = this.store.select(state => state.movies);


}
