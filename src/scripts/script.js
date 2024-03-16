const main = (()  =>     {
    let selectedButton = null;
    let changeBack;
    const states = {
        //filtra os botões por meio de um ID inserido no html.
        documents: {
            firstBtn: document.getElementById('primeiro__numero'),
            secondBtn: document.getElementById('segundo__numero'),
            thirdBtn: document.getElementById('terceiro__numero'),
            fourthBtn: document.getElementById('quarto__numero'),
            fifthBtn: document.getElementById('quinto__numero')
        },

        // Será o responsável por fazer a troca entre os containers
        container_handler: {
            switch: true,
        },

        // Aqui, teremos os containers
        containers: {
            mainPage: document.querySelector('.wrap__content__container'),
            thanksPage: document.querySelector('.switch__area__container'),

            turnOnMain: document.getElementById('turnOnMain'),
            turnOnThanks: document.getElementById('turnOnThanks')
        },

        content__change:    {
            rateNumber: document.querySelector('.selected__number')
        },

        btn: {
            btn: document.querySelector('.submit__forum__area'),
        }
    }

    const changeToMain = () => {
        
        changeBack = setTimeout(() => {
            states.container_handler.switch = false;
            checkSwitch();
        }, 3000);

        
        
    }

    const checkSwitch = () =>   {

        clearTimeout(changeBack);

        if(states.container_handler.switch === false)   {
            states.containers.turnOnMain.style.display = 'flex';
            states.containers.turnOnThanks.style.display = 'none';

            states.container_handler.switch = true;
        }else   {
            states.containers.turnOnThanks.style.display = 'flex';// Poderiamos ter uma função para este caso também. Ligar/Desligar. Na realidade, o ideal seria.

            states.containers.turnOnMain.style.display = 'none';

            changeToMain(); //Esta função será baseada em um timer.


        }
    }

    const checkClick = () =>    {
        
        states.btn.btn.addEventListener('click', () =>   {
            
            checkSwitch();
        })
    }
   

    const setCustomerRate = (clientValue) =>   {
        //aqui vamos pegar a avaliação do cliente, em têse, é para ser simples neste contexto. Sómente será necessário fazer o hardcode deles para uma variavel, por isso, o ideal é que esta função receba um parâmetro. Pesquise sobre parâmetros.       

        states.content__change.rateNumber.innerHTML = clientValue;

    }

    // o parametro carrega o evento.
    const colorButtons = (e) =>  {
        // A função tem como intuito colorir o botão pressionado, e armazenar o valor inserido na função set customerRate. Isto com base no parâmetro, este sendo o alvo do evento em questão
        
        // Como o selectedButton vai ser diferente de null e ter o valor antigo do alvo, ele vai ]apagar o conteúdo anterior.

        if(selectedButton !== null) {
            selectedButton.style.background = "";
        } 
        
        e.style.background = "#a47c1e";
        selectedButton = e;

        setCustomerRate(e.innerHTML);


        /*Abaixo, existe outro modo um tanto menos eficaz, no contexto atual, funcionaria. Mas em diferentes escalas, seria ruim devido a quantidade. 50 botões, por exemplo. */
        // states.documents.firstBtn.style.background = '';
        // states.documents.secondBtn.style.background = '';
        // states.documents.thirdBtn.style.background = '';
        // states.documents.fourthBtn.style.background = '';
        // states.documents.fifthBtn.style.background = '';

        // e.style.background = 'orange';
        
    }

    const setListeners = () => {
        //e significa evento, mas pode ser qualquer coisa.
        
        states.documents.firstBtn.addEventListener("click", (e) => {
            
            colorButtons(e.target); //Filtra o alvo( Neste caso sendo o html definido )
        })
        states.documents.secondBtn.addEventListener("click", (e) => {
            colorButtons(e.target);
        })
        states.documents.thirdBtn.addEventListener("click", (e) => {
            colorButtons(e.target);
        })
        states.documents.fourthBtn.addEventListener("click", (e) => {
            colorButtons(e.target);
        })
        states.documents.fifthBtn.addEventListener("click", (e) => {
            colorButtons(e.target);
        })

         //para não repetirmos, faremos uma função que receberá o alvo do evento.
    }
    setListeners();
    checkClick();
    

})(); // essa estrutura:

/*
const main = (() => {

})()

Indica uma função que se auto executa. 

Lembre: Function assobiar() {
    imprima_tela('fiuuuu');
}

*assobiar()* Assim, se faz a execução da mesma. Única diferença que estou usando um conceito chamado de arrow functions.

Segue o Link: https://www.w3schools.com/js/js_arrow_function.asp
*/