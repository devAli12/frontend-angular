import { Component, ElementRef, ViewChild } from '@angular/core';
import { Formation } from '../../models/formation.model';
import { FormationService } from '../../services/fomation.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import notify from 'devextreme/ui/notify';
import { DxButtonModule } from 'devextreme-angular';

import { UpdateFormPopupComponent } from '../update-popup-formation/update-popup-formation.component';
import { AdherentsComponent } from '../adherents/adherents.component';
import { AddAdherentComponent } from '../add-adherent/add-adherent.component';
import { AdherentUpdatedPopupComponent } from '../adherent-updated-popup/adherent-updated-popup.component';
import { Adherent } from '../../models/Adherent.model';
import { AdhrentService } from '../../services/adhrent.service';


@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule,FormsModule,UpdateFormPopupComponent,AdherentsComponent,AddAdherentComponent,AdherentUpdatedPopupComponent,DxButtonModule],
  providers:[],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {

  formations :Formation[]=[];
  selectedItems: number[] = [];
  showAddForm=false;
  searchText="";
  selectedFormationId=0;
  showPopupAdhrents=false;
  selectedViewFormationId=0;
  selectedAddFormationId=0;
  showPopupUpdateAdhrent=false;
  showPopupAddAdhrent=false;
  @ViewChild('scrollTarget') scrollTarget: ElementRef|undefined;

  constructor(private  formationService : FormationService,private router:Router,private adherentService:AdhrentService){
  }


  toggleSelection(id:number,event:any) {
     if(event.target.checked){
      this.selectedItems.push(id);
     }else {
        let index = this.selectedItems.indexOf(id);
        if (index !== -1) {
            this.selectedItems.splice(index, 1);
        }
      }
      console.log(this.selectedItems);

    }

  ngOnInit(): void {
   this.loadFormations();
  }

  scrollDown() {
    this.showAddForm=true;
    // this.scrollTarget?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    setTimeout(() => {
        this.scrollTarget?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
  }
  

  loadFormations(){
    this.formationService.getFomations()
    .subscribe(formations => {
      this.formations = formations;
    });
  }

  

     onDelete(id:number){
        this.formationService.deleteFormation(id).subscribe(()=>{
          this.loadFormations();
        })
      }

      onDeleteSelected(){
        if(this.selectedItems.length==0) return;
        this.formationService.deleteSelected(this.selectedItems).subscribe(()=>{
          this.loadFormations();
        })
      }
   
    


  onCreate(titre:string,description:string,dateDebut:string,dateFin:string){
    // console.log(titre,description,dateDebut,dateFin);
    this.formationService.createFormation(new Formation(0,titre,description,new Date(dateDebut),new Date(dateFin))).subscribe(()=>{
      this.loadFormations();
      this.showAddForm=false;
      this.showMessage();
    });
  }

  navigateToDetails(id:number){
    this.router.navigate(['/details', id]);
  }


  onSearch(){
    console.log(this.searchText);
     if(this.searchText=='') this.loadFormations();
     else 
     this.formationService.search(this.searchText).subscribe((formations)=>{
        this.formations=formations;
     })
  }

  onDeleteAll(){
    this.formationService.deleteAll().subscribe(()=>{
      this.loadFormations();
    })
  }

  showPopup: boolean = false;

  togglePopup(formationId:number) {
    this.selectedFormationId=formationId;
    this.showPopup = !this.showPopup;
  }

  closePopup(){
    this.showPopup=false;
  }

  closePopupAdhrents(){
    this.showPopupAdhrents=false;
  }
  closePopupAddAdhrent(){
    this.showPopupAddAdhrent=false;
  }

  closePopupUpdatedAdherent(){
    this.showPopupUpdateAdhrent=false;
  }

  togglePopupUpdateAdherent(){
    this.showPopupUpdateAdhrent=!this.showPopupUpdateAdhrent;
  }

  togglePopupAdherents(formationId:number){
    this.selectedViewFormationId=formationId;
    this.showPopupAdhrents=!this.showPopupAdhrents;
  }

  togglePopupAddAdherent(formationId:number){
    this.selectedAddFormationId=formationId;
    this.showPopupAddAdhrent=!this.showPopupAddAdhrent;
  }

  /* updated adherent*/
  updatedAdherent:any;

  onUpdateAdherent(adherent:Adherent){
    this.updatedAdherent=adherent;
    this.togglePopupUpdateAdherent();
  }


  showMessage() {
    notify(
        {
            message: "formation was created", 
            width: 230,
            position: {
                at: "top",
                my: "top",
                of: "#container"
            }
        }, 
    );
}
}
