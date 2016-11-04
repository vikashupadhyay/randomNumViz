var data = [];
for (var i = 0; i < 5; i++) {
    data.push({x: Math.round(Math.random() * 100), y: Math.round(Math.random() * 100)})
}

var svg = d3.select(".container").append("svg")
    .attr("width", 500)
    .attr("height", 600);
function draw(data) {
    var g = svg.append("g");
    var circles = g.selectAll("circle")
        .data(data).enter()
        .append("circle")
        .attr("cx", function (d) {
            return d.x
        })
        .attr("cy", function (d) {
            return d.y
        })
        .attr("r", 5);
    circles
        .attr("fill", "stealblue")
        .transition()
        .attr("cx",function (d) {console.log(d);return 10.7})
        .attr("cy",function (d) {console.log(d);return 20})
    d3.selectAll("circle").exit().remove();

}

window.onload = function () {
    // setInterval(function () {

        draw(data);
    // }, 2000);
};