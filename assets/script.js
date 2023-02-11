let typed = new Typed('.typing',{
    strings:['Web Designer','', 'Web Developer', 'Developer FullStack','', 'Developer Backend'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const nav = document.querySelector('.nav'),
    navlist = nav.querySelectorAll('li'),
    totalNavList = navlist.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
    for (let i = 0; i < totalNavList; i++) {
        const a = navlist[i].querySelector('a');
        a.addEventListener('click', function () {
            removeBackSection();
            for(let j = 0; j < totalNavList; j++){
                if(navlist[j].querySelector('a').classList.contains('active')){
                    addBackSection(j);
                    // allSection[j].classList.add('back-section')
                }
                navlist[j].querySelector('a').classList.remove('active')
            }
            this.classList.add('active')
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerbtn();
            }
        })
    }
    function removeBackSection(){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove('back-section');
        }
    }
    function addBackSection(num){
        allSection[num].classList.add('back-section')
    }
    function showSection(element){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove('active');
        }
        const target = element.getAttribute('href').split('#')[1];
        document.querySelector('#' + target).classList.add('active')
    }
    function updateNav(element){
        for(let i = 0; i < totalNavList; i++){
            navlist[i].querySelector('a').classList.remove('active');
            const target = element.getAttribute('href').split('#')[1];
            if(target === navlist[i].querySelector('a').getAttribute('href').split('#')[1]){
            navlist[i].querySelector('a').classList.add('active');

            }
        }
    }
    document.querySelector('.hire-me').addEventListener('click', function(){
        const sectionIndex = this.getAttribute('data-section-index');
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })


    const navTogglerbtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');
    navTogglerbtn.addEventListener('click', () => {
        asideSectionTogglerbtn();
    })
    function asideSectionTogglerbtn() {
        aside.classList.toggle('open');
        navTogglerbtn.classList.toggle('open');
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.toggle('open');
        }
    }

    const formulario = document.querySelector('#form')
      const sendForm = document.querySelector('#Email')

      formulario.addEventListener('submit', handleSubmit)

      function handleSubmit(e) {
        e.preventDefault()
        const form = new FormData(this)
        sendForm.setAttribute('href', `mailto:Nicolasbedoya32@gmail.com?subject=${form.get('Name')}  - ${form.get('Email')} - ${form.get('Subject')}&body=${form.get('Message')}`)
        sendForm.click()
    }