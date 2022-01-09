const main = document.querySelector("main");
let exerciseArray = [
    {pic : 0, minute :1},
    {pic : 1, minute :1},
    {pic : 2, minute :1},
    {pic : 3, minute :1},
    {pic : 4, minute :1},
    {pic : 5, minute :1},
    {pic : 6, minute :1},
    {pic : 7, minute :1},
    {pic : 8, minute :1},
    {pic : 9, minute :1}
]; // this table contains all type of exercises

//this class generates exercises
class Exercise{

}

// this Object contain all project's functions 
const Utils = {

    contentPage : function(title, content, btn){
        document.querySelector("h1").innerHTML = title;
        main.innerHTML =content;
        document.querySelector(".btn-container").innerHTML = btn
    }
}

// this Object contain different page (settings, routine, ended)
const Page = {

    // start page
    lobby : function(){
        let mapArray = exerciseArray.map((exo) =>
            `
                <li>
                    <div class="card-header">
                        <input type="number" id=${exo.pic} min ="1" max="10" value=${exo.minute}>
                        <span>min</span>
                    </div>
                    <img src="./img/${exo.pic}.png">
                    <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
                    <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
                </li>
            `
        ).join("");

        Utils.contentPage(
            "Settings <i id='reboot' class='fas fa-undo'></i>",
            "<ul>"+mapArray+"</ul>",
            "<button id='start'>Get started<i class='far fa-play-circle'></i></button>"
        );
    },

    // routine page
    routine : function(){
        Utils.contentPage(
            "Routine",
            "Exercises with Chrono", 
            null
        )    
    },

    // finish page
    finish : function(){
        Utils.contentPage(
            "Congratulations It's Over !",
            "<button id='start'>Restart</button>",
            "<button id='reboot' class='btn-reboot'>Reset<i class='fas fa-times-circle'></i></button>"
        )
        
    }
}
Page.lobby();