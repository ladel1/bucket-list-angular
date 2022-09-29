import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wish } from 'src/app/models/wish';
import { CensorService } from 'src/app/services/censor.service';
import { FieldValidatorService } from 'src/app/services/field-validator.service';

@Component({
  selector: 'app-ajouter-wish',
  templateUrl: './ajouter-wish.component.html',
  styleUrls: ['./ajouter-wish.component.css']
})
export class AjouterWishComponent implements OnInit {

  @Input() wishes:Wish[] = [];
  wishForm:FormGroup;
  error:any="";

  constructor(
    private formBuilder:FormBuilder,
    public fieldValidator:FieldValidatorService,
    private censor:CensorService,
  ) {// ???
      this.wishForm = this.formBuilder.group({
        title:['',Validators.required],
        description:['',Validators.required],
        author:['',Validators.required]
      });
   }

  ngOnInit(): void {
  }

  addWish(){    
    if(!this.fieldValidator.isValidForm(this.wishForm)){ 
      var wish = {...this.wishForm.value,'isPublished':true,'dateCreated':new Date()};
      Object.setPrototypeOf(wish,Wish.prototype);      
      wish.setTitle(this.censor.filtre(wish.getTitle()));
      
      wish.setDescription(this.censor.filtre(wish.getDescription()));
      this.wishes.push(wish);
    }
  }

  isTrouble(field:string):boolean{
    try{
      this.fieldValidator.control(field,this.wishForm);
      return false
    }catch(e){
      this.error = e;
      return true;
    }
  }



}
