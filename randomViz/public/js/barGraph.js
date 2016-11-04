var getRandomNumList = function (count) {
    var numbers = [];
    for (var i = 0; i < count; i++) {
        numbers.push(Math.round(Math.random() * 100))
    }
    return numbers;
};


var randomsNums = getRandomNumList(10);

const WIDTH = 600;
const HEIGHT = 400;
const MARGIN = 30;

const INNER_WIDTH = WIDTH - 2 * MARGIN;
const INNER_HEIGHT = HEIGHT - 2 * MARGIN;

var translate = function (x, y) {
    return "translate(" + x + "," + y + ")";
};

var xScale, yScale, line, bars;

var loadChart = function (randomNums) {
    var svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);
    xScale = d3.scaleLinear()
        .domain([0, 10])
        .range([0, INNER_WIDTH]);


    yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([INNER_HEIGHT, 0]);

    var xAxis = d3.axisBottom(xScale).ticks(10);
    var yAxis = d3.axisLeft(yScale).ticks(10);

    svg.append('g')
        .attr('transform', translate(MARGIN, HEIGHT - MARGIN))
        .call(xAxis)
        .classed('xAxis', true);

    svg.selectAll('.xAxis .tick')
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', -INNER_HEIGHT)
        .classed('grid', true);

    svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN))
        .classed('yAxis', true)
        .call(yAxis);

    svg.selectAll('.yAxis .tick')
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', INNER_WIDTH)
        .attr('y2', 0)
        .classed('grid', true);

    var g = svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN));

    bars = g.selectAll('.bar')
        .data(randomNums)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d, i) {
            return xScale(i);
        })
        .attr("y", function (d) {
            return yScale(d);
        })
        .attr("width", 20)
        .attr("height", function (d) {
            return INNER_HEIGHT - yScale(d)
        });

    bars.exit().remove();

};


function updateChart(randomNumList) {
    var oldBars = d3.selectAll("rect");
    oldBars
        .data(randomNumList).enter().append("rect")
        .attr("class","bar")
        .attr("x", function (d, i) {
            return xScale(i);
        })
        .attr("y", function (d) {
            return yScale(d);
        })
        .attr("width", 20)
        .attr("height", function (d) {
            return INNER_HEIGHT - yScale(d)
        });

    randomsNums.pop();

}

window.onload = function () {
    loadChart(randomsNums);
    setInterval(function () {
        updateChart(randomsNums);
        randomsNums.unshift(Math.round(Math.random() * 100));

    }, 1000);
};
