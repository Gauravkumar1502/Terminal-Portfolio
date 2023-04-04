import { UniversalFunction } from "./UniversalFunction.js";

export class About{
    toString(){
        return `<p>Hi there! My name is Gaurav Kumar, and I am a <b>MCA student</b> currently pursuing my post-graduation from <b>Chandigarh University</b>.</p>
        <p>I have always been passionate about <b>coding and development</b>, and I am constantly looking for ways to improve my skills and knowledge in this field.</p>
        <p>I enjoy working on challenging projects and solving my daily problems using programming scripts.</p>
        <p>During my time in school and college, I have had the opportunity to work on a variety of projects, both individually and as part of a team. These projects have helped me develop my technical skills, as well as my ability to collaborate with others and communicate effectively.</p>
        <p>Some of the technologies and programming languages that I am proficient in include <b>JAVA, C, JavaScript, SQL</b> and I am always eager to learn more.</p>
        <p>When I'm not coding, I enjoy staying up-to-date with the latest trends and innovations in the tech industry by watching tech news. In my free time, I also enjoy <b>watching movies</b> and <b>playing chess</b>, as they help me unwind and relax. Another activity that I enjoy is <b>playing Valorant</b> with friends, as it allows me to not only have fun but also bond with others and improve my strategic skills.</p>
        <p>I believe that having a diverse range of interests and experiences helps me bring a unique perspective to my work.</p>
        <p><b>Thank you for taking the time to learn a little bit about me! 😊</b></p>`;
    }
    
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}