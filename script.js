const Eyes_On = document.getElementById("eyes-on");
const Eyes_Off = document.getElementById("eyes-off");

const body = document.querySelector("body");

const Div_Login = document.getElementById("Div-Login");

const Input_Email = document.getElementById("Input-Email");
const Input_Password = document.getElementById("Input-Password");
     
const Connect_Friends = document.getElementById('Connect-Friends')
const Create_Page = document.getElementById('Create-page')


const Click_Eyes_On = () => {
  Eyes_On.style.display = "block" 
    Eyes_Off.style.display = "contents";
    Eyes_On.style.backgroundColor = "#F3F3F3"

    body.style.backgroundColor = "#292929";

    Div_Login.style.backgroundColor = "#292929";

    Input_Email.style.backgroundColor = "#292929";
    Input_Password.style.backgroundColor = "#292929";
    
    Input_Email.style.color = "#F3F3F3"
    Input_Password.style.color = "#F3F3F3"


    Connect_Friends.style.color = "#F3F3F3"
    Create_Page.style.color = "#F3F3F3"
  };

Eyes_Off.addEventListener("click", Click_Eyes_On);

const Click_Eyes_Off = () => {
  Eyes_On.style.display = "contents" 
    Eyes_Off.style.display = "block";

    body.style.backgroundColor = "#DBDBDB";

    Div_Login.style.backgroundColor = "#F3F3F3";

    Input_Email.style.backgroundColor = "#F3F3F3";
    Input_Password.style.backgroundColor = "#F3F3F3";


    
    Input_Email.style.color = "#000000"
    Input_Password.style.color = "#000000"

    Connect_Friends.style.color = "#000000"
    Create_Page.style.color = "#000000"
};

Eyes_On.addEventListener("click", Click_Eyes_Off);