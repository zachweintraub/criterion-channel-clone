import { Component, OnInit } from '@angular/core';
import { Content } from '../content.model';
import { Collection } from '../collection.model';
import { Category } from '../category.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
  providers: [CategoryService]
})
export class NowPlayingComponent implements OnInit {

  categories: FirebaseListObservable<any[]>;

  jubal: Content = new Content('Jubal', 'A trio of exceptional performances by Glenn Ford, Ernest Borgnine, and Rod Steiger form the center of JUBAL, an overlooked Hollywood treasure from genre master Delmer Daves. In this Shakespearean tale of jealousy and betrayal, Ford is an honorable itinerant cattleman, befriended and hired by Borgnine’s bighearted ranch owner despite his unwillingness to talk about his past. When he becomes the object of the attentions of the owner’s bored wife (Valerie French) and is entrusted with a foreman’s responsibilities, his presence starts to rankle a shifty fellow cowhand, played by Steiger. The resulting emotional showdown imparts unparalleled psychological intensity to this vivid western melodrama, featuring expressive location photography in Technicolor and CinemaScope.', {director: 'Delmer Daves', year: '1956', country: 'United States', cast: ['Glen Ford', 'Ernest Borgnine', 'Valerie French']}, 'jubal.jpg', true);
  weekend: Content = new Content('Weekend', 'This sensual, remarkably observed, beautifully acted wonder is the breakout feature from British writer-director-editor Andrew Haigh. Rarely has a film been as honest about sexuality—in both depiction and discussion—as this tale of a one-night stand that develops into a weekend-long idyll for two very different young men (exciting screen newcomers Tom Cullen and Chris New) in the English Midlands. It’s an emotionally naked film that’s at once an invaluable snapshot of the complexities of contemporary gay living and a universally resonant portrait of a love affair.', {director: 'Andrew Haigh', year: '2011', country: 'United Kingdom', cast: ['Tom Cullen', 'Chris New']}, 'weekend.jpg', true);
  friendsHome = new Content(`Where Is the Friend's House?`, 'The first film in Abbas Kiarostami’s sublime, interlacing KOKER TRILOGY takes a simple premise—a boy searches for the home of his classmate, whose school notebook he has accidentally taken—and transforms it into a miraculous, child’s-eye adventure of the everyday. As our young hero zigzags determinedly across two towns, aided (and sometimes misdirected) by those he encounters, his quest becomes both a revealing portrait of rural Iranian society in all its richness and complexity and a touching parable about the meaning of personal responsibility. Sensitive and profound, WHERE IS THE FRIEND’S HOUSE? is shot through with all the beauty, tension, and wonder a single day can contain.', {director: 'Abbas Kiarostami', year: '1987', country: 'Iran', cast: []}, 'where-is-the-friends-house.jpg', true);
  
  jubalCollection: Collection = new Collection('Jubal', 'A trio of exceptional performances by Glenn Ford, Ernest Borgnine, and Rod Steiger form the center of JUBAL, an overlooked Hollywood treasure from genre master Delmer Daves. In this Shakespearean tale of jealousy and betrayal, Ford is an honorable itinerant cattleman, befriended and hired by Borgnine’s bighearted ranch owner despite his unwillingness to talk about his past. When he becomes the object of the attentions of the owner’s bored wife (Valerie French) and is entrusted with a foreman’s responsibilities, his presence starts to rankle a shifty fellow cowhand, played by Steiger. The resulting emotional showdown imparts unparalleled psychological intensity to this vivid western melodrama, featuring expressive location photography in Technicolor and CinemaScope.', ['this.jubal'], 'jubal.jpg', true);
  friendsHomeCollection: Collection = new Collection(`Where Is the Friend's House?`, `The first film in Abbas Kiarostami’s sublime, interlacing KOKER TRILOGY takes a simple premise—a boy searches for the home of his classmate, whose school notebook he has accidentally taken—and transforms it into a miraculous, child’s-eye adventure of the everyday. As our young hero zigzags determinedly across two towns, aided (and sometimes misdirected) by those he encounters, his quest becomes both a revealing portrait of rural Iranian society in all its richness and complexity and a touching parable about the meaning of personal responsibility. Sensitive and profound, WHERE IS THE FRIEND’S HOUSE? is shot through with all the beauty, tension, and wonder a single day can contain.`, ['this.friendsHome'], 'where-is-the-friends-house.jpg', true);
  weekendCollection: Collection = new Collection('Weekend', 'This sensual, remarkably observed, beautifully acted wonder is the breakout feature from British writer-director-editor Andrew Haigh. Rarely has a film been as honest about sexuality—in both depiction and discussion—as this tale of a one-night stand that develops into a weekend-long idyll for two very different young men (exciting screen newcomers Tom Cullen and Chris New) in the English Midlands. It’s an emotionally naked film that’s at once an invaluable snapshot of the complexities of contemporary gay living and a universally resonant portrait of a love affair.', ['this.weekend'], 'weekend.jpg', true);
  directedByCarlosReygadasCollection: Collection = new Collection('Directed By Carlos Reygadas', 'This is a collection of films directed by Carlos Reygadas.', [], 'directed-by-carlos-reygadas.jpg', true);
  directedByNicolasRoegCollection: Collection = new Collection('Directed By Nicolas Roeg', 'This is a collection of films directed by Nicolas Roeg.', [], 'directed-by-nicolas-roeg.jpg', true);
  pagansPolicemenParentsPalazzosCollection: Collection = new Collection('Pagans! Policemen! Parents! Palazzos!', `This is a double feature of The Wicker Man and Don't Look Now`, [], 'pagans-policemen-parents-palazzos.jpg', true);

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }

}
