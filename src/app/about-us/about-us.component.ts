import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
resources=[
{no:'4',staff:'Project Co-ordinator',qualification:'B.E. Civil',exp:'18-23 Yrs Industrial'},
{no:'13',staff:'Project Manager',qualification:'B.E. Civil/DCE Civil',exp:'15-20 Yrs Industrial'},
{no:'18',staff:'Sr.Site Engineer',qualification:'B.E. Civil/DCE',exp:'10-12 Yrs Industrial'},
{no:'30',staff:'Assistant Engineer',qualification:'Graduate',exp:'8-10 Yrs Industrial'},
{no:'28',staff:'Site Supervisor',qualification:'B.E Civil',exp:'15-20 Yrs Industrial'},
{no:'8',staff:'QA/QC Engineer',qualification:'B.E Civil',exp:'12-15 Yrs Industrial'},
{no:'10',staff:'Safety Manager/Officer',qualification:'Safety Course/ Safety Graduate',exp:'10-15 Yrs Industrial'}];

chart=[{title:'CEO',name:'John Kenady'},
{title:'CFO',name:'Clara Clinton'},
{title:'CTO',name:'Ema Joseph'},
{title:'Project Co-ordinator',name:'Erica Fernandas'},
{title:'Project Manager',name:'Jose George'},
{title:'Sr.Site Engineer',name:'Jennifer Windegt'},
{title:'Assistant Engineer',name:'Mark Thomas'},
{title:'Site Supervisor',name:'Linda Petricia'},
{title:'QA/QC Engineer',name:'Agnel Benita'},]

checkbox=[{check:'ISO 9001:2021 Certified Company'},
{check:'Service TAX'},
{check:'VAT/ CST Registration'},
{check:'GST Registration'},
{check:'Professional Tax'},
{check:'Workmens Compensation Insurance'},]
}
