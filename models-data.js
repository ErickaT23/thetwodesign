/*
Para simplificar la carga de modelos:
- image: usa la portada si la tienes
- image: "#" para generar una portada automatica con CSS
- theme: classic | royal | floral | festive
- format: etiqueta corta (Web, Video, PDF, Imagen)

Regla de orden:
- En las colecciones visuales, los modelos mas nuevos van al inicio del arreglo.
- Conforme se agreguen modelos nuevos, se insertan arriba para que aparezcan primero.
*/
window.MODEL_CATALOG = {
    "wedding-essential": [
        {
            name: "Modelo Honey",
            image: "/wedding/web/images/PORTADA-HONEY.png",
            theme: "classic",
            format: "Web",
            demo: "https://honey-invitacion.netlify.app/?id=1",
            buy: "/wedding/web/Modelo-2/modelo-honey.html"
        },
        {
            name: "Modelo Azul Real",
            image: "/wedding/web/images/PORTADA-REAL.png",
            theme: "royal",
            format: "Web",
            demo: "/wedding/web/Modelo-1/modelo-azulreal.html",
            buy: "/wedding/web/Modelo-1/modelo-azulreal.html"
        },
        {
            name: "Modelo Black & White",
            image: "/wedding/video/images/PORTADA-BLACK&WHITE.png",
            theme: "classic",
            format: "Video",
            demo: "/wedding/video/modelo-1/modelo-blackandwhite.html",
            buy: "/wedding/video/modelo-1/modelo-blackandwhite.html"
        },
        {
            name: "Modelo Honey",
            image: "/wedding/pdf/images/images/PORTADA-HONEY.png",
            theme: "classic",
            format: "PDF",
            demo: "/wedding/pdf/images/Modelo-2/modelo-honey.html",
            buy: "/wedding/pdf/images/Modelo-2/modelo-honey.html"
        },
        {
            name: "Modelo Azul Real",
            image: "/wedding/pdf/images/images/PORTADA-REAL.png",
            theme: "royal",
            format: "PDF",
            demo: "/wedding/pdf/images/Modelo-1/modelo-azulreal.html",
            buy: "/wedding/pdf/images/Modelo-1/modelo-azulreal.html"
        },
        {
            name: "Modelo Eucalipto",
            image: "/wedding/imagen/images/PORTADA-EUCALIPTO.png",
            theme: "floral",
            format: "Imagen",
            demo: "/wedding/imagen/modelo-1/modelo-eucalipto.html",
            buy: "/wedding/imagen/modelo-1/modelo-eucalipto.html"
        }
    ],
    "wedding-web": [
        {
            name: "Modelo Nude",
            image: "/wedding/web/Modelo-9/media/N1.png",
            gallery: [
                "/wedding/web/Modelo-9/media/N1.png",
                "/wedding/web/Modelo-9/media/N2.png",
                "/wedding/web/Modelo-9/media/N3.png"
            ],
            theme: "classic",
            format: "Web",
            price: 699,
            demo: "https://modelonude.thetwodesign.com/?id=1",
            buy: "/wedding/web/Modelo-9/modelo-nude.html"
        },
        {
            name: "Modelo Elegance",
            image: "/wedding/web/Modelo-8/media/E1.png",
            gallery: [
                "/wedding/web/Modelo-8/media/E1.png",
                "/wedding/web/Modelo-8/media/E2.png",
                "/wedding/web/Modelo-8/media/E3.png"
            ],
            theme: "classic",
            format: "Web",
            price: 699,
            demo: "https://modeloelegance.netlify.app/?id=1",
            buy: "/wedding/web/Modelo-8/modelo-elegance.html"
        },
        {
            name: "Modelo Olivo",
            image: "/wedding/web/Modelo-7/media/01.png",
            gallery: [
                "/wedding/web/Modelo-7/media/01.png",
                "/wedding/web/Modelo-7/media/02.png",
                "/wedding/web/Modelo-7/media/03.png"
            ],
            theme: "floral",
            format: "Web",
            price: 699,
            demo: "https://modelo-olivo.netlify.app/?id=1",
            buy: "/wedding/web/Modelo-7/modelo-olivo.html"
        },
        {
            name: "Modelo Romero",
            image: "/wedding/web/Modelo-6/media/R1.png",
            gallery: [
                "/wedding/web/Modelo-6/media/R1.png",
                "/wedding/web/Modelo-6/media/R2.png",
                "/wedding/web/Modelo-6/media/R3.png"
            ],
            theme: "floral",
            format: "Web",
            price: 699,
            demo: "https://modeloromero.netlify.app/?id=1",
            buy: "/wedding/web/Modelo-6/modelo-romero.html"
        },
        {
            name: "Modelo Playa",
            image: "/wedding/web/Modelo-5/media/P1.png",
            gallery: [
                "/wedding/web/Modelo-5/media/P1.png",
                "/wedding/web/Modelo-5/media/P2.png",
                "/wedding/web/Modelo-5/media/P3.png"
            ],
            theme: "festive",
            format: "Web",
            price: 699,
            demo: "https://noscasamosenlaplaya.netlify.app/?id=1",
            buy: "/wedding/web/Modelo-5/modelo-playa.html"
        },
        {
            name: "Modelo Acuarela",
            image: "/wedding/web/Modelo-4/media/A1.png",
            gallery: [
                "/wedding/web/Modelo-4/media/A1.png",
                "/wedding/web/Modelo-4/media/A2.png",
                "/wedding/web/Modelo-4/media/A3.png"
            ],
            theme: "floral",
            format: "Web",
            price: 699,
            demo: "https://invitacion-acuarela.netlify.app/?id=1",
            buy: "/wedding/web/Modelo-4/modelo-acuarela.html"
        },
        {
            name: "Modelo Laurel",
            image: "/wedding/web/Modelo-3/media/L1.png",
            gallery: [
                "/wedding/web/Modelo-3/media/L1.png",
                "/wedding/web/Modelo-3/media/L2.png",
                "/wedding/web/Modelo-3/media/L3.png"
            ],
            theme: "classic",
            format: "Web",
            price: 699,
            demo: "https://modelolaurel.netlify.app/?id=1",
            buy: "/wedding/web/Modelo-3/modelo-laurel.html"
        },
        {
            name: "Modelo Black and White",
            image: "/wedding/web/images/PORTADA-REAL.png",
            gallery: [
                "/wedding/web/Modelo-1/media/BW1.png",
                "/wedding/web/Modelo-1/media/BW2.png",
                "/wedding/web/Modelo-1/media/BW3.png"
            ],
            theme: "royal",
            format: "Web",
            price: 699,
            demo: "https://modeloblackandwhite.netlify.app/?id=1",
            buy: "/wedding/web/Modelo-1/modelo-black-and-white.html"
        },
        {
            name: "Modelo Honey",
            image: "/wedding/web/images/PORTADA-HONEY.png",
            gallery: [
                "/wedding/web/Modelo-2/media/H1.png",
                "/wedding/web/Modelo-2/media/H2.png",
                "/wedding/web/Modelo-2/media/H3.png"
            ],
            theme: "classic",
            format: "Web",
            price: 699,
            demo: "/wedding/web/Modelo-2/modelo-honey.html",
            buy: "/wedding/web/Modelo-2/modelo-honey.html"
        }
    ],
    "wedding-video": [
        {
            name: "Modelo Black & White",
            image: "/wedding/video/images/PORTADA-BLACK&WHITE.png",
            theme: "classic",
            format: "Video",
            demo: "/wedding/video/modelo-1/modelo-blackandwhite.html",
            buy: "/wedding/video/modelo-1/modelo-blackandwhite.html"
        }
    ],
    "wedding-pdf": [
        {
            name: "Modelo Honey",
            image: "/wedding/pdf/images/images/PORTADA-HONEY.png",
            demo: "/wedding/pdf/images/Modelo-2/modelo-honey.html",
            buy: "/wedding/pdf/images/Modelo-2/modelo-honey.html"
        },
        {
            name: "Modelo Azul Real",
            image: "/wedding/pdf/images/images/PORTADA-REAL.png",
            demo: "/wedding/pdf/images/Modelo-1/modelo-azulreal.html",
            buy: "/wedding/pdf/images/Modelo-1/modelo-azulreal.html"
        }
    ],
    "wedding-imagen": [
        {
            name: "Modelo Eucalipto",
            image: "/wedding/imagen/images/PORTADA-EUCALIPTO.png",
            demo: "/wedding/imagen/modelo-1/modelo-eucalipto.html",
            buy: "/wedding/imagen/modelo-1/modelo-eucalipto.html"
        }
    ],
    "quinceanera-web": [
        {
            name: "Modelo Pop Star",
            image: "/quinceanera/web/Modelo-14/media/P1.png",
            gallery: [
                "/quinceanera/web/Modelo-14/media/P1.png",
                "/quinceanera/web/Modelo-14/media/P2.png",
                "/quinceanera/web/Modelo-14/media/P3.png"
            ],
            price: 699,
            demo: "https://modelopop.thetwodesign.com/?id=1",
            buy: "/quinceanera/web/Modelo-14/modelo-pop-star.html"
        },
        {
            name: "Modelo Champagne",
            image: "/quinceanera/web/Modelo-13/media/CH1.png",
            gallery: [
                "/quinceanera/web/Modelo-13/media/CH1.png",
                "/quinceanera/web/Modelo-13/media/CH2.png",
                "/quinceanera/web/Modelo-13/media/CH3.png"
            ],
            price: 699,
            demo: "https://modelochampagne.thetwodesign.com/?id=1",
            buy: "/quinceanera/web/Modelo-13/modelo-champagne.html"
        },
        {
            name: "Modelo Coquette",
            image: "/quinceanera/web/Modelo-12/media/CO1.png",
            gallery: [
                "/quinceanera/web/Modelo-12/media/CO1.png",
                "/quinceanera/web/Modelo-12/media/CO2.png",
                "/quinceanera/web/Modelo-12/media/CO3.png"
            ],
            price: 699,
            demo: "https://modelocoquette.netlify.app/?id=5",
            buy: "/quinceanera/web/Modelo-12/modelo-coquette.html"
        },
        {
            name: "Modelo Mar",
            image: "/quinceanera/web/Modelo-11/media/MAR1.png",
            gallery: [
                "/quinceanera/web/Modelo-11/media/MAR1.png",
                "/quinceanera/web/Modelo-11/media/MAR2.png",
                "/quinceanera/web/Modelo-11/media/MAR3.png"
            ],
            price: 699,
            demo: "https://misquince-mar.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-11/modelo-mar.html"
        },
        {
            name: "Modelo Rose",
            image: "/quinceanera/web/Modelo-10/media/R1.png",
            gallery: [
                "/quinceanera/web/Modelo-10/media/R1.png",
                "/quinceanera/web/Modelo-10/media/R2.png",
                "/quinceanera/web/Modelo-10/media/R3.png"
            ],
            price: 699,
            demo: "https://modelorose.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-10/modelo-rose.html"
        },
        {
            name: "Modelo La Princesa y el Sapo",
            image: "/quinceanera/web/Modelo-9/media/PS1.png",
            gallery: [
                "/quinceanera/web/Modelo-9/media/PS1.png",
                "/quinceanera/web/Modelo-9/media/PS2.png",
                "/quinceanera/web/Modelo-9/media/PS3.png"
            ],
            price: 699,
            demo: "https://modeloprincesayelsapo.thetwodesign.com/?id=1",
            buy: "/quinceanera/web/Modelo-9/modelo-princesa-y-el-sapo.html"
        },
        {
            name: "Modelo Acuarela",
            image: "/quinceanera/web/Modelo-8/media/A1.png",
            gallery: [
                "/quinceanera/web/Modelo-8/media/A1.png",
                "/quinceanera/web/Modelo-8/media/A2.png",
                "/quinceanera/web/Modelo-8/media/A3.png"
            ],
            price: 699,
            demo: "https://misquincedeacuarela.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-8/modelo-acuarela.html"
        },
        {
            name: "Modelo Musical",
            image: "/quinceanera/web/Modelo-7/media/AM1.png",
            gallery: [
                "/quinceanera/web/Modelo-7/media/AM1.png",
                "/quinceanera/web/Modelo-7/media/AM2.png",
                "/quinceanera/web/Modelo-7/media/AM3.png"
            ],
            price: 699,
            demo: "https://modelomusical.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-7/modelo-musical.html"
        },
        {
            name: "Modelo Bella",
            image: "/quinceanera/web/Modelo-6/media/BEL1.png",
            gallery: [
                "/quinceanera/web/Modelo-6/media/BEL1.png",
                "/quinceanera/web/Modelo-6/media/BEL2.png",
                "/quinceanera/web/Modelo-6/media/BEL3.png"
            ],
            price: 699,
            demo: "https://modelobella.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-6/modelo-bella.html"
        },
        {
            name: "Modelo Cenicienta",
            image: "/quinceanera/web/Modelo-5/media/C1.png",
            gallery: [
                "/quinceanera/web/Modelo-5/media/C1.png",
                "/quinceanera/web/Modelo-5/media/C2.png",
                "/quinceanera/web/Modelo-5/media/C3.png"
            ],
            price: 699,
            demo: "https://misquine-cenicienta.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-5/modelo-cenicienta.html"
        },
        {
            name: "Modelo Blossom",
            image: "/quinceanera/web/Modelo-4/media/B1.png",
            gallery: [
                "/quinceanera/web/Modelo-4/media/B1.png",
                "/quinceanera/web/Modelo-4/media/B2.png",
                "/quinceanera/web/Modelo-4/media/B3.png"
            ],
            price: 699,
            demo: "https://misquinceadria.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-4/modelo-blossom.html"
        },
        {
            name: "Modelo Mariposa",
            image: "/quinceanera/web/Modelo-3/media/M1.png",
            gallery: [
                "/quinceanera/web/Modelo-3/media/M1.png",
                "/quinceanera/web/Modelo-3/media/M2.png",
                "/quinceanera/web/Modelo-3/media/M3.png"
            ],
            price: 699,
            demo: "https://misquince-fridasofia.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-3/modelo-mariposa.html"
        },
        {
            name: "Modelo Rodeo",
            image: "/quinceanera/web/Modelo-2/media/ROD1.png",
            gallery: [
                "/quinceanera/web/Modelo-2/media/ROD1.png",
                "/quinceanera/web/Modelo-2/media/ROD2.png",
                "/quinceanera/web/Modelo-2/media/ROD3.png"
            ],
            price: 699,
            demo: "https://misquince-belen.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-2/modelo-rodeo.html"
        },
        {
            name: "Modelo Rosas",
            image: "/quinceanera/web/Modelo-1/media/R1.png",
            gallery: [
                "/quinceanera/web/Modelo-1/media/R1.png",
                "/quinceanera/web/Modelo-1/media/R2.png",
                "/quinceanera/web/Modelo-1/media/R3.png"
            ],
            price: 699,
            demo: "https://misquince-alondra.netlify.app/?id=1",
            buy: "/quinceanera/web/Modelo-1/modelo-rosas.html"
        }
    ],
    "quinceanera-video": [
        {
            name: "Modelo Mariposa",
            image: "/quinceanera/video/images/PORTADA-MARIPOSA.png",
            demo: "/quinceanera/video/modelo-1/modelo-mariposa.html",
            buy: "/quinceanera/video/modelo-1/modelo-mariposa.html"
        }
    ],
    "quinceanera-pdf": [
        {
            name: "Modelo Olivo",
            image: "/quinceanera/pdf/images/PORTADA-OLIVO.png",
            theme: "floral",
            format: "PDF",
            demo: "/quinceanera/pdf/Modelo-1/modelo-olivo.html",
            buy: "/quinceanera/pdf/Modelo-1/modelo-olivo.html"
        }
    ],
    "quinceanera-imagen": [
        {
            name: "Modelo Pink",
            image: "/quinceanera/imagen/images/PORTADA-PINK.png",
            demo: "/quinceanera/imagen/modelo-1/modelo-pink.html",
            buy: "/quinceanera/imagen/modelo-1/modelo-pink.html"
        }
    ],
    "celebraciones-web": [
        {
            name: "Modelo Gatsby",
            image: "/celebraciones/web/Modelo-4/media/G1.png",
            gallery: [
                "/celebraciones/web/Modelo-4/media/G1.png",
                "/celebraciones/web/Modelo-4/media/G2.png",
                "/celebraciones/web/Modelo-4/media/G3.png"
            ],
            theme: "classic",
            format: "Web",
            price: 699,
            demo: "https://modelogatsby.thetwodesign.com/?id=1",
            buy: "/celebraciones/web/Modelo-4/modelo-gatsby.html"
        },
        {
            name: "Modelo Black",
            image: "/celebraciones/web/Modelo-3/media/B1.png",
            gallery: [
                "/celebraciones/web/Modelo-3/media/B1.png",
                "/celebraciones/web/Modelo-3/media/B2.png",
                "/celebraciones/web/Modelo-3/media/B3.png"
            ],
            theme: "classic",
            format: "Web",
            price: 699,
            demo: "https://modeloblack.thetwodesign.com/?id=1",
            buy: "/celebraciones/web/Modelo-3/modelo-black.html"
        },
        {
            name: "Modelo Sun",
            image: "/celebraciones/web/Modelo-1/media/S1.png",
            gallery: [
                "/celebraciones/web/Modelo-1/media/S1.png",
                "/celebraciones/web/Modelo-1/media/S2.png",
                "/celebraciones/web/Modelo-1/media/S3.png"
            ],
            theme: "festive",
            format: "Web",
            price: 699,
            demo: "https://missesenta-maura.netlify.app/",
            buy: "/celebraciones/web/Modelo-1/modelo-sun.html"
        },
        {
            name: "Modelo Fabulous",
            image: "/celebraciones/web/Modelo-2/media/F1.png",
            gallery: [
                "/celebraciones/web/Modelo-2/media/F1.png",
                "/celebraciones/web/Modelo-2/media/F2.png",
                "/celebraciones/web/Modelo-2/media/F3.png"
            ],
            theme: "festive",
            format: "Web",
            price: 699,
            demo: "https://lilys50th-and-fabulous.netlify.app/",
            buy: "/celebraciones/web/Modelo-2/modelo-fabulous.html"
        }
    ],
    "celebraciones-video": [
        {
            name: "Modelo Golden",
            image: "/celebraciones/video/images/PORTADA-GOLDEN.png",
            theme: "festive",
            format: "Video",
            demo: "/celebraciones/video/modelo-1/modelo-golden.html",
            buy: "/celebraciones/video/modelo-1/modelo-golden.html"
        }
    ],
    "celebraciones-pdf": [
        {
            name: "Modelo Sweet Pink",
            image: "/celebraciones/pdf/images/PORTADA-SWEET PINK.png",
            demo: "/celebraciones/pdf/Modelo-1/modelo-sweetpink.html",
            buy: "/celebraciones/pdf/Modelo-1/modelo-sweetpink.html"
        }
    ],
    "celebraciones-imagen": [
        {
            name: "Modelo Bautizo Mocha",
            image: "/celebraciones/imagen/images/PORTADA-BAUTIZO DANIEL.png",
            demo: "/celebraciones/imagen/modelo-1/modelo-bautizo.html",
            buy: "/celebraciones/imagen/modelo-1/modelo-bautizo.html"
        },
        {
            name: "Modelo Cumple Astronauta",
            image: "/celebraciones/imagen/images/PORTADA-CUMPLE 5 DIEGO.png",
            demo: "/celebraciones/imagen/modelo-2/modelo-cumple.html",
            buy: "/celebraciones/imagen/modelo-2/modelo-cumple.html"
        },
        {
            name: "Modelo Baby Shower Safari",
            image: "/celebraciones/imagen/images/PORTADA-BABYSHOWER JUAN ANDRES.png",
            demo: "/celebraciones/imagen/modelo-3/modelo-babyshower.html",
            buy: "/celebraciones/imagen/modelo-3/modelo-babyshower.html"
        }
    ]
};
