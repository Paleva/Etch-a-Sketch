
function createGrid(size){

    if(size > 100) return alert("too big");

    for(let i = 0; i < size; i++){
        const secondaryContainer = document.createElement("div");
        secondaryContainer.style.display = "flex";
        secondaryContainer.style.flexWrap = "wrap";
        secondaryContainer.style.flexDirection = "column";
        for(let j = 0; j < size; j++){
            const div = document.createElement("div");
            div.classList.add("square");
            div.style.flex = "1 1 1";
            div.style.border = "1px solid black";
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.backgroundColor = "white";
            div.addEventListener("mouseover", function(){
                if(div.style.backgroundColor === "black"){
                    div.style.opacity = parseFloat(div.style.opacity) + 0.1; 
                }
                else{
                    div.style.backgroundColor = "black";
                    div.style.opacity += 0.05; 
                }
                // const HEX_COLOR = Math.floor(Math.random()*16777215).toString(16);
                // div.style.backgroundColor = "#" + HEX_COLOR;
            })
            secondaryContainer.appendChild(div);
        }
        mainContainer.appendChild(secondaryContainer);
    }   
}

const mainContainer = document.querySelector(".container");
const input = document.querySelector("#prompt-input");
const button = document.querySelector(".regenerate-btn");
button.addEventListener("click", function(){
    if(!mainContainer.hasChildNodes){
        createGrid(input.value);
    }
    else{
        mainContainer.replaceChildren();
        createGrid(input.value);
    }
});
