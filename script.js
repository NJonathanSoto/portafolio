// SCRIPT

// Evento que va a aumentar el tamaño de los iconos de las redes

const botonContacto = document.querySelector('.link-contacto');

    botonContacto.addEventListener('click', () => {

        document.querySelector('.red-facebook').classList.add('clase-redes');

            setTimeout(() => {

                document.querySelector('.red-facebook').classList.remove('clase-redes');
            }, 1500);

        document.querySelector('.red-linkedin').classList.add('clase-redes');

            setTimeout(() => {

                document.querySelector('.red-linkedin').classList.remove('clase-redes');
            }, 1500);
    });

// Evento que va a cambiar el color de los links en la barra de navegación al azar

const links = document.querySelectorAll('li a');

    links.forEach(link => {

        link.addEventListener('mouseover', () => {

            const numeroRandom = Math.floor(Math.random() * 9);

                if(numeroRandom == 0) {
                    link.style.background = 'plum';
                }
                if(numeroRandom == 1) {
                    link.style.background = 'mediumspringgreen';
                }
                if(numeroRandom == 2) {
                    link.style.background = 'orange';
                }
                if(numeroRandom == 3) {
                    link.style.background = 'cornflowerblue';
                }
                if(numeroRandom == 4) {
                    link.style.background = 'lemonchiffon';
                }
                if(numeroRandom == 5) {
                    link.style.background = 'indianred';
                }
                if(numeroRandom == 6) {
                    link.style.background = 'turquoise';
                }
                if(numeroRandom == 7) {
                    link.style.background = 'gold';
                }
                if(numeroRandom == 8) {
                    link.style.background = 'hotpink';
                }
            });

        link.addEventListener('mouseout', () => {

            link.style.background = 'white';
        });
    });