import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdhrentService } from '../../services/adhrent.service';
import { Adherent } from '../../models/Adherent.model';

@Component({
  selector: 'app-add-adherent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-adherent.component.html',
  styleUrl: './add-adherent.component.css'
})
export class AddAdherentComponent {

  @Output() closePopupEvent = new EventEmitter<void>();
  @Input() formationId=0;


  constructor(private adherentService:AdhrentService){}

  adherentData={
    firstName:'',
    lastName:'',
    email:''
  }

  closePopup(){
    this.closePopupEvent.emit();
  }

   onAdd(){
    if (this.adherentData.firstName=='' || this.adherentData.lastName=='' || this.adherentData.email=='') return;
    this.adherentService.addAdherentToFormation(this.formationId,new Adherent(0,this.adherentData.firstName,this.adherentData.lastName,this.adherentData.email)).subscribe(()=>{
      this.closePopup();
    })
   }


}
