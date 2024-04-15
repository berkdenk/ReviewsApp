const reviews = [
    {
        id: 1,
        name: "Berk",
        job: 'Web Developer',
        image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
        text: "Id 1."
    },
    {
        id: 2,
        name: "Ayşe",
        job: 'Backend Developer',
        image: "https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg",
        text: "id 2."
    },
    {
        id: 3,
        name: "Can",
        job: 'Frontend Developer',
        image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
        text: "id 3."
    }
];

//select items
const img=document.querySelector('.img-container img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');

const prevBtn=document.getElementById('prev-button');
const nextBtn=document.getElementById('next-button');
const randomBtn=document.getElementById('random-btn');

//set starting item
let currentItem = 0;

//load initial state
window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
});

function showPerson(person){
    const item=reviews[person];
    img.src=item.image;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

nextBtn.addEventListener('click',function(){
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click',function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
