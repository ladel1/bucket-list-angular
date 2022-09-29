import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CensorService } from './censor.service';

@Injectable({
  providedIn: 'root'
})
export class FieldValidatorService {

  constructor(
    private censor:CensorService
  ) { }

  public isValid(fieldName:string,form:FormGroup){
    return form.controls[fieldName].invalid && (
      form.controls[fieldName].dirty || 
      form.controls[fieldName].touched
    );// code erreur 2000
    // gors mots 3000
  }

  public isValidForm(form:FormGroup):boolean{
    for( let field in form.controls){
      if( form.controls[field].invalid == true){
          return true;
        }      
    }
    return false;
  }


  public control(fieldName:string,form:FormGroup){
    if(form.controls[fieldName].invalid && (
      form.controls[fieldName].dirty || 
      form.controls[fieldName].touched
    )){
       throw "Le champs "+fieldName+" est obligatoire";
    }
    if(this.censor.isContainsBadWord(form.value[fieldName])){
       throw "Le champs "+fieldName+" contient des gros mots :( ";
    }
  }

}
