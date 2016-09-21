/**
 * Created by U315327 on 9/19/2016.
 */
var w=960,h=500,
    svg=d3.select("#chart")
        .append("svg")
        .attr("width",w)
        .attr("height",h);

var text=svg
    .append("text")
    .text("hello world")
    .attr("y",50);
