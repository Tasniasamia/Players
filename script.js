const nofound=document.getElementById("not_result");

const fetch1=async(Search_player)=>{
    const url=`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${Search_player}`;
    const res=await fetch(url);
    const data=await res.json();
    console.log(data.player);
    // if(data.player !== null){
        display(data.player)
    // }
    // else{
    //     nofound.classList.remove('d-none');
    // }
    // ;
    document.getElementById('input_field').value="";
}
// fetch1("Messi");




const display=(dataAll)=>{
   
   

    
    const container=document.getElementById("div_container");
    container.innerText=" ";


   
    dataAll.forEach(index=>{
        
     const div=document.createElement('div');
     div.innerHTML=`
     
     <div class="col">
              <div class="card h-100">
                <img src="${index.strThumb?index.strThumb:"https://picsum.photos/500/300?random=3"}"style="height:300px;" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${index.strPlayer}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button onclick="myfunction(${index.idPlayer})"    type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Details
                </button>
                  </div>
              </div>
            </div>
           
     `
     container.appendChild(div);
    }) 
    load(false);
}




document.getElementById("search_btn").addEventListener('click',function(){
    load(true);
    const inputvalue=document.getElementById('input_field');

    //INPUT TEXTBOX E HABIJABI KICU DILE
  

    // if(inputvalue.value === ""){
    //     nofound.classList.remove('d-none');
        
    // }
    // else{
    //     nofound.classList.add('d-none');
        fetch1(inputvalue.value);
    // }
   
})


//loading_button
function load(loadvalue){
    if(loadvalue==true){
document.getElementById('ldbtn').classList.remove('d-none');
    }
    else{
        document.getElementById('ldbtn').classList.add('d-none');

    }
}







const myfunction=async(playerid)=>{
const url2=`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${playerid}`
const res=await fetch(url2);
const data=await res.json();
display2(data.players[0]);
}
const display2=(datas)=>{
    document.getElementById('staticBackdropLabel').innerText=`${datas.strPlayer
    }`;
    document.getElementById('mbody').innerHTML=`
    <p>${datas.strDescriptionEN?datas.strDescriptionEN:"No describtion" }</p>
    <p><b>Location:</b> ${datas.strBirthLocation}</p>
    <p><b>Nationality:</b> ${datas.strNationality
    }
    
    `
}