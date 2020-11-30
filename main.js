var canvas = new fabric.Canvas("myCanvas");
var PX = 10;
var PY = 10;
var BH = 30;
var BW = 30;
var player_object = "";
var block_object = "";

function player_update() {

    fabric.Image.fromURL("player.png", function (Img)

        {

            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(160);
            player_object.set({

                top: PY,
                left: PX

            });
            canvas.add(player_object);
        }

    );

}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function (Img)

        {

            block_object = Img;
            block_object.scaleToWidth(BW);
            block_object.scaleToHeight(BH);
            block_object.set({

                top: PY,
                left: PX

            });
            canvas.add(block_object);
        }

    );

}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {

    keypress = e.keyCode;
    if (e.shiftKey == true && keypress == "80") {

        BH = BH + 10;
        BW = BW + 10;
        document.getElementById("current_width").innerHTML = BW;
        document.getElementById("current_height").innerHTML = BH;
        console.log("increament"); //"Shift" and "P" together

    }
    if (e.shiftKey == true && keypress == "77") {

        BH = BH - 10;
        BW = BW - 10;
        document.getElementById("current_width").innerHTML = BW;
        document.getElementById("current_height").innerHTML = BH;
        console.log("increament"); //"Shift" and "M" together

    }

    if (keypress == "37") {

        left();

    }

    if (keypress == "38") {

        up();

    }

    if (keypress == "39") {

        right();

    }

    if (keypress == "40") {

        down();

    }
    //ascii code for A is 65                 
    if (keypress == "76") {

        new_image("captain_america_left_hand.png");

    }

    if (keypress == "72") {

        new_image("hulk_legs.png");

    }

    if (keypress == "73") {

        new_image("ironman_face.png");

    }

    if (keypress == "83") {

        new_image("spiderman_body.png");

    }

    if (keypress == "84") {

        new_image("thor_right_hand.png");

    }

    

}

function up(){

if(PY>0){

PY=PY-BH;
canvas.remove(player_object);
player_update();

}

}

function down(){

    if(PY<400){
    
    PY=PY+BH;
    canvas.remove(player_object);
    player_update();
    console.log("down");
    
    }

    }

    function left(){

        if(PX>0){
        
        PX=PX-BW;
        canvas.remove(player_object);
        player_update();
        
        }

        }

        function right(){

            if(PX<800){
            
            PX=PX+BW;
            canvas.remove(player_object);
            player_update();
            
            }
    
            }