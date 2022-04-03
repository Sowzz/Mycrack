const persons = [

    {name:'Cybertrunck' ,categorie:'action'},
    {name:'Cybersex' ,categorie:'sex'},
    {name:'cybertruc' ,categorie:'rpg'},
    {name:'cybercool' ,categorie:'freedom'},
    {name:'cybermilf' ,categorie:'ph'},
    {name:'vichoucroute' ,categorie:'baka'},
    {name:'miam' ,categorie:'UwU'},
    {name:'admin' ,categorie:''},
    {name:'CyberPunk 2077' ,categorie:'action'},
];

const searchinput = document.getElementById('searchInput');

searchinput.addEventListener('keyup', function(){
    const input = searchinput.value;

    const result = persons.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    let suggestions = '';

    if(input !=''){
    result.forEach(resultItem =>
        suggestions +=`
            <div class="suggestions">${resultItem.name}</div>
            `
        )
    }

    document.getElementById('suggestions').innerHTML = suggestions;
})