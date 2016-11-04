const WIDTH = 600;
const HEIGHT = 400;
const MARGIN = 30;

var loadChart = function (randomNums) {
    var svg = d3.select(".container")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

    var xScale = d3.scaleLinear()
        .domain([0, 10])
        .range([0,WIDTH]);

    var yScale = d3.scaleLinear()
        .domain([1,100])
        .range([HEIGHT,0]);

    //selection
    svg.append("g")
        .attr("color", "red")
        .attr("transform", "translate(" + MARGIN + "," + (HEIGHT - MARGIN) + ")")

    var line = d3.line()
        .x(function (d, i) {
            return xScale(i)
        })
        .y(function (d) {
            return yScale(d)
        })

};


var getRandomNumList = function (count) {
    var numbers = [];
    for (var i = 0; i < count; i++) {
        numbers.push(Math.round(Math.random() * 100))
    }
    return numbers;
};


function updateChart(randomNumList) {
    var g = d3.selectAll(".random-range");
    // g.attr('d', line(randomNumList));

}

window.onload = function () {
    var randomsNums = getRandomNumList(10);
    loadChart(randomsNums);
    setInterval(function () {
        // randomsNums.pop();
        // randomsNums.unshift(Math.round(Math.random() * 100));
        // updateChart(randomsNums);
    }, 2000);
};