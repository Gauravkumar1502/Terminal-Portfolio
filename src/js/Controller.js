import {Theme} from "./Theme.js";

const commands = [
    { name: 'help', description: 'You are here already and you obviously know what this does. 🤔' },
    { name: 'about', description: 'Display information about me. 👨‍💻' },
    { name: 'whoami', description: 'The paradox of "Who am I?" is: we never know, but, we constantly find out. 🤔' },
    { name: 'clear', description: 'Clear the terminal. 🧹' },
    { name: 'theme', description: 'Change the theme of the terminal.', options: [
        { option: '--name [theme-name]', description: 'Change the theme to the given theme name.' },
        { option: '--list', description: 'List all the themes.' }]
    },
    { name: 'connect', description: 'Display all the social networks. 📱', options: [
        {  option: '--goto [social-network]', description: 'Go to the given social network.' },
        {  option: '--list', description: 'List all the social networks.' }]
    },
    { name: 'contact', description: 'Display contact information. 📞', options: [
        {  option: '--goto [contact-method]', description: 'Go to the given contact method.' },
        {  option: '--list', description: 'List all the contact methods.' }]
    },
    { name: 'skills', description: 'Display skills. 👨‍💻'},
    { name: 'projects', description: 'Display projects. 👨‍💻' },
    { name: 'resume', description: 'Display resume. 📄', options: [
        {option: '--download', description: 'Download the resume. 📥'}]
    },
    { name: 'education', description: 'Display education. 👨‍🎓' },
    { name: 'experience', description: 'Display experience. 👨‍💼' },
    { name: 'certifications', description: 'Display certifications. 🏆' },
    { name: 'awards', description: 'Display awards. 🏆' },
    { name: 'game', description: 'Display available games. 🎮', options: [
        {option: '--play <game-name>', description: 'Play the given game.'},
        {option: '--list', description: 'List all the games.'}]
    }
];

const aboutme = `<p style="white-space: pre-line;">Hi there! My name is Gaurav Kumar, and I am a MCA student currently pursuing my post-graduation from Chandigarh University.
I have always been passionate about coding and development, and I am constantly looking for ways to improve my skills and knowledge in this field.
I enjoy working on challenging projects and solving my daily problems using programming scripts.
During my time in school and college, I have had the opportunity to work on a variety of projects, both individually and as part of a team. These projects have helped me develop my technical skills, as well as my ability to collaborate with others and communicate effectively.
Some of the technologies and programming languages that I am proficient in include JAVA, C, JavaScript, SQL and I am always eager to learn more.
When I'm not coding, I enjoy staying up-to-date with the latest trends and innovations in the tech industry by watching tech news. In my free time, I also enjoy watching movies and playing chess, as they help me unwind and relax. Another activity that I enjoy is playing Valorant with friends, as it allows me to not only have fun but also bond with others and improve my strategic skills.
I believe that having a diverse range of interests and experiences helps me bring a unique perspective to my work.
Thank you for taking the time to learn a little bit about me! 😊</p>`;



export class Controller{
    constructor(InputedCommand){
        this.InputedCommand = InputedCommand;
        this.error = "";
        this.output = "";
        this.parseCommand();
    }

    parseCommand(){
        let cmd = this.InputedCommand.split(" ")[0].toLowerCase();
        switch(cmd){
            case "help":
                this.output = this.helpOutput(commands);
                break;
            case "about":
                this.output = aboutme;
                break;
            case "theme":
                console.log("theme" + this.InputedCommand.substring(cmd.length).trim().toLowerCase());
                let theme = new Theme(this.InputedCommand.substring(cmd.length).trim().toLowerCase());
                this.error = theme.error;
                this.output = theme.output;
                break;
            case "clear":
                document.querySelector(".terminal").innerHTML = "";
                break;
            default:
                this.error = `${cmd}: The term '${cmd}' is not recognized as a name of a command. \n type 'help' to see the list of commands.`;
                break;
        }
    }

    helpOutput(commands) {
        return commands.map(command => `<p class="help-out"> <span class='keyword'>${command.name}
            </span><span>${command.description}</span></p>`).join("");
      }
      
}