let ResponsiveNavBar = () => {
    var menue_icon = document.querySelector('#menue')
    var cross_icon = document.querySelector("#cross_icon")
    var menue_box = document.querySelector(".navigation")

    menue_icon.addEventListener("click", () => {
        menue_box.classList.remove('nav_hidden')
        cross_icon.style.display = "block"
    })
    cross_icon.addEventListener('click', () => {
        cross_icon.style.display = "none"
        menue_box.classList.add('nav_hidden')
    })
}

ResponsiveNavBar()

// News_Image_Display function



// Font_size
document.querySelectorAll('h1').forEach(h1 => {
    h1.style.fontFamily = 'Gothic Medium'
});
document.querySelectorAll('h2').forEach(h2 => {
    h2.style.fontFamily = `Gothic A1", sans-serif`
    h2.style.fontWeight = 400
    h2.style.fontFamily = 'normal'
});
document.querySelectorAll('p').forEach(p => {
    p.style.fontFamily = `Gothic A1", sans-serif`
    p.style.fontWeight = 400
    p.style.fontFamily = 'normal'
});



const ImageRotationFunction = () => {
    var loder = document.querySelector("#loder #box");
    var rotatevla = 1;
    const imgRotateFun = () => {
        loder.style.transform = `rotate(${rotatevla + 0}deg)`;
        loder.style.transition = `.3s `;
        rotatevla += 20;
    }
    setInterval(function () {
        imgRotateFun()
    }, 100);
    setTimeout(() => {
        var loder = document.querySelector("#loder");
        loder.style.display = "none"
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    ImageRotationFunction()
})


let GoToTopFunction = () => {
    var Button = document.querySelector('#topbtn')
    Button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}
GoToTopFunction()



// Make the  nav Stickey 

window.addEventListener('scroll', function () {

    var nav = document.querySelector('.second-nav')
    if (window.pageYOffset > 20) {
        document.querySelector('.navigation ').style.top = '65px'
        nav.classList.add('fixed')

    }
    else {
        nav.classList.remove('fixed')
        document.querySelector('.navigation ').style.top = '58px'
    }
})



// Images Show and Hidden Fuctionality

document.addEventListener('DOMContentLoaded', function () {
    const removeBtn = document.querySelector("#remove_images_btn");
    const showBtn = document.querySelector("#Show_images_btn");

    function hideImages() {
        localStorage.setItem('Image_remove', 'true'); // Save state
        location.reload(); // Reload the page
    }

    function showImages() {
        localStorage.setItem('Image_remove', 'false'); // Save state
        location.reload(); // Reload the page
    }

    // Apply stored visibility state on page load
    if (localStorage.getItem('Image_remove') === 'true') {
        document.querySelectorAll('img').forEach(img => img.src = "");
        removeBtn.style.display = "none";
        showBtn.style.display = "block";
    } else {
        document.querySelectorAll('img').forEach(img => {
            let Image_sec = img.src
            img.src = Image_sec
        });
        removeBtn.style.display = "block";
        showBtn.style.display = "none";
    }

    removeBtn.addEventListener('click', hideImages);
    showBtn.addEventListener('click', showImages);
});

// Background_Color Part

var background_color = document.querySelector("#background_color");
var bg_color_box = document.querySelector(".background_colors_box");
var counter = true;
background_color.addEventListener('click', function () {
    if (counter) {
        bg_color_box.style.display = "flex"
        counter = false
    }
    else {
        bg_color_box.style.display = "none"
        counter = true

    }

})




const HomePage = () => {

    const Backround_Color_One = () => {
        let HeaderFunction = () => {
            document.querySelector('nav .navigation ').style.backgroundColor = "rgb(232 250 255)"
            document.querySelector('nav').style.backgroundColor = "rgb(232 250 255)"
            document.querySelectorAll('nav .navigation a ').forEach(a => { a.style.backgroundColor = "#42abcb" })
            document.querySelector('.second-nav .navigation #sub_nav #background_color').style.backgroundColor = "#fff"
            document.querySelector('.second-nav .navigation #sub_nav #background_color').style.borderColor = "#42abcb"
            document.querySelector('.second-nav .navigation #sub_nav #background_color').style.color = "#42abcb"
            document.querySelector('.second-nav .navigation #remove_images_btn ').style.backgroundColor = "#fff"
            document.querySelector('.second-nav .navigation #remove_images_btn ').style.borderColor = "#42abcb"
            document.querySelector('.second-nav .navigation #remove_images_btn ').style.color = "#42abcb"
            document.querySelector(' main header #header_banner #header_banner_left h1').style.color = "#42abcb"

            // Team page code

            document.querySelectorAll('nav .navigation #sub_nav li i').forEach(i => {
                i.style.color = '#42abcb'

            })
            document.querySelectorAll("main header #header_banner h1").forEach(h1 => { h1.style.color = "000" })
            document.querySelectorAll('main header #header_banner button').forEach(btn => {
                btn.style.color = '#000'
                btn.style.backgroundColor = '#fff'
                btn.style.borderColor = '#42abcb'
            })

        }
        let AboutSection = () => {
            document.querySelector('#about ').style.backgroundColor = 'rgb(232 250 255)'
            document.querySelector('#about h1 ').style.color = '#000'
            document.querySelectorAll('#about p').forEach(p => { p.style.color = '#000' })
            document.querySelectorAll('#about p span').forEach(p => { p.style.color = '#42abcb' })
            document.querySelector('#about #about_btn_div #about_btn').style.borderColor = '#42abcb'
            document.querySelector('#about #about_btn_div #about_btn').style.backgroundColor = '#fff'
            document.querySelector('#about #about_btn_div #about_btn').style.color = '#000'
            document.querySelectorAll('#right #inder_right div').forEach(div => { div.style.borderColor = "#42abcb" })

        }
        let ProgramSection = () => {
            document.querySelector("#program_container").style.backgroundColor = 'rgb(232 250 255)'
            document.querySelector("#program_container h1").style.color = '#000'
            document.querySelectorAll("#program_container #program_1 ").forEach(box => { box.style.zIndex = "9" })
            document.querySelector("#more_program_container #more_program ").style.borderColor = "#42abcb"
            document.querySelector("#more_program_container #more_program ").style.color = "#000"
            document.querySelector("#more_program_container #more_program ").style.backgroundColor = "#fff";

            document.querySelectorAll(" #program_1 #eroll_btn ").forEach(btn => {
                btn.style.backgroundColor = "#fff"
                btn.style.borderColor = "#42abcb"
                btn.style.color = "#000"
                btn.style.backgroundColor = "#fff";
                btn.style.backgroundColor = "#fff"
            })
            document.querySelectorAll("#program_1 span").forEach(span => { span.style.backgroundColor = '#42abcb' })
        }
        let Choos_us_Section = () => {
            document.querySelectorAll(' #Choos_us_container #inner_container h2').forEach(h2 => { h2.style.color = "#42abcb" })
            document.querySelectorAll(' #Choos_us_container #inner_container p').forEach(p => { p.style.color = "#000" })
            document.querySelector(' #Choos_us_container ').style.backgroundColor = "rgb(232 250 255)"
            document.querySelector(' #Choos_us_container h1').style.color = "#000"
        }
        let FooterSection = () => {
            document.querySelector('.footer').style.backgroundColor = 'rgb(232 250 255)'
            document.querySelector('.footer').style.backgroundColor = 'rgb(232 250 255)'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#fff' })
            document.querySelectorAll('.footer .footer-column p').forEach(p => { p.style.color = '#fff' })
        }
        document.querySelector(' #slider_section h1 ').style.color = "#42abcb"
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #42abcb"

        HeaderFunction()
        AboutSection()
        ProgramSection()
        Choos_us_Section()
        FooterSection()

    }


    const Backround_Color_Two = () => {
        let HeaderFunction = () => {
            document.querySelector('nav .navigation ').style.backgroundColor = "rgb(255, 241, 224)"
            document.querySelector('nav').style.backgroundColor = "rgb(255, 241, 224)"
            document.querySelectorAll('nav .navigation a ').forEach(a => { a.style.backgroundColor = "#ffab4b" })
            document.querySelector('.second-nav .navigation #sub_nav #background_color').style.backgroundColor = "#fff"
            document.querySelector('.second-nav .navigation #sub_nav #background_color').style.borderColor = "#ffab4b"
            document.querySelector('.second-nav .navigation #sub_nav #background_color').style.color = "#ffab4b"
            document.querySelector('.second-nav .navigation #remove_images_btn ').style.backgroundColor = "#fff"
            document.querySelector('.second-nav .navigation #remove_images_btn ').style.borderColor = "#ffab4b"
            document.querySelector('.second-nav .navigation #remove_images_btn ').style.color = "#ffab4b"
            document.querySelector(' main header #header_banner #header_banner_left h1').style.color = "#ffab4b"



            document.querySelectorAll('nav .navigation #sub_nav li i').forEach(i => {
                i.style.color = '#ffab4b'

            })
            document.querySelectorAll("main header #header_banner h1").forEach(h1 => { h1.style.color = "000" })
            document.querySelectorAll('main header #header_banner button').forEach(btn => {
                btn.style.color = '#000'
                btn.style.backgroundColor = '#fff'
                btn.style.borderColor = '#ffab4b'
            })


        }
        let AboutSection = () => {
            document.querySelector('#about ').style.backgroundColor = 'rgb(255 241 224)'
            document.querySelector('#about h1 ').style.color = '#000'
            document.querySelectorAll('#about p').forEach(p => { p.style.color = '#000' })
            document.querySelectorAll('#about p span').forEach(p => { p.style.color = '#ffab4b' })
            document.querySelector('#about #about_btn_div #about_btn').style.borderColor = '#ffab4b'
            document.querySelector('#about #about_btn_div #about_btn').style.backgroundColor = '#fff'
            document.querySelector('#about #about_btn_div #about_btn').style.color = '#000'
            document.querySelectorAll('#right #inder_right div').forEach(div => { div.style.borderColor = "#ffab4b" })

        }
        let ProgramSection = () => {
            document.querySelector("#program_container").style.backgroundColor = 'rgb(255 241 224)'
            document.querySelector("#program_container h1").style.color = '#000'
            document.querySelectorAll("#program_container #program_1 ").forEach(box => { box.style.zIndex = "9" })
            document.querySelector("#more_program_container #more_program ").style.borderColor = "#ffab4b"
            document.querySelector("#more_program_container #more_program ").style.color = "#000"
            document.querySelector("#more_program_container #more_program ").style.backgroundColor = "#fff";

            document.querySelectorAll("#program_container #program_1 #eroll_btn ").forEach(btn => {
                btn.style.backgroundColor = "#fff"
                btn.style.borderColor = "#ffab4b"
                btn.style.color = "#000"
                btn.style.backgroundColor = "#fff";
                btn.style.backgroundColor = "#fff"
            })
            document.querySelectorAll("#program_container #program_1 span").forEach(span => { span.style.backgroundColor = '#ffab4b' })
        }
        let Choos_us_Section = () => {
            document.querySelectorAll(' #Choos_us_container #inner_container h2').forEach(h2 => { h2.style.color = "#ffab4b" })
            document.querySelectorAll(' #Choos_us_container #inner_container p').forEach(p => { p.style.color = "#000" })
            document.querySelector(' #Choos_us_container ').style.backgroundColor = "rgb(255 241 224)"
            document.querySelector(' #Choos_us_container h1').style.color = "#000"
        }

        let FooterSection = () => {
            document.querySelector('.footer').style.backgroundColor = 'rgb(255 241 224)'
            document.querySelector('.footer').style.backgroundColor = 'rgb(255 241 224)'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#000' })
            document.querySelectorAll('.footer .footer-column p').forEach(p => { p.style.color = '#000' })
        }
        document.querySelector(' #slider_section h1 ').style.color = "#ffab4b"
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #ffab4b"

        HeaderFunction()
        AboutSection()
        ProgramSection()
        Choos_us_Section()
        FooterSection()
        Slider_Section()

    }

    const Backround_Color_Three = () => {
        let HeaderFunction = () => {
            document.querySelector('nav .navigation ').style.backgroundColor = "rgb(231, 255, 229)"
            document.querySelector('nav').style.backgroundColor = "rgb(231, 255, 229)"
            document.querySelectorAll('nav .navigation a ').forEach(a => { a.style.backgroundColor = "#63b256" })
            document.querySelector('.second-nav .navigation #sub_nav #background_color').style.backgroundColor = "#fff"
            document.querySelector('.second-nav .navigation #sub_nav #background_color').style.borderColor = "#63b256"
            document.querySelector('.second-nav .navigation #sub_nav #background_color').style.color = "#63b256"
            document.querySelector('.second-nav .navigation #remove_images_btn ').style.backgroundColor = "#fff"
            document.querySelector('.second-nav .navigation #remove_images_btn ').style.borderColor = "#63b256"
            document.querySelector('.second-nav .navigation #remove_images_btn ').style.color = "#63b256"
            document.querySelector(' main header #header_banner #header_banner_left h1').style.color = "#63b256"



            document.querySelectorAll('nav .navigation #sub_nav li i').forEach(i => {
                i.style.color = '#63b256'

            })
            document.querySelectorAll("main header #header_banner h1").forEach(h1 => { h1.style.color = "000" })
            document.querySelectorAll('main header #header_banner button').forEach(btn => {
                btn.style.color = '#000'
                btn.style.backgroundColor = '#fff'
                btn.style.borderColor = '#63b256'
            })

        }
        let AboutSection = () => {
            document.querySelector('#about ').style.backgroundColor = 'rgb(231 255 229)'
            document.querySelector('#about h1 ').style.color = '#000'
            document.querySelectorAll('#about p').forEach(p => { p.style.color = '#000' })
            document.querySelectorAll('#about p span').forEach(p => { p.style.color = '#63b256' })
            document.querySelector('#about #about_btn_div #about_btn').style.borderColor = '#63b256'
            document.querySelector('#about #about_btn_div #about_btn').style.backgroundColor = '#fff'
            document.querySelector('#about #about_btn_div #about_btn').style.color = '#000'
            document.querySelectorAll('#right #inder_right div').forEach(div => { div.style.borderColor = "#63b256" })
        }
        let ProgramSection = () => {
            document.querySelector("#program_container").style.backgroundColor = 'rgb(231 255 229)'
            document.querySelector("#program_container h1").style.color = '#000'
            document.querySelectorAll("#program_container #program_1 ").forEach(box => { box.style.zIndex = "9" })
            document.querySelector("#more_program_container #more_program ").style.borderColor = "#63b256"
            document.querySelector("#more_program_container #more_program ").style.color = "#000"
            document.querySelector("#more_program_container #more_program ").style.backgroundColor = "#fff";

            document.querySelectorAll("#program_container #program_1 #eroll_btn ").forEach(btn => {
                btn.style.backgroundColor = "#fff"
                btn.style.borderColor = "#63b256"
                btn.style.color = "#000"
                btn.style.backgroundColor = "#fff";
                btn.style.backgroundColor = "#fff"
            })
            document.querySelectorAll("#program_container #program_1 span").forEach(span => { span.style.backgroundColor = '#63b256' })
        }
        let Choos_us_Section = () => {
            document.querySelectorAll(' #Choos_us_container #inner_container h2').forEach(h2 => { h2.style.color = "#63b256" })
            document.querySelectorAll(' #Choos_us_container #inner_container p').forEach(p => { p.style.color = "#000" })
            document.querySelector(' #Choos_us_container ').style.backgroundColor = "rgb(231 255 229)"
            document.querySelector(' #Choos_us_container h1').style.color = "#000"
        }
        let FooterSection = () => {
            document.querySelector('.footer').style.backgroundColor = '#63b256'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#000' })
            document.querySelectorAll('.footer .footer-column p').forEach(p => { p.style.color = '#000' })
        }
        document.querySelector(' #slider_section h1 ').style.color = "#63b256"
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #63b256"


        HeaderFunction()
        AboutSection()
        ProgramSection()
        Choos_us_Section()
        FooterSection()

    }


    var button1 = document.querySelector("#button-1");
    var button2 = document.querySelector("#button-2");
    var button3 = document.querySelector("#button-3");



    button1.addEventListener('click', () => {
        Backround_Color_One()
        console.log('Hellow');

    })
    button2.addEventListener('click', () => {
        Backround_Color_Three()

    })
    button3.addEventListener('click', () => {
        Backround_Color_Two()

    })

}
HomePage()

const AboutPage = () => {

    const AboutColor_1 = () => {
        document.querySelector('body').style.backgroundColor = 'rgb(232, 250, 255)'
        let Constainer_1 = () => {
            document.querySelector('#header_banner span').style.backgroundColor = "#42abcb"
            document.querySelector('#about_main').style.backgroundColor = "rgb(232, 250, 255)"
            document.querySelector('#container-1 #left ').style.backgroundColor = "rgb(232, 250, 255)"
            document.querySelectorAll('#container-1 #left h2 ').forEach(h2 => { h2.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p ').forEach(p => { p.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p span ').forEach(p => { p.style.color = "#42abcb" })
            document.querySelector('#container-1 #main_text ').style.color = "#42abcb"
        }
        let Footer = () => {
            document.querySelector('.footer').style.backgroundColor = '#42abcb'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#000' })
            document.querySelectorAll('.footer .footer-column p').forEach(p => { p.style.color = '#000' })
        }
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #42abcb"

        Constainer_1()
        Footer()
    }


    const AboutColor_2 = () => {
        document.querySelector('body').style.backgroundColor = 'rgb(231, 255, 229)'

        let Constainer_1 = () => {
            document.querySelector('#header_banner span').style.backgroundColor = "#63b256"
            document.querySelector('#about_main #header_banner h1 ').style.color = "#fff"
            document.querySelector('#about_main').style.backgroundColor = "rgb(231, 255, 229)"
            document.querySelector('#container-1 #left ').style.backgroundColor = "rgb(231, 255, 229)"
            document.querySelectorAll('#container-1 #left h2 ').forEach(h2 => { h2.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p ').forEach(p => { p.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p span ').forEach(p => { p.style.color = "#63b256" })
            document.querySelector('#container-1 #main_text ').style.color = "#63b256"
        }
        let Footer = () => {
            document.querySelector('.footer').style.backgroundColor = '#63b256'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#fff' })
        }
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #63b256"

        Constainer_1()
        Footer()
    }
    const AboutColor_3 = () => {
        document.querySelector('body').style.backgroundColor = 'rgb(255, 241, 224)'
        let Constainer_1 = () => {
            document.querySelector('#header_banner span').style.backgroundColor = "#ffab4b"
            document.querySelector(' #header_banner #about_h1 ').style.color = "#fff"
            document.querySelector('#about_main').style.backgroundColor = "rgb(255, 241, 224)"
            document.querySelector('#container-1 #left ').style.backgroundColor = "rgb(255, 241, 224)"
            document.querySelectorAll('#container-1 #left h2 ').forEach(h2 => { h2.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p ').forEach(p => { p.style.color = "#000" })
            document.querySelectorAll('#container-1 #left p span ').forEach(p => { p.style.color = "#ffab4b" })
            document.querySelector('#container-1 #main_text ').style.color = "#ffab4b"
        }
        let Footer = () => {
            document.querySelector('.footer').style.backgroundColor = '#ffab4b'
            document.querySelectorAll('.footer .footer-column h2').forEach(h2 => { h2.style.color = '#000' })
        }
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #ffab4b"

        Constainer_1()
        Footer()
    }
    document.querySelector('#button-1').addEventListener('click', () => {
        AboutColor_1()
    })
    document.querySelector('#button-2').addEventListener('click', () => {
        AboutColor_2()
    })

    document.querySelector('#button-3').addEventListener('click', () => {
        AboutColor_3()
    })

}

AboutPage()

const ProgramPage = () => {
    let ProgramPageColor_1 = () => {
        document.querySelectorAll('#container-1 #program_1 span').forEach(span => {
            span.style.backgroundColor = '#42abcb'
        })
        document.querySelectorAll('#container-1 #program_1 #eroll_btn').forEach(btn => {
            btn.style.borderColor = '#42abcb'
        })
        document.querySelector('.footer').style.backgroundColor = '#42abcb'
        document.querySelectorAll('.footer h2').forEach(h2 => h2.style.color = '#000')
        document.querySelectorAll('.footer p').forEach(p => p.style.color = '#000')
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #42abcb"

    }
    let ProgramPageColor_2 = () => {
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #63b256"

        document.querySelectorAll('#container-1 #program_1 span').forEach(span => {
            span.style.backgroundColor = '#63b256'
        })
        document.querySelectorAll('#container-1 #program_1 #eroll_btn').forEach(btn => {
            btn.style.borderColor = '#63b256'
        })
        document.querySelector('.footer').style.backgroundColor = '#63b256'
        document.querySelectorAll('.footer h2').forEach(h2 => h2.style.color = '#000')
    }
    let ProgramPageColor_3 = () => {
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #ffab4b"

        document.querySelectorAll('#container-1 #program_1 span').forEach(span => {
            span.style.backgroundColor = '#ffab4b'
        })
        document.querySelectorAll('#container-1 #program_1 #eroll_btn').forEach(btn => {
            btn.style.borderColor = '#ffab4b'
        })
        document.querySelector('.footer').style.backgroundColor = '#ffab4b'
        document.querySelectorAll('.footer h2').forEach(h2 => h2.style.color = '#000')
    }

    document.querySelector("#button-1").addEventListener("click", ProgramPageColor_1)
    document.querySelector("#button-2").addEventListener("click", ProgramPageColor_2)
    document.querySelector("#button-3").addEventListener("click", ProgramPageColor_3)
}

ProgramPage()

const TeamPage = () => {
    let TeamColor_1 = () => {
        document.querySelector('#container-1 #image').style.borderColor = '#42abcb'
        document.querySelector('#container-2 h1').style.color = '#42abcb'
        document.querySelector('#container-1 #innder h1').style.color = '#42abcb'
        document.querySelector('#container-2 #inner img').style.borderColor = "#42abcb"
        document.querySelectorAll('#container-1 #innder p span').forEach(span => { span.style.color = "#42abcb" })
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #42abcb"

    }
    let TeamColor_2 = () => {
        document.querySelector('#container-1 #image').style.borderColor = '#63b256'
        document.querySelector('#container-2 h1').style.color = '#63b256'
        document.querySelector('#container-1 #innder h1').style.color = '#63b256'
        document.querySelector('#container-2 #inner img').style.borderColor = "#63b256"
        document.querySelectorAll('#container-1 #innder p span').forEach(span => { span.style.color = "#63b256" })
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #63b256"

    }

    let TeamColor_3 = () => {
        document.querySelector('#container-1 #image').style.borderColor = '#ffab4b'
        document.querySelector('#container-2 h1').style.color = '#ffab4b'
        document.querySelector('#container-1 #innder h1').style.color = '#ffab4b'
        document.querySelector('#container-2 #inner img').style.borderColor = "#ffab4b"
        document.querySelectorAll('#container-1 #innder p span').forEach(span => { span.style.color = "#ffab4b" })
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #ffab4b"

    }


    document.querySelector("#button-1").addEventListener("click", TeamColor_1)
    document.querySelector("#button-2").addEventListener("click", TeamColor_2)
    document.querySelector("#button-3").addEventListener("click", TeamColor_3)
}
TeamPage()

const ContactPage = () => {
    let ContactColor_1 = () => {
        document.querySelector('#constainer h1').style.color = '#42abcb'
        document.querySelectorAll('#container-1 #contect_form div input').forEach(border => { border.style.borderColor = '#42abcb' })
        document.querySelector('#container-1 #contect_form div textarea').style.borderColor = '#42abcb'
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #42abcb"

    }
    let ContactColor_2 = () => {
        document.querySelector('#constainer h1').style.color = '#63b256'
        document.querySelectorAll('#container-1 #contect_form div input').forEach(border => { border.style.borderColor = '#63b256' })
        document.querySelector('#container-1 #contect_form div textarea').style.borderColor = '#63b256'
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #63b256"

    }

    let ContactColor_3 = () => {
        document.querySelector('#constainer h1').style.color = '#ffab4b'
        document.querySelectorAll('#container-1 #contect_form div input').forEach(border => { border.style.borderColor = '#ffab4b' })
        document.querySelector('#container-1 #contect_form div textarea').style.borderColor = '#ffab4b'
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #ffab4b"

    }


    document.querySelector("#button-1").addEventListener("click", ContactColor_1)
    document.querySelector("#button-2").addEventListener("click", ContactColor_2)
    document.querySelector("#button-3").addEventListener("click", ContactColor_3)
}
ContactPage()


const News_Page = () => {
    let NewsColor_1 = () => {
        document.querySelectorAll('#container_1 #left,#right ').forEach(border => border.style.borderColor = '#42abcb')
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #42abcb"

    }
    let NewsColor_2 = () => {
        document.querySelectorAll('#container_1 #left,#right ').forEach(border => border.style.borderColor = '#63b256')
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #63b256"

    }

    let NewsColor_3 = () => {
        document.querySelectorAll('#container_1 #left,#right ').forEach(border => border.style.borderColor = '#ffab4b')
        document.querySelector('.scroll-container').style.boxShadow = " inset 0 0 40px  #ffab4b"

    }


    document.querySelector("#button-1").addEventListener("click", NewsColor_1)
    document.querySelector("#button-2").addEventListener("click", NewsColor_2)
    document.querySelector("#button-3").addEventListener("click", NewsColor_3)
}
News_Page()
const ZoomFun = () => {
    var para_size = 16;
    var size = 30;

    document.querySelector('#zoom_in_btn').addEventListener('click', () => {
        if (para_size < 25 && size < 40) {
            para_size += 0.5;
            size += 0.5;


            document.querySelectorAll('p').forEach(p => {
                p.style.fontSize = para_size + "px";
                p.style.lineHeight = '40px';

            });
            document.querySelectorAll('h1').forEach(h1 => {
                h1.style.fontSize = size + "px";
            });
            document.querySelectorAll('h2').forEach(h2 => {
                h2.style.fontSize = size + "px";
            });
        }
    });

    // ✅ Properly checking min size inside the event listener


    document.querySelector('#zoom_out_btn').addEventListener('click', () => {
        if (para_size > 14 && size > 25) {
            para_size -= 0.5;
            size -= 0.5;

            document.querySelectorAll('p').forEach(p => {
                p.style.fontSize = para_size + "px";
            });
            document.querySelectorAll('h1').forEach(h1 => {
                h1.style.fontSize = size + "px";
            });
            document.querySelectorAll('h2').forEach(h2 => {
                h2.style.fontSize = size + "px";
            });
        }
    });
}
ZoomFun()
const News_Image_Display = () => {
    document.querySelector("#container_1").addEventListener("click", function (e) {
        var image_slider = document.querySelectorAll('.swiper-slide img');

        if (e.target.tagName === "IMG") { // Ensure target is an image
            const imgSrc = e.target.src;
            const displayBox = document.querySelector(".display_box");

            if (imgSrc.includes("news_page_1.jpg")) {
                image_slider[0].src = "./image/news_page_1.jpg";
                image_slider[1].src = "./image/news_page_2.jpg";
            } else if (imgSrc.includes("news_page_2.jpg")) {
                image_slider[0].src = "./image/news_page_2.jpg";
                image_slider[1].src = "./image/news_page_1.jpg";
            }

            // Show slider
            displayBox.classList.remove("news_image_display_hidden");

            // Reinitialize Swiper to update images
            setTimeout(() => {
                swiper.update();
            }, 10);
        }
    });

    // Close button functionality
    document.querySelector(".slider_remove_btn").addEventListener("click", function () {
        document.querySelector(".display_box").classList.add("news_image_display_hidden");
    });
};

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", News_Image_Display);


let Input_text_form_keybord = () => {
    var key_board_button = document.querySelector(".key_board_button");
    var buttons = document.querySelectorAll(".keyboard button");
    var Chat_keybord = document.querySelector(".keyboard");
    var inputs = document.querySelectorAll("input");
    var textarea = document.querySelector("textarea");
    var delete_Btn = document.querySelector(".delete");
    var key_counter = true;

    var activeInput = null; // Track the currently active input field

    // Detect the focused input field
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            activeInput = input; // Set the active input field
        });
    });

    textarea.addEventListener("focus", () => {
        activeInput = textarea;
    });

    // Keyboard button click functionality
    buttons.forEach(btn => {
        btn.addEventListener("click", (event) => {
            if (activeInput) {
                var button_val = event.target.innerHTML;
                activeInput.value += button_val; // Append to the active input field
            }
        });
    });

    // Delete button functionality
    delete_Btn.addEventListener("click", function () {
        if (activeInput && activeInput.value.length > 0) {
            activeInput.value = activeInput.value.slice(0, -1);
        }
    });

    // Toggle keyboard visibility
    key_board_button.addEventListener("click", function () {
        if (key_counter) {
            Chat_keybord.classList.remove("Chat_keybord_display_none");
            key_counter = false;
        } else {
            Chat_keybord.classList.add("Chat_keybord_display_none");
            key_counter = true;
        }
    });
};

document.addEventListener("DOMContentLoaded", Input_text_form_keybord);
