export class About{
    toString(){
        return `Hi there! My name is Gaurav Kumar, and I am a MCA student currently pursuing my post-graduation from Chandigarh University.
        I have always been passionate about coding and development, and I am constantly looking for ways to improve my skills and knowledge in this field.
        I enjoy working on challenging projects and solving my daily problems using programming scripts.
        During my time in school and college, I have had the opportunity to work on a variety of projects, both individually and as part of a team. These projects have helped me develop my technical skills, as well as my ability to collaborate with others and communicate effectively.
        Some of the technologies and programming languages that I am proficient in include JAVA, C, JavaScript, SQL and I am always eager to learn more.
        When I'm not coding, I enjoy staying up-to-date with the latest trends and innovations in the tech industry by watching tech news. In my free time, I also enjoy watching movies and playing chess, as they help me unwind and relax. Another activity that I enjoy is playing Valorant with friends, as it allows me to not only have fun but also bond with others and improve my strategic skills.
        I believe that having a diverse range of interests and experiences helps me bring a unique perspective to my work.
        Thank you for taking the time to learn a little bit about me! 😊`;
    }
    
    updateDOM(){
        let output = document.createElement("div");
        output.classList.add("output");
        output.innerHTML = `<p style="white-space: pre-line;">${this.toString()}</p>`;
        let commandElements = document.getElementsByClassName("command");
        commandElements[commandElements.length - 1].appendChild(output);
    }
}