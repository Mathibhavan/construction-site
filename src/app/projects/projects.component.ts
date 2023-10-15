import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 imageURL=[
  {name:'Madipakkam',image:'assets/Site1.jpeg'},
 {name:'Palavaram',image:'assets/Site2.jpeg'},
 {name:'Choolaimedu',image:'assets/Site3.jpeg'},
 {name:'Guidy',image:'assets/Site4.jpeg'},
 {name:'Thoraipakkam',image:'assets/Site5.jpeg'},
 {name:'Peruganlathur',image:'assets/Site6.jpeg'}
]
projects=[{no:'1',prj:'Hotel Sun N Sea',cost:'5 Crores(40,000 Sq.ft)', time:'9-Months'},
{no:'2',prj:'Zuari Fertilizer',cost:'28 Crores(1,19,000 Sq.ft)', time:'18-Months'},
{no:'3',prj:'Matrix Laboratory',cost:'9 Crores(89,000 Sq.ft)', time:'12-Months'},
{no:'4',prj:'Titan Laboratory',cost:'32 Crores(1,55,000 Sq.ft)', time:'22-Months'},
{no:'5',prj:'Cipla Limited',cost:'55 Crores(1,90,000 Sq.ft)', time:'34-Months'},]


}
