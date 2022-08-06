let display = document.querySelector(".display");
let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons)

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