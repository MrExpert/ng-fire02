import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
  } from 'angularfire2/firestore';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';

  @Component({
    selector: 'app-book-info',
    templateUrl: './book-info.component.html',
    styleUrls: ['./book-info.component.scss']
    })

export class BookInfoComponent implements OnInit {

constructor (private afs: AngularFirestore ) {}

        booksCollection: AngularFirestoreCollection<Book>;
        booksObservable: Observable <any>;

    ngOnInit() {
        this.booksCollection = this.afs.collection('books');
        this.booksObservable = this.booksCollection.snapshotChanges()
            .pipe(map(arr => { return arr.map(snap => {
                const id = snap.payload.doc.id;
                const data = snap.payload.doc.data;
                    return {id, ...data};
            });
        }));

this.booksCollection.add(data1);
        }

    }

    const data1 = {
        author: 'John Miller',
        title: ' Travel Guide',
        content: '2018' ,
    };

export interface Book {
        author: string;
        title: string;
        content: string;
}
