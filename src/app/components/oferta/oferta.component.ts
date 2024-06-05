import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Freelance, freelances } from '../../../freelances-example';
import { FreelanceCardComponent } from "../freelance-card/freelance-card.component";

@Component({
    selector: 'app-oferta',
    standalone: true,
    templateUrl: './oferta.component.html',
    styleUrl: './oferta.component.css',
    imports: [CommonModule, FreelanceCardComponent]
})
export class OfertaComponent implements OnInit {
  freelance: Freelance | undefined;


  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const freelanceIdFromRoute = Number(routeParams.get('freelanceId'));

    // Find the freelance that correspond with the id provided in route.
    this.freelance = freelances.find(freelance => freelance.id === freelanceIdFromRoute);
  }
}
