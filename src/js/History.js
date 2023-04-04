export class History{
    constructor(){
        this.history = [];
        this.index = 0;
    }

    add(command){
        this.history.push(command);
        this.index++;
    }

    up(){
        if(this.index > 0){
            document.getElementById("command_input").value =(this.history[--this.index]);
        }
    }

    down(){
        if(this.index < this.history.length-1){
            document.getElementById("command_input").value =(this.history[++this.index]);
        }
    }
}