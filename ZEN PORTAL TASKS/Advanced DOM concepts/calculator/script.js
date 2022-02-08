let screen = document.querySelector('.screen');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (value) => {
        switch(value.target.innerText){
            case 'C':
                screen.innerText = '';
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = "Error"
                }
                break;
            case '←':
                if (screen.innerText){
                   screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            default:
                screen.innerText += value.target.innerText;
        }
    });
});