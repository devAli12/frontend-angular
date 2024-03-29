import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Adherent } from '../../models/Adherent.model';
import { AdhrentService } from '../../services/adhrent.service';

@Component({
  selector: 'app-adherent-updated-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adherent-updated-popup.component.html',
  styleUrl: './adherent-updated-popup.component.css'
})
export class AdherentUpdatedPopupComponent {
  @Output() closePopupEvent = new EventEmitter<void>();
  @Input() updatedAdherent:any; 



  constructor(private adherentService:AdhrentService){}

  adherentData={
    id:0,
    firstName:'',
    lastName:'',
    email:''
  };

  ngOnInit(){
    this.adherentData.firstName=this.updatedAdherent.firstName;
    this.adherentData.lastName=this.updatedAdherent.lastName;
    this.adherentData.email=this.updatedAdherent.email;
    this.adherentData.id=this.updatedAdherent.id;
    console.log(this.updatedAdherent);
  }


  closePopup(){
    this.closePopupEvent.emit();
  }

  onUpdate(){
    console.log(this.adherentData);
    this.adherentService.updateAdherent(this.adherentData,this.adherentData.id).subscribe((error)=>{
      this.closePopup();
    })

  }
 

}
