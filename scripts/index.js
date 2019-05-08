// Generate random background color + complimentary link-color
function random_color() {
    var v = Math.floor(Math.random()*6);
    /* var v = 0; */


    if(v==0) {
        //set background color
        document.body.style.backgroundColor = '#00ff00';

        $(document).ready(function(){
            //set complimentary color for "a" elements
            $("a").css("color", "#ff0000");
            $("p").css("color", "#ff0000");
            //set complimentary color for "a" elements on hoover
            $("a").hover(function(){
                $(this).css("background-color", "#ff0000");
            }, function(){
                $(this).css("background-color", "");
            });

            /*
            $("#test").hover(function(){
                $("p").html("Reload");
            }, function(){
                $(this).css("background-color", "");
                $("p").html("");

            });*/
        });

    }
    else if(v==1){
        //set background color
        document.body.style.backgroundColor = '#ff0000';

        $(document).ready(function(){
            //set complimentary color for "a" elements
            $("a").css("color", "#00ff00");
            //set complimentary color for "a" elements on hoover
            $("a").hover(function(){
                $(this).css("background-color", "#00ff00");
            }, function(){
                $(this).css("background-color", "");
            });
        });
    }
    else if(v==2) {
        //set background color
        document.body.style.backgroundColor = '#0000ff';

        $(document).ready(function(){
            //set complimentary color for "a" elements
            $("a").css("color", "#ff7b00");
            //set complimentary color for "a" elements on hoover
            $("a").hover(function(){
                $(this).css("background-color", "#ff7b00");
            }, function(){
                $(this).css("background-color", "");
            });
        });
    }
    else if(v==3) {
        //set background color
        document.body.style.backgroundColor = '#ff7b00';

        $(document).ready(function(){
            //set complimentary color for "a" elements
            $("a").css("color", "#0000ff");
            //set complimentary color for "a" elements on hoover
            $("a").hover(function(){
                $(this).css("background-color", "#0000ff");
            }, function(){
                $(this).css("background-color", "");
            });
        });
    }
    else if(v==4) {
        //set background color
        document.body.style.backgroundColor = '#ffff00';

        $(document).ready(function(){
            //set complimentary color for "a" elements
            $("a").css("color", "#ff00ff");
            //set complimentary color for "a" elements on hoover
            $("a").hover(function(){
                $(this).css("background-color", "#ff00ff");
            }, function(){
                $(this).css("background-color", "");
            });
        });
    }
    else if(v=5) {
        //set background color
        document.body.style.backgroundColor = '#ff00ff';

        $(document).ready(function(){
            //set complimentary color for "a" elements
            $("a").css("color", "#ffff00");
            //set complimentary color for "a" elements on hoover
            $("a").hover(function(){
                $(this).css("background-color", "#ffff00");
            }, function(){
                $(this).css("background-color", "");
            });
        });
    }

    // console.log(v);
}

random_color();

