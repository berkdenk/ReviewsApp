// Veri nesnelerini oluşturma
const reviews = [{
    id: 1,
    name: "Berk",
    job:'Web Developer',
    image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mauris id lorem cursus scelerisque. Sed varius condimentum justo id vestibulum."
},
    {
    id: 2,
    name: "Ayşe",
    job:'Backend Developer',
    image: "https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris id augue sit amet justo fringilla porttitor non ac mi. Nullam in odio id purus consectetur egestas. Vivamus malesuada erat sit amet mauris congue, nec pellentesque neque molestie."
},
    {
    id: 3,
    name: "Can",
    job:'Frontend Developer',
    image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    text: "Fusce ut condimentum felis. Phasellus nec justo ultricies, molestie ipsum ut, dapibus eros. Integer aliquam turpis quis sem scelerisque sollicitudin. Phasellus vulputate, arcu eu finibus ultrices, enim tortor finibus lacus, vel gravida erat velit eget ligula."
}
];

const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');

const prevBtn=document.querySelector('.perv-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

//Set starting item
let currenItem=0;


//load initial item
window.addEventListener('DOMContentLoaded',function(){
    console.log('Shake and bake');
});
