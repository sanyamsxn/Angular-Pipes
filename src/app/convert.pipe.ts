import { Pipe } from "@angular/core";

@Pipe({
    name : 'temp',
    standalone : true
})



export class TemperaturePipe{

    transform(value:string | number, inputType : 'cel' | 'fah' , outputType : 'cel' | 'fah'){
        let val : number;
        if(typeof value==='string'){
            val = parseFloat(value);
        }else{
            val = value;  
        }

        let convertedValue :number;

        if(inputType ==='cel' && outputType ==='fah'){
            convertedValue = (val * 9/5) + 32;   
        }else if(inputType ==='fah' && outputType ==='cel'){
            convertedValue = (val-32) * 5/9;
        }else{
            convertedValue =val;
        }

        let symbol:string;

        symbol = (outputType ==='fah') ? 'F' : 'C';

        return `${convertedValue} ${symbol}`;
    }
}