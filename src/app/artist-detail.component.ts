import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artist } from './schema/artist';
import { ArtistService } from './schema/artist.service';

@Component ({
  moduleId: 'module.id',
  templateUrl: './template/artist-detail.component.html',
  providers: [ ArtistService ]
})

export class ArtistDetailComponent implements OnInit {
    artist: Artist;

    constructor (
        private artistService: ArtistService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.artistService.find( +params['id']))
        .subscribe(artist => this.artist = artist);
    }
}