var yMargin = 40,
width = 800,
height = 400,
barWidth = width/275;

var tooltip = d3.select(".visHolder").append("div")
.attr("id","tooltip")
.style("opacity",0);

var overlay = d3.select(".visHolder").append("div")
.attr("class", 'overlay')
.style('opacity',0);
var svgContainer = d3.select(".visHolder").append('svg')
.attr('width',width + 100)
.attr('width',width + 60);

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', function(err, data){
    
svgContainer.append('text')
.attr('transform','rotate(-90)')
.attr('x', -200)
.attr('y', 80)
.text('Gross Domestic Product');

svgContainer.append('text')
    .attr('x', width/2 + 120)
    .attr('y', height + 50)
    .text('More Information: http://www.bea.gov/national/pdf/nipaguid.pdf')
    .attr('class', 'info');
  
}

