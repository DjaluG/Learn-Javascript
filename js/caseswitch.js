function binatang(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "kucing";
            break;
        case "b":
            answer = "anjing";
            break;
        case "c":
            answer = "burung";
            break;
        default:
            answer = "sampah";
            break;
    }
    return answer;
}

console.log(binatang());