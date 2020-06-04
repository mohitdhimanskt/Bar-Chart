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

        var yearsDate = data.data.map(function(item) {
            return new Date(item[0]);
          });
        
          var xMax = new Date(d3.max(yearsDate));
          xMax.setMonth(xMax.getMonth() + 3);
          var xScale = d3.scaleTime()
            .domain([d3.min(yearsDate), xMax])
            .range([0, width]);
          
          var xAxis = d3.axisBottom()
            .scale(xScale);
          
          var xAxisGroup = svgContainer.append('g')
            .call(xAxis)
            .attr('id', 'x-axis')
            .attr('transform', 'translate(60, 400)');
          
          var GDP = data.data.map(function(item) {
            return item[1]
          });

          var scaledGDP = [];
  
  var gdpMin = d3.min(GDP);
  var gdpMax = d3.max(GDP);
  
  var linearScale = d3.scaleLinear()
    .domain([0, gdpMax])
    .range([0, height]);
  
  scaledGDP = GDP.map(function(item) {
    return linearScale(item);
  });

  var yAxisScale = d3.scaleLinear()
  .domain([0, gdpMax])
  .range([height, 0]);

var yAxis = d3.axisLeft(yAxisScale)
  
var yAxisGroup = svgContainer.append('g')
  .call(yAxis)
  .attr('id', 'y-axis')
  .attr('transform', 'translate(60, 0)');
  
d3.select('svg').selectAll('rect')
  .data(scaledGDP)
  .enter()
  .append('rect')
  .attr('data-date', function(d, i) {
    return data.data[i][0]
  })
  .attr('data-gdp', function(d, i) {
    return data.data[i][1]
  })
  .attr('class', 'bar')
  .attr('x', function(d, i) {
    return xScale(yearsDate[i]);
  })
  .attr('y', function(d, i) {
    return height - d;
  })
  .attr('width', barWidth)
  .attr('height', function(d) {
    return d;
  })
}

