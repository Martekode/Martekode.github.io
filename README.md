# my portfolio page
i started with my decision about what tool to use for this project; i could've used regular javascript and or php, html css but to try something new i decided to go with angular. this is going to be my first attempt at using this tool so bear with me.

## step one
* getting it online
__________________________________________________________________________
sinds i never really worked with angular, i gave myself the challenge to put it on github pages first. this proved to be harder to find than i thought. i had to change the "output-path" to "docs" and used the command: **ng buuild --output-path docs --base-href martekode.github.io**

this automatically deploys the page on github pages. BUT!! when i opened it it chowed the readme as the website. so i went into the settings on github of my repo and changed the /root to /docs and now it workes.

**now i can start working on the app...**
[Link to the site]( https://martekode.github.io/)

____________________________
added **@angular/material** and deleted the starter page already provided by angular/core. it now just gives the title and my name to begin with.

## 1
i started with my name and title of the page as stated before. after this i iported a menu module bacause i think i want to use it later.
* so:
____________________________
```
ng g c menu
```
this was to generate the component
```html
<app-menu></app-menu>
```
added it to my app.component.html file 
_______________
then i went into my component html file and copied the tags from angular material.
```html
<button class="menuBtn" mat-button [matMenuTriggerFor]="menu">Menu</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>section one</button>
  <button mat-menu-item>section 2</button>
</mat-menu>	
```
after this i had to import it to the app.module.ts file
```ts
import {MatMenuModule} from '@angular/material/menu';
@NgModule ({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
})
```
after this i also styles a bit where i implemented a dark theme background for the body #212121  and accent colors darkorchid.
