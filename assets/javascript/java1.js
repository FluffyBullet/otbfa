// let button = document.getElementById('replay');

// button.addEventListener('click',draw());

// button.addEventListener('click', draw());
let p1class = document.getElementById('p1selection');
let p2class = document.getElementById('p2selection');
let deck = document.getElementById('create');

function draw(){
    let title = document.getElementsByTagName('h1')[0];
    let matha = parseInt(Math.random()*10)+1;
    let mathb = parseInt(Math.random()*10)+1;
    let mathc = parseInt(Math.floor(Math.random()*10)+1);

    if (matha==1){
        p1class.textContent=`Colorless`;
    } else if(matha==2){
        p1class.textContent=`Fire`;
    } else if(matha==3){
        p1class.textContent=`Fighting`;
    } else if(matha==4){
        p1class.textContent=`Dragon`;
    } else if(matha==5){
        p1class.textContent=`Electric`;
    } else if(matha==6){
        p1class.innerHMTL=`Leaf`;
    } else if(matha==7){
        p1class.textContent=`Water`;
    } else if (matha==8){
        p1class.textContent=`Psychic`;
    } else if (matha==9){
        p1class.textContent=`Dark`;
    } else if (matha==10){
        p1class.textContent=`Steel`;
    }

    if (mathb==1){
        p2class.textContent=`Colorless`;
    } else if (mathb==2){
        p2class.textContent=`Fire`;
    } else if (mathb==3){
        p2class.textContent=`Fighting`;
    } else if (mathb==4){
        p2class.textContent=`Dragon`;
    } else if (mathb==5){
        p2class.textContent=`Electric`;
    } else if (mathb==6){
        p2class.innerHMTL=`Leaf`;
    } else if (mathb==7){
        p2class.textContent=`Water`;
    } else if (mathb==8){
        p2class.textContent=`Psychic`;
    } else if (mathb==9){
        p2class.textContent=`Dark`;
    } else if (mathb==10){
        p2class.textContent=`Steel`;
    }

    if ( mathc <= 5) {
        deck.textContent = `Create a New Deck`;
    } else if (mathc > 6){
        deck.textContent = `Use a saved deck`;
}
}