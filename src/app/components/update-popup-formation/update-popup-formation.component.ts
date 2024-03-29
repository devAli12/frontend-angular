import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Formation } from '../../models/formation.model';
import { FormsModule } from '@angular/forms';
import { FormationService } from '../../services/fomation.service';

@Component({
  selector: 'app-update-form-popup',
  standalone:true,
  templateUrl: './update-popup-formation.component.html',
  imports:[FormsModule],
  styleUrls: ['./update-popup-formation.component.css']
})
export class UpdateFormPopupComponent {
  @Output() closePopupEvent = new EventEmitter<void>();
  @Input () formationId=0;
   formation={
    id:0,
    titre:'',
    description:'',
    dateDebut:new Date(),
    dateFin:new Date(),
  };

  constructor( private formationService:FormationService){

  }

  loadFormations(){
    console.log(this.formationId);
    this.formationService.getFomation(this.formationId).subscribe((formation)=>{
       console.log(this.formation);
       this.formation.id=formation.id;
       this.formation.titre=formation.titre;
       this.formation.description=formation.description;
       this.formation.dateDebut=formation.dateDebut;
       this.formation.dateFin=formation.dateFin;
    })
   }

    ngOnInit(): void {
    this.loadFormations();
   }
  

  closePopup() {
    this.closePopupEvent.emit();
  }

  onUpdate(){
    console.log(this.formation);
    this.formationService.updateFormation(new Formation(this.formation.id,this.formation.titre,this.formation.description,this.formation.dateDebut,this.formation.dateFin)).subscribe(()=>{
      this.closePopup();
    })
  }
}
