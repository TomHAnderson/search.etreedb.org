import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({
  moduleId: 'module.id',
  template: ''
})

export class UrlComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute
    )
    { }

    ngOnInit(): void {
        alert(this.route.params['url']);
        this.router.navigateByUrl(this.route.params['url']);
    }
}