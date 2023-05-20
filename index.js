// [
//     { slot: 1,  type: {name:  "grass", url: "https://pokeapi.co/api/v2/type/12/"}},
//     { slot: 2,  type: {name: "poison", url: "https://pokeapi.co/api/v2/type/4/"}},
//  ];

 //["grass", "poison"];

//  console.log( 
//     [
//         { slot: 1,  type: {name:  "grass", url: "https://pokeapi.co/api/v2/type/12/"}},
//         { slot: 2,  type: {name: "poison", url: "https://pokeapi.co/api/v2/type/4/"}},
//         { slot: 1,  type: {name:  "fire", url: "https://pokeapi.co/api/v2/type/12/"}},
//      ].map(v => v.type.name)
//  )

const $searchForm = $("form")



$searchForm.on('submit', event => {
    
    //prevents the page from refreshing when you hit submit
    event.preventDefault()

    //set up API variable to call the info from the webpage
    //GENERATE DATA FROM THE TARGET OBJECT
    const formData = new FormData(event.target);
    const pokemon = formData.get('pokemon').toLowerCase();
    // add toLoweCase so anyway you type it, it generate search result

   // console what you want to see when you search
   // url from API + pokemon you search
   // GER THE VALUE FROM THE GENERATED DATA WHERE TE NAME VALUE IS "POKEMON"
   // 2 different ways
   
    //const url = "https://pokeapi.co/api/v2/"
    // console.log(url + pokemon)
            //OR
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
    console.log(url)

    
    const $screen = $('.screen')
    const $result = $('.result')

    //razzle dazzle
    $screen.empty();
    
    //empty out the field
    $(`[name="pokemon"]`)[0].value = "";
    $result.html(`<div>Loading...</div>`)

   
    
    // $.ajax(url)
    //     .then(response => console.log(response))

            //OR//

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $screen.html(`<img src=${data.sprites.front_default} alt=${data.name}>`)
            $result.html(`
            <div>
                <b>name:&nbsp;</b>${data.name}
            </div>
            <div>
                <b>id:&nbsp;</b> ${data.id}
            </div>
            <div>
                <b>weight:&nbsp;</b>${data.weight}
            </div>
            <div>
                <b>type:&nbsp;</b> ${data.types.map(v => v.type.name)}
            </div>
            `)
        })
        // catch typos with an error message
        .catch(() => {
            $result.html(`<div> there was an error...</div>`)
        })

        //(data) can be called anything you want. I can name it Aubrey and it will still console the whole thing

       


});