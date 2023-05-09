const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

window.addEventListener('load', dayNightMode)


input.addEventListener('keydown', function(event){
  if(event.key === 'Enter')
     loadImg();
})

function loadImg(){
    removeImage();

    const url = 'https://api.unsplash.com/photos/?client_id=SouHY7Uul_OxoMl-OxoMl3LL3c0NkxUtjIrKwf3tsGkJaiVo';
    

    fetch(url)

    .then(response =>{
        if (response.ok)
            return response.json();
        else
           alert(response.status)           
    })
    
    .then(data =>{
        const imageNodes = [];
        for(let i = 0; i < data.results.length;i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imageNodes[i].addEventListener('dblclick',
            function(){
                windows.open(data.results[i].links.download,
                '_blank');
            })
            grid.appendChild(imageNodes[]);
        }
    })
}

function removeImage(){
    grid.innerHTML = '';
}

function dayNightMode(){
    const date = new Date();
    const hour = date.getHours ();
    
    if(hour >= 7 && hour <= 19){
       document.body.style.backgroundColor =
       'whitesmoke';
       document.body.style.color = 'black'; 
    }
    else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } 
   
}

