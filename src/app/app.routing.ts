
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'nowplaying',
        component: NowPlayingComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);