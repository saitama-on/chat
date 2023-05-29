
let color_btn = document.getElementById("back_color");
let sel_this = document.getElementById("select_btn");

addEventListener('input', () => {

    
    let back_color = document.getElementById("back_color").value;
    document.getElementsByTagName("body")[0].style.backgroundColor = back_color ;

    document.getElementById("color_value").textContent = back_color ;
})


function save_color(){

    color_btn.disabled = true ;
    sel_this.disabled = true ;


}

function reset_1(){

   
   color_btn.disabled = false ;
sel_this.disabled = false ;
document.getElementsByTagName("body")[0].style.backgroundColor = '#ffffff';

}