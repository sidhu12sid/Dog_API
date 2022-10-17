function myFunction(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) =>{
        createList(data);
        console.log(data);
    });
}

function createList(data){
    const que = Object.keys(data.message);
    const mainDiv = document.createElement('div') //main div of the element
    const listDiv = document.createElement('div');
    const mainUl = document.createElement('ul');
    let imgDiv = document.createElement('div')
    imgDiv.setAttribute('style','padding:50px')
    for(let i = 0; i<que.length; i++){
        const mainLi = document.createElement('div');

        //proprties of the div element
        mainLi.setAttribute('style', 'width:300px; height:50px');
        const url = "https://dog.ceo/api/breed/" + que[i] + "/images/random"
        const btn = document.createElement('button');
        btn.setAttribute('style', 'width:300px; height:50px; font-size:20px');//properties of the bread button element
        btn.innerHTML =  que[i];

        mainDiv.appendChild(listDiv)
        listDiv.appendChild(mainUl); 
        mainUl.appendChild(mainLi);
        mainLi.appendChild(btn);
        mainDiv.setAttribute('style', 'display:flex')
        //button for fetching the image data
        btn.addEventListener('click', function() { 
            fetch(url)
            .then((res)=> res.json())
            .then((img)=>{
                console.log(img);
                const image = document.getElementById("hello");
                //properties of the image element
                image.src = img.message;
                imgDiv.appendChild(image);
                mainDiv.append(imgDiv);
                
            })
        })
        
    }  
    // document.body.appendChild(listDiv);
    document.body.appendChild(mainDiv);
}



 