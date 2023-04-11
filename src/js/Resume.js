import { UniversalFunction } from "./UniversalFunction.js";

/*
Gaurav Kumar

(+91) 9039351758 | gaurav.kumar.deve@gmail.com | CLI-Portfolio | GitHub | LinkedIn | Leetcode


EDUCATION
Chandigarh University
Masters in Computer Application
Major : Cloud Computing and DevOps | Pursuing 
Mohali, Punjab
October 2022–Present

Swami Shri Swaroopanand Saraswati Mahavidyalaya
Bachelor in Computer Application | 72.7 %
Durg, Chhattisgarh
July 2017–September 2020

Kendriya Vidyalaya
12th | 66.4 %
Durg, Chhattisgarh
April 2016–March 2017

Kendriya Vidyalaya
10th | 8 CGPA
Durg, Chhattisgarh
April 2014– March 2015


PROFESSIONAL EXPERIENCE

Software Developer Intern [GitHub] [Certificate]
Dc Ikigai Pvt. Lmt. 
• Worked on Investment Adviser Project which provides best investment plans and 
advice according to the user. In this project my responsibility was to develop a 
module to get user data from user and store in SQL and perform given criteria to 
return the best Investment plan
• Web scraping for retrieving stock prices using Puppeteer. [GitHub]
• And try to implement the Web Scraping in a ChatBot. [GitHub]
Mumbai (WFH)
May 2021-August 2021


PROJECTS
• Exam Report System | Java, MySQL, NetBeans | [GitHub]
• Developed a Swing app using Java
• Use MySQL Server 8 to store data 
• Use NetBeans to design UI or app
• Blood Donation Camp Management System | Java, Oracle Database, NetBeans | [GitHub]
• Developed a Swing app using Java
• Use Oracle to store data 
• Use NetBeans to design UI or app

TECHNICAL SKILLS
• Languages: C, Java, HTML, CSS, JavaScript(Beginner), Python(Beginner)
• Database: MySQL Server, Oracle
• Developer Tools: NetBeans, VSCode, Intellij Idea, Git, GitHub

ACHIEVEMENTS AND CERTIFICATIONS
• Secure 3934 Rank in TCS Codevita International Competition [Certificate]
• Web Development [Certificate]
• Oracle Java Explore
• 1st Rank in Reliance 3D Animation and Adobe Photoshop Workshop [Certificate]
• 2nd Rank in Inter School Chess Competition 
*/
export class Resume{

    getHeader(){
        return `<div class="header"><h1>Gaurav Kumar</h1><hr>
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
                <h3>Chandigarh University</h3>  <h3>Mohali, Punjab</h3>
                <p>Masters in Computer Application</p>  <p>October 2022–Present</p>
                <p>Major : Cloud Computing and DevOps | Pursuing </p>
            </div>
            <div class="education-item">
                <h3>Swami Shri Swaroopanand Saraswati Mahavidyalaya</h3> <p>Durg, Chhattisgarh</p>
                <p>Bachelor in Computer Application | 72.7 %</p> <p>July 2017–September 2020</p>
            </div>
            <div class="education-item">
                <h3>Kendriya Vidyalaya</h3> <p>Durg, Chhattisgarh</p>
                <p>12th | 66.4 %</p> <p>April 2016–March 2017</p>
            </div>
            <div class="education-item">
                <h3>Kendriya Vidyalaya</h3> <p>Durg, Chhattisgarh</p>
                <p>10th | 8 CGPA</p> <p>April 2014– March 2015</p>
            </div>
        </div>`;
    }


    toString(){
        return `${this.getHeader()}
        ${this.getEducation()}
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output resume", this.toString());
    }
}
