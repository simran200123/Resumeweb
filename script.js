/* ..................................scroll section active link...........................*/
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav div a');



window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');


        if(top>=offset&& top<offset+height)
        {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav div a[href*= '+id+']').classList;

            });
        };
    });

/*..................................................sticky navbar............................*/
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrolly>100);
};