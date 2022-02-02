$(document).ready(function () {
    let parent = document.querySelector('.sticky').parentElement;

    while (parent) {
        const hasOverflow = getComputedStyle(parent).overflow;
        if (hasOverflow !== 'visible') {
            console.log(hasOverflow, parent);
        }
        parent = parent.parentElement;
    }


    $('[data-toggle="tooltip"]').tooltip();

    //Dictionary Translator
    var englishTranslation = {
        sidebar: {
            role: 'Back-end Developer',
        },
        intro: {
            title: "About me",
            bio: "I had my first contact with programming in mid of 2017, but only for curiosity. In 2019 I got into university I really descovered what programming was, since then i keep studying and loving it. Actually with focus on turn me into a blockchain developer."
        },
        skills: {
            title: "Skills",
            description: "Below we have the tools, languages, etc and their respective time that I worked with them throughout my career:"
        },
        jobs: {
            title: "Experience",
            rateSkills: "Most rated skills",
            durationTitle: "Duration",
            durationDescription: "11/2021 ~ Actually",
            descriptionTitle: "Description",
            descriptionDesc1: "Development of automations in C#, .NET . Change in infrastructure in the database using SQL SERVER, HADOOP and AWS.",
            descriptionDesc2: "Development of bots to automate internal processes and reduce work time on repetitive tasks.",
            descriptionDesc3: "Development of exclusive websites in WordPress for companies of different segments. Application development for food establishments."
        },
        education: {
            title: "Education",
            course: "Information Systems",
            description: "(UMC) University of Mogi das Cruzes"
        },
        contact: {
            title: "Contact",   
        }
    };

    var portugueseTranslation = {
        sidebar: {
            role: 'Desenvolvedor<br>Back-end'
        },
        intro: {
            title: "Sobre mim",
            bio: "Tive meu primeiro contato com programação em meados de 2017, mas apenas para estudo. Em 2019 que entrei na faculdade realmente descobri o que era programar desde então sigo estudando e amando isso. Atualmente com o foco de me tornar um desenvolvedor blockchain."
        },
        skills: {
            title: "Habilidades",
            description: "Abaixo temos as ferramentas, linguagens, etc e seu respectivo tempo que"
                + "trabalhei com elas durante toda a minha carreira:"
        },
        jobs: {
            title: "Experiência",
            rateSkills: "Habilidades mais avaliadas",
            durationTitle: "Duração",
            durationDescription: "11/2021 ~ Atualmente",
            descriptionTitle: "Descrição",
            descriptionDesc1: "Desenvolvimento de automações em C#, .NET .Alteração em infraestrutura no banco de dados utilizando SQL SERVER, HADOOP e AWS.",
            descriptionDesc2: "Desenvolvimento de bots para automatizar processos internos e reduzir o tempo de trabalho em tarefas repetitivas.",
            descriptionDesc3: "Desenvolvimento de sites exclusivos em WordPress para empresas de diversos seguimentos. Desenvolvimento de aplicações para estabelecimentos alimentícios."
        },
        education: {
            title: "Educação",
            course: "Sistemas de Informação",
            description: "(UMC) Universidade de Mogi das Cruzes"
        },
        contact: {
            title: "Contato",   
        }
    };
    const btn = document.getElementById('button');
    var btnFormValue = "Enviar";
    var btnFormValueLoading = "Enviando...";
    var titleAlert = ['Sucesso!', 'Erro!']
    var textAlert = ['Email enviado', 'Erro: ']

    $("#switchLanguage").change(function () {
        var translator = new Translator();
        if (this.checked) {
            translator.add('en', englishTranslation).translatePageTo('en');
            changeLanguageHTML('en');
        } else {
            translator.add('pt-br', portugueseTranslation).translatePageTo('pt-br');
            changeLanguageHTML('pt');
        }
    });

    function changeLanguageHTML(language){
        if(language=='en'){
            btn.value = 'Send';
            $('#name').attr('placeholder','name');
            $('#email').attr('placeholder','e-mail');
            $('#subject').attr('placeholder','subject');
            $('#message').attr('placeholder','message');
            btnFormValueLoading = "Sending...";
            btnFormValue = "Send";
            titleAlert = ['Success!', 'Error!'];
            textAlert = ['E-mail sent', 'Error: '];
        }else{
            btn.value = 'Enviar';
            $('#name').attr('placeholder','nome');
            $('#email').attr('placeholder','email');
            $('#subject').attr('placeholder','assunto');
            $('#message').attr('placeholder','mensagem');
            btnFormValue = "Enviar";
            btnFormValueLoading = "Enviando...";
            titleAlert = ['Sucesso!', 'Erro!']
            textAlert = ['Email enviado', 'Erro: ']
        }

    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    document.getElementById('formEmail')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = btnFormValueLoading;

            const serviceID = 'service_w466ya5';
            const templateID = 'template_keca88p';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = btnFormValue;
                    Swal.fire({
                        title: titleAlert[0],
                        text: textAlert[0],
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }, (err) => {
                    btn.value = btnFormValue;
                    Swal.fire({
                        title: titleAlert[0],
                        text: textAlert[1] + JSON.stringify(err),
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                });
        }
        );

    function sendMail() {
        emailjs.sendForm('service_w466ya5', 'template_keca88p', '#formEmail')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }


});
