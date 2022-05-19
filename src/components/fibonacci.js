const fibonacci = (upto) => {

    if(upto == 0) {
        return []
    }

    if(isNaN(upto)){
        return "Not a Number"
    }

    if(upto == 1){
        return [0]
    }
     if(upto == 2) {
        return [0, 1];
        
    } else {
        return 'Not implemented';
        }

}


module.exports = fibonacci;