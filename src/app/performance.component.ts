import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PerformanceService } from './schema/performance.service';
import { Collection } from './schema/collection';

@Component ({
  moduleId: 'module.id',
  templateUrl: './template/performance.component.html',
  providers: [ PerformanceService ]
})

export class PerformanceComponent {
    performance: Performance[];

    constructor (
        private performanceService: PerformanceService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }
}