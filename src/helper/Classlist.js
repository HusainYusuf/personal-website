import cs110 from "../assets/cs110.png"
import cs111 from "../assets/cs111.png"
import cs210 from "../assets/cs210.png"
import cs220 from "../assets/cs220.png"
import cs230 from "../assets/cs230.png"
import cs310 from "../assets/cs310.png"
import cs320 from "../assets/cs320.png"
import cs350 from "../assets/cs350.png"
import cs410 from "../assets/cs410.png"
import cs420 from "../assets/cs420.png"
import cs430 from "../assets/cs430.png"
import cs450 from "../assets/cs450.png"
import cs453 from "../assets/cs453.png"
import cs455 from "../assets/cs455.png"
import cs465 from "../assets/cs465.png"
import cs470 from "../assets/cs470.png"
import csee380 from "../assets/CSEE 380.png"
import cpe271 from "../assets/cpe271.png"
import general from "../assets/general.png"

export const ClassList = [
       {
              name: "Intro to Computer Science",
              image: cs110,
              Description: "This will be your run of the mill 'hello world' type course. It's taught in Java and although you do unfortunately end up getting taught a bunch of miscellaneous information (how much memory does an array take when it has x many items). It does act as a great introduction java and the lab assignments are generally fun and provide you with a good base to move onto CS 111. The only main data structure taught in this course would be arrays.",
              Advice: "Please download your IDE ASAP, WVU uses Eclipse but I personally recommend VSCode. Use new  information  taught in class as soon as possible; declaring variables, creating methods, encapsulation etc... whatever you get taught try and use it on your own, it helps it stick much faster and it's mostly information you will keep using for the next 4 years. Try your best to work on the labs by yourself and get in the habit of being self-sufficient. Lastly, Google is your best friend." ,
       },

       {
              name: "Intro to Data Structures",
              image: cs111,
              Description: "This course is when things start to pick up a bit, but it's still very manageable. You will be taught all the main data structures which you'll be using for the remainder of your degree such as linked lists, array lists, sets, queues, stacks, hashmap, etc... The course does well to teach you how these data structures work and the projects/labs are extremely satisfying to complete. The one big downside of this course, in my opinion, is that it doesn't act as a good bridge to prepare you for CS 210 which is the next course you will need to take.",
              Advice: "Take your time understanding the data structures taught in this course. Learning the differences between each and what situation and figuring out which data structure is most appropriate in certain situations is an important skill. Also, make sure to pay attention in the lab, it's easy to let your GTA do all the work for you but trust me you're better off learning the information in this course than having to pick it in later courses. Finally, If you are still on the fence about majoring in CS, use this course as opportunity to solidify your choice. If you hate the work done in CS 111 you won't enjoy the major.",
       },

       {
              name: "Files and Data Structures",
              image: cs210,
              Description: "This is where things get serious. CS 210 is considered the first real \"weed out\" class in the CS major. In my opinion the main reason for this is because the transition between CS 111 and CS 210 is not really as smooth as the transition between CS 110 and CS 111. The class will essentially be coding SQL features and behaviors using Java. The class mainly consists of modules where you need to implement SQL keywords (CREATE TABLE, DROP TABLE, etc...) that need to pass a number of test cases. I believe nowadays the course is done in pairs which is way better than doing the whole thing solo, but it still is quite challenging. Oh, and you get to use GitHub for the first time in this class.",
              Advice: "Ask questions. You will most likely not be able to fix a bug or fully implement a feature by yourself so make use of your classmates, partner, and especially professor (more emphasis on the professor if it's still Reaser he's an angel and amazing at his job). Start the modules early, you might have been able to push things to last minute in the last two classes but you will almost always need more time when it comes to the assignments in CS 210. This is easily the second hardest course you will take in this major, so go easy on yourself.",
       },

       {
              name: "Discrete Mathematics",
              image: cs220,
              Description: "Honestly, I do not remember much from this course besides relgiously watching Kimberly Brehm's Discrete Math I playlist on YouTube. The general consensus is that the course is more on the difficult side, but it for me it was a matter of grinding the concepts until they just clicked and other aluminis say the same.",
              Advice: "Reaser teaches this course amazingly. The other professors are essentially the same level. This course should be treated like any other math course, keep grinding the same problems until the process of solving said questions becomes second nature. Also here's the book used for this class: https://libgen.is/book/index.php?md5=873EFF5D8FBCC13CF65B27D8E7DB955B" ,
       },

       {
              name: "Intro to Software Engineering",
              image: cs230,
              Description: "This is basically a web development class using CSS and PHP. Unfortunately you don't end up using Javascript and front-end frameworks like ReactJS but it's a good introduction to software development and other industry practices and models and can help you decide whether you want to persue that field specifically. The course is pretty easy where most of the grade is a group assignment where you need to create a web project and some quizzes based on class content. The lab when I took it was a YouTube watchalong where you just follow the GTA step-by-step and you can even end up reusing the same project for both lab and the lecture. Also, you will pretty much never use PHP and CSS again in any other course.",
              Advice: "This course is quite chill, so try to really befriend your work group. This major is hard enough on your own and having friends who will end up taking the same courses in the future would help you alot.",
       },

       {
              name: "Intro to Digital Logic Design/Digital Logic Lab",
              image: cpe271,
              Description: "The only computer engineering class you have to take as CS major. The lecture material is pretty dry (manually converting to binary/hexadecimal, logic gates, etc...) and can be quite challenging and overall, but the lab is the upside of this class. You get to work with some interesting hardware and honestly can be a great class if you were consdiering switching to computer engineering. By the way, the final CPU assignment in the lab is almost impossible but do your best to work on it.",
              Advice: "Being quite honest, I have heard most of the professors for this course aren't the greatest so your best bet is watching YouTube videos. Do your best not to skip the classes, it's very easy to stop showing up and have the content just stack up on you.",
       },


       {
              name: "Principle-Programming Language",
              image: cs310,
              Description: "This course teaches you about different programming languages. The course goes over different types of programming languages and why you might want to choose one over another. You get to work with really obscure and niche languages and are given a short period of time to work with them. The main purpose of this is to teach you how to learn just enough about a language to be able to complete the assignment.",
              Advice: "Reaser teaches this course so most likely you will be fine no matter what. Have fun with this course it is very interesting because it's pretty much the first time you get to really stray away from just using Java and for good reasons. The skill of being able to pick up a language and learning enough to complete an assignment is such a valuable skill as a programmer. Here is the book: https://libgen.is/book/index.php?md5=CFC19760745EFC1F03C4C075E6E3EDBD",
       },

       {
              name: "Analysis of Alogrithms",
              image: cs320,
              Description: "The course title is a great description for this course. You get to work with puzzles and other word problems that can be solved using programming. You can think of this course as LeetCode the Class. You learn interesting algorithms for sorting, finding mins/maxs, and merging. Big downside of this course is you will probably have to write code on paper.",
              Advice: "This course changes drastically depending on the professor teaching it so it is a bit hard to give solid advice, but most of the concepts taught can be found in this textbook: https://edutechlearners.com/download/Introduction_to_algorithms-3rd%20Edition.pdf",
       },

       {
              name: "Computer System Concepts",
              image: cs350,
              Description: "The course is advertised as an introduction to the operating systems course (CS 450), but it is just an introduction to C for the most part. Material is relatively dry and pointers in C are rather confusing especially if your first programming language was Java/Python, but it does do a good job in teaching you everything need to know.",
              Advice: "Take this course seriously. It is quite literally the only introduction you will have to C which is the language you will use for the CS 450 project which is the hardest course in the major.",
       },

       {
              name: "Engineering Professionalism Seminar",
              image: csee380,
              Description: "This is a simple seminar and I was considering not mentioning it. However, at some point during this class you will be introduced to your capstone project options and so I wanted to talk a bit about it.",
              Advice: "The lane department is one of the only departments that requires you to take two semesters of a capstone project and most people stick with the same project for both semesters so try and really consider your options. I personally did ECOcar which was a joy and I HIGHLY recommend it, but I know students who enjoyed doing independent projects on their own as well. Just keep an open mind during the presentations where they go over the options available to you. I have heard that Gernotech is a bit difficult."
       },

       {
              name: "Compiler Construction",
              image: cs410,
              Description: "I really wish I had much to say about this course, however, the professor teaching it wasn't exactly the greatest. Most students never showed up after the first few weeks and still ended up with an A. Just make sure to complete the homeworks before the due date. The two projects are relatively simple to write in Yacc & Bison, but you aren't even graded for accuracy if I am being honest.",
              Advice: "Just make sure you know what you have to submit and by what dates. This course should have been difficult but it if it is the same as when I took it then it should be an easy A.",
       },

       {
              name: "Design of Algorithms",
              image: cs420,
              Description: "I had something written down for this course, but I believe that it is no longer available",
              Advice: "N/A",
       },

       {
              name: "Advanced Software Engineering",
              image: cs430,
              Description: "A follow up to CS 230, you get a deeper look into more industry practices focusing more on agile development and producing scalable & modular code. Basically CS 230 but a bit harder and you have more freedom in creating your project as you should be more skilled by this point",
              Advice: "Go wild with the project idea. My group created a university chatbot app that helped new students at WVU! Be careful with overpromising and underdelivering however as it is quite easy for that to happen with this course. Decide on the project idea early on and STICK WITH IT. Make sure you and your groupmates are equally passionate about the project or it won't progress much.",
       },

       {
              name: "Operating Systems Structure",
              image: cs450,
              Description: "This is easily the most challenging course in the entire major. Professor Hayhurst will likely still be teaching the course and she will introduce it by informing you that students on their final semester failed and had to retake the course. However, it is not as bad as you think. The course load is divided 40% into exams/quizzes/homework which are relatively easy and should be free points for the most part. The remaining 60% comes from the OS project which will be divided into 6 modules and that is where most of your efforts should be focused.",
              Advice: "Especially for this class, make sure your 3 other groupmates are competent, you will suffer if even one member slacks off. The GTA is your best friend, contact them as much as possible and try to schedule time with them early on as the other groups will likely do the same. Prepare for the worse with R6 and do try and gain as much bonus points as you can. Study for the oral exam with your group by going through every file modified/created and reading the code line-by-line ensuring everyone knows what everything does.",
       },

       {
              name: "Data/Computer Communications",
              image: cs453,
              Description: "This is WVU's idea of a networking class. I personally found the content dull but that was because I inherently find network classes boring. The homework assignments as well as lab assignments usually have completed exams that you can find and follow so solving them is relatively simple.",
              Advice: "It is very easy to get wrong answers on some of the assignments, so talking about your work with classmates would be the move, as long as, no academic integrity violations occur."
       },

       {
              name: "Computer Architecture",
              image: cs455,
              Description: "Honestly, I don't remember much about the class besides that it was a really easy class soooo....free A I guess?",
              Advice: "Take it easy lol",
       },

       {
              name: "Cybersecurity Principle & Practices",
              image: cs465,
              Description: "Introduction to cybersecurity! I honestly wished this was a 200 or 300 level class as it would give students an incentive to emphasize in cybersecurity much sooner. You learn a lot of interesting ways to hash and hide data and the assignments are really satisfying to complete. Often times during class we got story times about security breaches which was really entertaining 10/10 class. You get a cheatsheet for the exams!",
              Advice: "For the love of god do the assignments in Python. Java and C will make you hate yourself.",
       },
       {
              name: "Introduction to Computer Graphics",
              image: cs470,
              Description: "This class was very informative, but honestly I was a bit dissapointed with the projects. You get to use Blender for maybe 3 weeks total and then you just end up using OpenGL for the remainder of the semester which isn't a technology that really gets used in the real world. I really wanted to gain industry-relevant experience in this course so I was a bit let down.",
              Advice: "The assignments ALWAYS take longer than you would think, so start early. Also do not get thrown off by the simplicity of the first 1-3 projects, the difficuly ramps up exponentially after/during midterms.",
       },

       {
              name: "General Advice",
              image: general,
              Description: "This is just a section where I wanted to talk about advice I would give students who are starting/early on in their university life.",
              Advice: "Befriend people quickly. Groups form really fast and take it from someone who lost out on the grace period for making friends because of COVID. Once you are not in these friend groups it is hard to break into them. Start LeetCoding as soon as possible, if possible after CS 110, but no later than CS 210. Starting early will put ahead of the curve for when you are applying for internships/jobs. If you couldn't/didn't find an internship that's fine! Just make sure to use up that free time by creating meaningful independent projects and deploying them. Networking is a bigger deal than you would ever imagine, it's the difference between having your resume be filtered out by AI and reaching a human that will give you that first round interview. DO NOT CHEAT, it's not worth it, and you will reach a point where you will actually need to know what you are doing when it comes to developing so you might as well learn that sooner than later. That being said, understand that this major is all abost collaboration and standing on the shoulders of giants, you should be able to Google your problems effectively, that makes the biggest difference between a decent and a great developer. Also, no AI will not take over your job... not now at least."
       }
]