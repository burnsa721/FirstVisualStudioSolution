function LetterChanges(str) {
    //convert string to an array
    var strArray = str.split(" ");

    //convert alphabet to array
    var alphaArray = ("a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z").split(", ");

    //loop through str and compare the characters to the alphabet
    function letterChange(strArray, alphaArray) {
        for (var i = 0; i <= strArray.length; i++) {
            for (var j = 0; j <= alphaArray.length; j++) {

                //if str character is same as the alpha character
                if (strArray[i] === alphaArray[j]) {

                    //then str character should be the alpha character + 1 (the next letter)
                    return charAt.strArray[i] === charAt.alphaArray[j + 1];
                }
            }
        }
        return strArray;
    }

    //create vowel array
    var vowelArray = ["a", "e", "i", "o", "u"];

    //loop through the strArray
    function vowelUpper(strArray, vowelArray) {
        for (var k = 0; k <= strArray.length; k++) {
            for (var l = 0; l <= vowelArray.length; l++) {
                if (strArray[k] === vowelArray[l]) {
                    return charAt.strArray[k].toUpperCase;
                }
            }
        }
        return strArray;
    }

    str = strArray.join(" ");

    return str;
}
