const Paint = function (litres) {
    this.litres = litres;
    this.is_empty = false;

};

Paint.prototype.empty_can = function () {
    this.is_empty = true;
};


module.exports = Paint;