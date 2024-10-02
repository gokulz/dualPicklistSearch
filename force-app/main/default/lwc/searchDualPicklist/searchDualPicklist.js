import { LightningElement } from 'lwc';

export default class SearchDualPicklist extends LightningElement {
    selected = [];
    selectedAll = [];
    remainingAvailable = [];
    data = [{label : 'English', value : 'en'},
           {label : 'Tamil', value : 'ta'},
           {label : 'Malayalam', value: 'ma'},
           {label : 'Kannada', value:'ka'},
           {label : 'Telugu', value:'te'},
            {label : 'Hindi', value:'hi'},
            {label : 'Odia', value:'or'},
            {label : 'Bengali', value:'bn'}];
        options = this.data;

   handleChange(event){
      this.selected = event.detail.value;
      this.selectedAll = [];
      //Maintain selected values array with label and value
      this.data.forEach((element) => {
          this.selected.forEach((selectedValue)=> {
             if(element.value === selectedValue && this.selectedAll.filter(e => e.value === selectedValue.length==0)){
                this.selectedAll.push(element);
             }
          });
      })
   }
}