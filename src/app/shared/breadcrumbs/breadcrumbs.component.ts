import { Router, ActivationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  )  {
    this.getDataRoute()
    .subscribe( data => {


        this.label = data.titulo;
        this.title.setTitle(this.label);
        let metatag: MetaDefinition = {
          name: 'description',
          content: this.label

        };
        this.meta.updateTag(metatag);
    });
  }


  getDataRoute() {
    return this.router.events
    .filter( evento => evento instanceof ActivationEnd )
    .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
    .map( (evento: ActivationEnd) => evento.snapshot.data );
  }

  ngOnInit() {
  }

}
