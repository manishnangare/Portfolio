document.addEventListener('DOMContentLoaded', () => {

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const circle = document.querySelector('.customCursor'); // Use querySelector
    const circle2 = document.querySelector('.customCursor2');
    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX + window.scrollX - 10;
        const mouseY = event.clientY + window.scrollY - 10;

        if (circle && circle2) { // Check if the element exists

            circle.style.left = `${mouseX}px`;
            circle.style.top = `${mouseY}px`;
            circle2.style.left = `${mouseX - 15}px`;
            circle2.style.top = `${mouseY - 15}px`;

        }
    });


    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        const currentScrollY = window.scrollY;

        if (currentScrollY >= lastScrollY && currentScrollY > 10) {
            // Scrolling down
            navbar.style.top = '-100px'; // Hide the navbar
        }
        else {
            // Scrolling up
            navbar.style.top = '0'; // Show the navbar
        }

        lastScrollY = currentScrollY;
    });


    const parallax_el = document.querySelectorAll('.parallax');

    let xValue = 0,
        yValue = 0;

    function update(cursorPosition)
    {
        parallax_el.forEach((el) => {
            let rotateDegreeY =   (xValue/(window.innerWidth/2)) * 10;
            let rotateDegreeX = (yValue/(window.innerHeight/2)) * 10;
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;
            let cursorOnLeft  = parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1; //Compute whether cursor is on the left or right side.
            let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * cursorOnLeft * 0.03; //gets the distance from the cursor to the object.

            el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px))  translateY(calc(-50% + ${yValue * speedy}px)) 
            perspective(2000px) translateZ(${zValue* speedz}px) rotateY(calc(${rotateDegreeY * speedz}deg))
            rotateX(calc(${rotateDegreeX * speedz}deg))`;
            //Perspective give the depth of the z-axis from the screen
        });
    }
    update(0);
    window.addEventListener("mousemove", (e)=> {
        //if(timeline.isActive()) return;
        xValue = e.clientX - window.innerWidth/2;
        yValue = e.clientY - window.innerHeight/2;
        update(xValue);
    });

    //Initializing all the elements required in the body.
    const logo = document.getElementsByClassName('logo');
    const aboutLink = document.getElementById('aboutLink');
    const skillsLink = document.getElementById('skillsLink');
    const educationLink = document.getElementById('educationLink');
    const aboutMeWindow = document.getElementsByClassName("aboutMe");
    const infoWindow = document.getElementsByClassName("info");
    const aboutImage = document.getElementsByClassName('aboutImage');
    const helloText = document.getElementById('helloPrint');
    const downArrow = document.getElementsByClassName('downArrow');
    const educationWindow = document.getElementsByClassName('education');
    const skills = document.getElementsByClassName('skills');
    const education = document.getElementsByClassName('education');
    const home = document.getElementById('home');


    // Adding onclick events to the navbar buttons.

    logo[0].addEventListener('click', () => {
       home.scrollIntoView({behavior:"smooth" , block:"start", inline:"start"});

    });

    aboutLink.addEventListener('click', () => {
       infoWindow[0].scrollIntoView({behavior:"smooth" , block:"start", inline:"start"});

    });

    skillsLink.addEventListener('click', () => {
       skills[0].scrollIntoView({behavior:"smooth" , block:"start", inline:"start"});

    });

    educationLink.addEventListener('click', () => {
       education[0].scrollIntoView({behavior:"smooth" , block:"start", inline:"start"});
    });


    aboutMeWindow[0].addEventListener('mouseover', () => {
           aboutMeWindow[0].style.backgroundColor = '#ffffff';
           aboutMeWindow[0].style.color="black";
           infoWindow[0].style.backgroundColor = 'black';
           aboutImage[0].style.transform= 'translateY(-25vh)';
           helloText.style.color = '#ffffff';
           aboutImage[0].style.border = "#333333 20px solid";
           aboutImage[0].style.filter = "grayscale(50%)";
        });

        aboutMeWindow[0].addEventListener('mouseout', () => {
           aboutMeWindow[0].style.backgroundColor = 'black';
           aboutMeWindow[0].style.color="#ffffff";
           infoWindow[0].style.backgroundColor = '#ffffff';
           aboutImage[0].style.left = '60vw';
           aboutImage[0].style.transform= 'translateY(0)';
           helloText.style.color = 'black';
           aboutImage[0].style.border = "black 20px solid";
           aboutImage[0].style.filter = "grayscale(80%)";



        });

    downArrow[0].addEventListener('click', () => {
        educationWindow[0].scrollIntoView( {behavior:"smooth", block:"start", inline:"start"});
    });



});
