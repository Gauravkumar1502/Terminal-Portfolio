export class Theme{
    constructor(options){
        // options is an array of flags and values passed to the theme command 
        // like --name dark-forest OR --name dark-forest --list OR --help
        this.options = options;
        this.listOfThemes = ["dark-forest", "dark-ocean", "dark-space", "dark-night", 
        "dark-cave", "dark-sea", "light-vanilla", "light-haze", "light-day", "light-sky"];
        this.error = "";
        this.output = "";
        this.cmd = this.parseCommand();
    }

    parseCommand(){
        let parts = this.options.split(" ");
        if(parts.length > 2) {
            this.error = `theme: too many arguments.
            type 'theme --help' for help.`;
            return;            
        }
        if(this.options == ""){
            this.list();
            return;
        }
        switch(parts[0]){
            case "--name":
                this.setTheme(parts[1]);
                break;
            case "--list":
                this.list();
                break;
            case "--help":
                this.help();
                break;
            default:
                this.error = `theme: '${parts[0]}' is not a valid argument.
                type 'theme --help' for help.`;
                break;
        }
    }

    setTheme(theme){
        if(this.listOfThemes.includes(theme)){
            document.querySelector("body").className = theme;
            this.output = `theme: theme set to ${theme}`;
        }else{
            this.error = `theme: '${theme}' is not a valid theme.
            type 'theme --list' to see the list of themes.`;
        }
    }

    list(){
        // list all the themes with new line
        this.output = `theme: list of themes:
        ${this.listOfThemes.join("/n")}`;
    }

}

