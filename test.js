
function getGroup(x, y) {

    var img = document.getElementById("imgs");
    image = new SimpleImage(img);

    var w = image.getWidth()
    var h = image.getHeight()
    var low = 30
    var xw = w / low
    var yh = h / low

    var gx = parseInt((x / low))
    var gy = parseInt((y / low))
    gx = (gx === 0) ? 1 : gx
    gy = (gy === 0) ? 1 : gy
    console.log(gx, gy)
    var sum = 0
    var check = 0
    for (var i = gx * low - 1; i < gx * low + low - 1; i++)
        for (var j = gy * low - 1; j < gy * low + low - 1; j++) {
            var pixel = image.getPixel(i, j)
            check++
            sum += pixel.getRed()
            sum += pixel.getGreen()
            sum += pixel.getBlue()

        }
    console.log("check: ", check)
    var toHash = sum.toString()
    let hash = ""
    console.log(toHash)
    for (var i = 0; i < toHash.length; i++) {
        // console.log(toHash.charAt(i))



        var n = parseInt(toHash.charAt(i))
        // console.log(typeof n)
        var c = String.fromCharCode(n + 97)
        // console.log(c)
        // console.log(typeof c)
        // console.log(String.fromCharCode(toHash.charAt(i) + 96))
        hash = hash.concat(c)


    }
    console.log(hash)
    console.log("generated hash: ", Hash(hash))
    // console.log(Hash(toHash))
    // console.log(sum.toString())
    // console.log(sum)
    // console.log(xw, yh)
    // console.log(gx, gy)

}


function Hash(string) {

    var hash = 0;

    if (string.length == 0) return hash;

    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}