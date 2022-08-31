let display = document.querySelector(".display");
//converting the object to Array
let buttons = Array.from(document.getElementsByClassName("button"));

//main caculator function
buttons.map( button => {
    button.addEventListener("click", (e)=>{
        switch (e.target.textContent) {
            case 'c':
                display.textContent = "";
                break;
            case '←':
                if(display.textContent){
                    display.textContent = display.textContent.slice(0, -1)
                }
                break;
            case '=':
                try{
                    display.textContent = eval(display.textContent)
                }catch{
                    display.textContent = "Error!"
                }
                break;
            default:
                display.textContent += e.target.textContent
                break;
        }
    })
})