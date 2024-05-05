let canvas = "";
let ctx = "";

function load_canvas() {
    let inputElement = document.getElementById('file');
    // create image object
    let image = new Image();
    image.src = URL.createObjectURL(inputElement.files[0]);
    let width = 0;
    let height = 0;
    // wait for image to load
    image.onload = function() {
        // delete upload form
        document.getElementById('upload').remove();
        width = image.width;
        height = image.height;
        // create new canvas and set width and height then append to body
        let localcanvas = document.createElement('canvas');
        localcanvas.id = 'canvas';
        localcanvas.width = width;
        localcanvas.height = height;
        document.body.appendChild(localcanvas);
        canvas = document.getElementById('canvas');
        // get context of canvas
        ctx = canvas.getContext('2d');
        // draw image on canvas
        ctx.drawImage(image, 0, 0);
    };

    
}

// wait for user to click down the primary fire button
document.addEventListener('mousedown', function(event) {
    if (!canvas) {
        return;
    }
    start_x = event.clientX;
    start_y = event.clientY;
    ctx.beginPath();
    ctx.moveTo(start_x, start_y);
    // wait for user to release the primary fire button
    document.addEventListener('mouseup', function(event) {
        end_x = event.clientX;
        end_y = event.clientY;
        ctx.lineTo(end_x, end_y);
        ctx.stroke();
        // calculate width and height of the rectangle
        // width = Math.abs(end_x - start_x);
        // height = Math.abs(end_y - start_y);
        // draw line on canvas
        
    });
});