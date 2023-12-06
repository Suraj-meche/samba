const sections = document.querySelectorAll("section");
window.addEventListener("scroll"), () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    })}




    window.addEventListener('scroll',reveal)
    function reveal(){
        var reveals  = document.querySelectorAll('.reveal');
        for(var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getboundingClientRect().top;
            var revealpont=150;
            if (revealtop < windowheight - revealpont){
                reveals[i].classlist.add('active');
            }
            else { 
                reveals[i].classlist.remove('active');
        }

        }

    }