let pic= document.getElementById("i1")
console.log(pic);
let x=0;
let arr = [];

function getMousePosition(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            //console.log("x y", event.clientX, event.clientY)
            let x = (event.clientX - rect.left)*(1920/600);
            let y = (event.clientY - rect.top)*(1080/400);
            arr.push(x);
            arr.push(y);
            console.log("Coordinate x: " + x, 
                        "Coordinate y: " + y);
        }


 pic.addEventListener("mousedown", (e) =>
        {
            if(x<4)
              {
                x++;
                getMousePosition(pic, e);    
              }
            if(x==4)
              {
               console.log("X: ", arr[0], arr[2], arr[4], arr[6]);
               console.log("Y: ", arr[1], arr[3], arr[5], arr[7]);
              }
        });
