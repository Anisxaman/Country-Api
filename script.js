const loadCountries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data));
}

loadCountries();


const displayCountries=countries=>{

    // console.log(countries);

    // for (const country of countries){
    //     // console.log(country);
    // }

        countries.forEach(country => {
            console.log(country);

            const countriesDiv=document.getElementById("section");

            const div=document.createElement('div');
             div.classList.add("col");
             div.innerHTML=
             `
              <div class="card">
                <img  height="200" src="${country.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${country.name}</h5>
                  <p>Population:${country.population}</p>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                
                <button onclick="buttonFun('${country.name}')" type="button" class="btn btn-danger  w-25 mx-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply </button>     
             
            </div>           
            `

            countriesDiv.appendChild(div);
        
    });

}

/* <button onclick="buttonFun(${country.name})" type="button" class="btn btn-danger w-25 mx-auto">Apply</button> */
/* <button onclick="buttonFun(${country.name})" type="button" class="btn btn-danger  w-25 mx-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply </button> */

// <button onclick="buttonFun()" type="button" class="btn btn-danger w-25 mx-auto">Apply</button>

const buttonFun=(info)=>{
    const url = `https://restcountries.eu/rest/v2/name/${info}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetail(data[0]));
   

}


const displayDetail=(data)=>{
    console.log("-------------------------------------------");
    console.log(data); 
    const modal=document.getElementById("modalShow");
 


    const language=languageElement=>{
        const output=[];
        
        languageElement.forEach(element => {
       
           console.log(element.name);
           output.push(element.name);
     });
  
     return output;


    }



    modal.innerHTML='';



            const div=document.createElement('div');
           


            div.classList.add('modal-content');
           
            // div.classList.add('modal-content');
            

            div.innerHTML=`
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
            <div class="modal-body">
                    <p><span>Region:</span>${data.region}</p>
                    
                    
                    <p><span>Capita:</span>${data.capital}</p>
                    <p><span>Language:</span> ${language(data.languages)}</p>
                    <p><span>Timezone:</span>${data.timezones}</p>
             </div>
             <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
            `


            modal.appendChild(div);
}


