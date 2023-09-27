const section = document.querySelector(`section`);
const playerLivesCount = document.querySelector(`span`);
let playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () =>[
    { imgSrc: "./images/beatles.jpeg", name: "beatles"},
    { imgSrc: "./images/blink182.jpeg", name: "blink182"},
    { imgSrc: "./images/fkatwigs.jpeg", name: "fkatwigs"},
    { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood"},
    { imgSrc: "./images/joy-division.jpeg", name: "joy-division"},
    { imgSrc: "./images/ledzep.jpeg", name: "ledzep"},
    { imgSrc: "./images/metallica.jpeg", name: "metallica"},
    { imgSrc: "./images/pinkfloyd.jpeg", name: "pinkfloyd"},
    { imgSrc: "./images/beatles.jpeg", name: "beatles"},
    
    { imgSrc: "./images/blink182.jpeg", name: "blink182"},
    { imgSrc: "./images/fkatwigs.jpeg", name: "fkatwigs"},
    { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood"},
    { imgSrc: "./images/joy-division.jpeg", name: "joy-division"},
    { imgSrc: "./images/ledzep.jpeg", name: "ledzep"},
    { imgSrc: "./images/metallica.jpeg", name: "metallica"},
    { imgSrc: "./images/pinkfloyd.jpeg", name: "pinkfloyd"},

];

const data = getData();

const randomize = () =>{
    const cardData = getData();
    cardData.sort(() => Math.random()-0.5);
    return cardData;
};
randomize();


// Card generator function

const cardGenerator = () => {
    const cardData = randomize();
    // generate html
    const cards = document.querySelectorAll(".card");
    cardData.forEach ((item) => {
        const card  = document.createElement("div");
        const face = document.createElement('img');
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
    // /attatch info cards
    face.src =  item.imgSrc; 
    card.setAttribute('name', item.name);   

         
        // attatch cards to section
        section.appendChild(card);
        card.appendChild(face)
        card.appendChild(back);

        card.addEventListener('click',(e) =>{
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
        
    });
  
};

 const checkCards =(e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    // logic
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
            console.log("match");
            flippedCards.forEach((cards) =>{
                cards.classList.remove("flipped");
                cards.style.pointerEvents = "none";
            })
        }
        else{
            console.log("wrong")
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0){
                restart( "Play Again.!");
            }
        }
 
        };
    }
 
    const restart = (text) => {
        let cardData = randomize();
        let faces = document.querySelectorAll(".face");
        let cards = document.querySelectorAll(".cards");
        section.style.pointerEvents = "none";
        cardData.forEach((item, index) => {
            cards[index].classList.remove("toggleCard");
         setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name",item.name);
            section.style.pointerEvents = "all";
         },1000)
        }
        )};
        
        playerLives = 6;
        playerLivesCount.textContent = playerLives;
        setTimeout(() => window.alert(text), 100)
    
cardGenerator();
