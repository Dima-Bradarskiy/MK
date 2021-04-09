const scorpion = {
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["Knife","Blade"],
    attack: function() {
        console.log(scorpion.name + " Fight....");
    }
};
scorpion.attack();


const sonya = {
    name: "Sonya",
    hp: 60,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["Knife","Blade"],
    attack: function() {
        console.log(sonya.name + " Fight....");
    }
};
sonya.attack();

function createPlayer(player , pers) {
    const player1 = document.createElement('div');
    player1.classList.add(player);
    

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    player1.appendChild(progressbar);


    const character = document.createElement('div');
    character.classList.add('character');
    player1.appendChild(character);


    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = pers.hp + '%';
    progressbar.appendChild(life);


    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = pers.name;
    progressbar.appendChild(name);

    const img = document.createElement('img');
    img.src = pers.img;
    character.appendChild(img);

    const arena = document.querySelector('.arenas');
    arena.appendChild(player1);
}
createPlayer('player1', scorpion);
createPlayer('player2', sonya);