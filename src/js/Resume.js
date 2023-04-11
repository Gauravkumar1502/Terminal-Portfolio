import { UniversalFunction } from "./UniversalFunction.js";

export class Resume{

    getHeader(){
        return `<div class="header">
        <h1>Gaurav Kumar</h1><hr>
        <p>
            <span><a href="tel:+919039351758">(+91) 9039351758</a> | </span>
            <span><a href="mailto:gaurav.kumar.deve@gmail.com">gaurav.kumar.deve@gmail.com</a> | </span>
            <span><a href="https://gauravkumar1502.github.io/Terminal-Portfolio/" target="_blank">CLI-Portfolio</a> | </span>
            <span><a href="https://github.com/Gauravkumar1502" target="_blank">GitHub</a> | </span>
            <span><a href="https://www.linkedin.com/in/gaurav-kumar-1518281a4/" target="_blank">LinkedIn</a> | </span>
            <span><a href="https://leetcode.com/GauravKumar15/" target="_blank">Leetcode</a></span>
        </p><hr>
        </div>`;
    }

    getEducation(){
        return `<div class="education">
            <div>
                <h2>EDUCATION</h2><hr>
            </div>
            <div class="education-item">
                <strong>Chandigarh University</strong>  <strong>Mohali, Punjab</strong>
                <p>Masters in Computer Application</p>  <p>October 2022–Present</p>
                <p>Major : Cloud Computing and DevOps | Pursuing </p>
            </div>
            <div class="education-item">
                <strong>Swami Shri Swaroopanand Saraswati Mahavidyalaya</strong> <strong>Durg, Chhattisgarh</strong>
                <p>Bachelor in Computer Application | 72.7 %</p> <p>July 2017–September 2020</p>
            </div>
            <div class="education-item">
                <strong>Kendriya Vidyalaya</strong> <strong>Durg, Chhattisgarh</strong>
                <p>12th | 66.4 %</p> <p>April 2016–March 2017</p>
            </div>
            <div class="education-item">
                <strong>Kendriya Vidyalaya</strong> <strong>Durg, Chhattisgarh</strong>
                <p>10th | 8 CGPA</p> <p>April 2014– March 2015</p>
            </div>
        </div>`;
    }

    getProfessionalExperience(){
        return `<div class="professional-experience">
            <div>
                <h2>PROFESSIONAL EXPERIENCE</h2><hr>
            </div>
            <div class="professional-experience-item">
                <strong>
                    Software Developer Intern 
                    <a href="https://github.com/Gauravkumar1502/DCIPL-SERVER" target="_blank">[GitHub]</a> 
                    <a href="https://drive.google.com/file/d/1ASF2FyjKZIxI896C7hCeIMmnsIAeH3ZM/view?usp=share_link" target="_blank">[Certificate]</a></strong> 
                <strong>Mumbai (WFH)</strong>
                <p>Dc Ikigai Pvt. Lmt. </p> <p>May 2021-August 2021</p>
                <ul>
                    <li>Worked on <strong>Investment Adviser</strong> Project which provides best investment plans and advice according to the user. 
                        In this project my responsibility was to develop a module to get user data from user and store in <strong>SQL</strong> and perform given criteria to return the best Investment plan</li>
                    <li>
                        <strong>Web scraping</strong> for retrieving stock prices using <strong>Puppeteer</strong>.
                        <a href="https://github.com/Gauravkumar1502/StockPriceScraping" target="_blank">[GitHub]</a>
                    </li>
                    <li>
                        And implement the <strong>Web Scraping in a ChatBot</strong>. 
                        <a href="https://github.com/Gauravkumar1502/Stock-WebScraping-and-AI-ChatBot" target="_blank">[GitHub]</a>
                    </li>
                </ul>
            </div>
        </div>`;
    }

    getProjects(){
        return `<div class="projects">
            <div>
                <h2>PROJECTS</h2><hr>
            </div>
            <div class="projects-item">
                <strong>Personal Terminal Portfolio | HTML, CSS, JavaScript | 
                    <a href="https://github.com/Gauravkumar1502/Terminal-Portfolio" target="_blank">[GitHub]</a>
                </strong>
                <ul>                  
                    <li>Created this <strong>Personal Terminal-Inspired Portfolio</strong> to demonstrate my proficiency in <strong>backend development</strong>.</li>
                    <li>Used <strong>Local Storage</strong> to store list of commands.</li> 
                    <li>Used <strong>Git and GitHub</strong> for version control.</li>
                    <li>Deployed the application on <strong>GitHub Pages</strong>.</li>
                </ul>
            </div>
            <div class="projects-item">
                <strong>Exam Report System | Java, MySQL, NetBeans | 
                    <a href="https://github.com/Gauravkumar1502/JavaSwing/tree/main/JavaSwing/JavaGRProject" target="_blank">[GitHub]</a>
                </strong>
                <ul>
                    <li>Created a system for generating and managing exam reports.</li>
                    <li>Developed a <strong>Swing</strong> application using <strong>Java</strong>.</li>
                    <li>Designed the user interface (UI) using NetBeans.</li>
                    <li>Stored data using MySQL Server 8.</li>
                </ul>
            </div>
            <div class="projects-item">
                <strong>Blood Donation Camp Management System | Java, Oracle Database, NetBeans |
                    <a href="https://github.com/Gauravkumar1502/JavaSwing/tree/main/JavaSwing/Blood_Donation" target="_blank">[GitHub]</a>
                </strong>
                <ul>
                    <li>Created a system for managing blood donation camps.</li>
                    <li>Developed a <strong>Swing</strong> application using <strong>Java</strong>.</li>
                    <li>Designed the UI using <strong>NetBeans</strong>.</li>
                    <li>Stored data using <strong>Oracle Database</strong>.</li>
                </ul>
            </div>
        </div>`;
    }
    
    getSkills(){
        return `<div class="skills">
            <div>
                <h2>TECHNICAL SKILLS</h2><hr>
            </div>
            <ul>
                <li><strong>Programming</strong> Languages :</strong> C, Java, HTML, CSS, Python(Intermediate), JavaScript(Intermediate)</li>
                <li><strong>Frameworks :</strong> Spring</li>
                <li><strong>Database :</strong> MySQL, Oracle Database</li>
                <li><strong>Developer Tools :</strong> Git, GitHub, VS Code, NetBeans, IntelliJ IDEA </li>
                <li><strong>Operating Systems :</strong> Windows, Linux</li>
            </ul>
        </div>`;
    }

    getAchievementsAndCertifications(){
        return `<div class="achievements-and-certifications">
            <div>
                <h2>ACHIEVEMENTS AND CERTIFICATIONS</h2><hr>
            </div>
            <ul>
                <li>
                    Secured 3934th Rank in <strong>TCS CodeVita International Coding Contest</strong> May 2022.
                    <a href="https://drive.google.com/file/d/1QsAluBTDIjqz-adsVrdxXZDmQzxVgWxK/view" target="_blank">[Certificate]</a>
                </li>
                <li>Web Development. <a href="https://drive.google.com/file/d/1m1c7mE9YeFe5uUCQIFHKLxq2R3Yd5ibM/view" target="_blank">[Certificate]</a></li>
                <li>Oracle Java Explore.</li>
                <li>
                    1st Rank in Reliance <strong>3D Animation and Adobe Photoshop Workshop</strong>. 
                    <a href="https://drive.google.com/file/d/16WeSdS6W-59s8lSxW6T4jJG1Q-wySQB3/view" target="_blank">[Certificate]</a>
                </li>
                <li>2nd Rank in Inter School <strong>Chess Competition</strong>.</li>
            </ul>
        </div>`;
    }

    toString(){
        return `${this.getHeader()}
        ${this.getEducation()}
        ${this.getProfessionalExperience()}
        ${this.getProjects()}
        ${this.getSkills()}
        ${this.getAchievementsAndCertifications()}
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output resume", this.toString());
    }
}
