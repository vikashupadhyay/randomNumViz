var data = [12, 43, 54, 64, 54, 76, 43, 23, 43, 54];

var unique = (function () {
    var cntr = 0;
    return function () {
        return cntr++;
    }
})();

var colorScale = d3.scaleOrdinal().domain([1, 10]).range(["#66B2FF", "#3399FF"]);

function load() {
    data.shift();
    data.push(getRandomNum(1, 100));

    var divs = d3.select(".container").selectAll("div").data(data, function (d, i) {
        return unique();
    });

    divs.enter().append("div")
        .attr("class", "bar")
        .style("height", 20 + "px")
        .style("width", function (d) {
            return d * data.length + "px";
        })
        .style("background", function (d, i) {
            return colorScale(i);
        })
        .text(function (d) {
            return d;
        });
    divs.exit().remove();
}

function getRandomNum(minLimit, maxLimit) {
    return Math.round(Math.random() * (maxLimit - minLimit) + minLimit);
}
window.onload = function () {
    load();
    setInterval(function () {
        load()
    }, 1000)
};
