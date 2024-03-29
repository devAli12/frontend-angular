import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { AdhrentService } from '../../services/adhrent.service';
import { Adherent } from '../../models/Adherent.model';

@Component({
  selector: 'app-adherents',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './adherents.component.html',
  styleUrl: './adherents.component.css'
})
export class AdherentsComponent {

  @Output() closePopupEvent = new EventEmitter<void>();
  @Output() updateEvent= new EventEmitter<Adherent>();
  @Input() formationId=0;

  adherents:Adherent[]=[];

  constructor(private  adherentService:AdhrentService  ){

  }

  ngOnInit(){
   this.loadAdherents();
  }

  loadAdherents(){
    this.adherentService.getAdhrentsByFormation(this.formationId)
    .subscribe(adherents => {
       this.adherents= adherents;
    });
  }


  closePopup(){
    this.closePopupEvent.emit();
  }


  onDelete(adherentId:number){
    this.adherentService.deleteAdherentFromFormation(adherentId).subscribe(()=>{
      this.loadAdherents();
    })
  }

  onUpdate(adherent:Adherent){
    this.updateEvent.emit(adherent);
  }

}
