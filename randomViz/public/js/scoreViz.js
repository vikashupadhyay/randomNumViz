var data = [
    {name: 'ramesh', subject: 'maths', score: 87},
    {name: 'suresh', subject: 'maths', score: 45},
    {name: 'pokemon', subject: 'english', score: 65},
    {name: 'mary', subject: 'kannada', score: 44},
    {name: 'riya', subject: 'science', score: 72},
    {name: 'katie', subject: 'social studies', score: 82},
    {name: 'katie', subject: 'maths', score: 98},
    {name: 'ramesh', subject: 'bengali', score: 25},
    {name: 'suresh', subject: 'science', score: 55},
    {name: 'riya', subject: 'tamil', score: 75},
    {name: 'pokemon', subject: 'sports', score: 95},
    {name: 'pokemon', subject: 'social studies', score: 32}
];
var colorScale = d3.scaleOrdinal()
    .domain(["maths", "english", "kannada", "science", "social studies", "bengali", "tamil", "sports"])
    .range(["#4876B0", "#E37E23", "#609E3A", "#B72B2C", "#8766B8", "#4876B0", "#CA76BE", "#7E7E7E"]);

function load(data) {
    var divs = d3.select(".container").selectAll("div").data(data, function (d, i) {
        return d + i;
    });
    divs.enter().append("div")
        .attr("class", "score")
        .style("background", function (d) {
            return colorScale(d.subject);
        })
        .style("height", "30px")
        .style("width", function (d) {
            return d.score * 10 + "px";
        })
        .style("border-radius", "20px")
        .text(function (d) {
            return d.name + " " + d.score;
        });
}

function sortByScore() {
    d3.selectAll(".score").sort(function (a, b) {
        return a.score - b.score;
    });

}

function sortByName() {
    return d3.selectAll(".score").sort(function (a, b) {
        return (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : 0;
    });

}

function sortBySubject() {
    return d3.selectAll(".score").sort(function (a, b) {
        return (a.subject.toUpperCase() > b.subject.toUpperCase()) ? 1 : (a.subject.toUpperCase() < b.subject.toUpperCase()) ? -1 : 0;
    });
}

window.onload = function () {
    createTags();
    load(data)

};

function createTags() {
    var uniqueSubjects = uniqueSub(data);
    var tags = d3.select(".tags").selectAll("div").data(uniqueSubjects, function (d, i) {
        return d + i;
    });


    tags.enter().append("div")
        .attr("class", "tag")
        .style("background", function (d) {
            return colorScale(d)
        })
        .text(function (d) {
            return d;
        })

}

function uniqueSub(data) {
    var subjects = data.map(function(obj) { return obj.subject; });
    return subjects.filter(function(v,i) { return subjects.indexOf(v) == i; });
}