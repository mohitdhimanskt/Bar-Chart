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
  
    var years = data.data.map(function(item) {
        var quarter;
        var temp = item[0].substring(5, 7);

        if(temp === '01') {
            quarter = 'Q1';
          }
          else if (temp === '04'){
            quarter = 'Q2';
          }
          else if(temp === '07') {
            quarter = 'Q3';
          }
          else if(temp ==='10') {
            quarter = 'Q4';
          }
      
          return item[0].substring(0, 4) + ' ' + quarter
        });
}

