const Paint = function(litresAmount, checkEmpty, emptySelf){
    this.litresAmount = litresAmount;
    this.checkEmpty = checkEmpty;
    this.emptySelf = emptySelf;
}

Paint.prototype.checkEmpty = function(){
    return this.paint.checkEmpty;
}

module.exports = Paint;