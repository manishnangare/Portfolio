document.addEventListener('DOMContentLoaded', () => {    
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
    
    /*implementing the start animation using gsap*/
    /*
    let timeline = gsap.timeline();

    Array.from(parallax_el)
        .filter(el => !el.classList.contains("text"))
        .forEach(el => {
            timeline.from(
                el,
                {
                    top: `${el.offsetHeight / 2 +  -200}px`,
                    duration: 3.5,
                    ease : "power3.out",
                    delay: index * 0.2 // Adds delay between each element's animation

                },
                "1"
            );
    });
    */


    const aboutLink = document.getElementById('aboutLink');
    const aboutMeWindow = document.getElementsByClassName("aboutMe");
    const infoWindow = document.getElementsByClassName("info");

    aboutLink.addEventListener('click', () => {
       aboutMeWindow[0].scrollIntoView({behavior:"smooth" , block:"start", inline:"start"});
       aboutMeWindow
    });

});
