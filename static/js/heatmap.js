// setting the dimensions and margins of the graph
var margin = { top: 50, right: 25, bottom: 150, left: 310 },
  width = 1250 - margin.left - margin.right,
  height = 1000 - margin.top - margin.bottom;

// appending the svg object to the body of the page
var svg = d3.select("#div_template")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// reading the .csv data
d3.csv("monthly_crime_data.csv").then((data) => {

  // labels of row and columns
  var months = d3.map(data, d => d.month).keys()
  var types = d3.map(data, d => d.primary_type).keys()
  var grouped = _.groupBy(data, d => d.primary_type)
  var groupedArray = Array.from(Object.entries((grouped)))

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // building X scales and axis:
  var x = d3.scaleBand()
    .range([0, width])
    .domain(months)
    .padding(0.05);
  svg.append("g")
    .attr("class", "axis axis-x")
    .style("font-size", 14)
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .select(".domain").remove()

  // building Y scales and axis:
  var y = d3.scaleBand()
    .range([height, 0])
    .domain(types)
    .padding(0.05);
  svg.append("g")
    .attr("class", "axis axis-y")
    .style("font-size", 15)
    .call(d3.axisLeft(y).tickSize(0))
    .select(".domain").remove()

  // creating tooltip
  var Tooltip = d3.select("#div_template")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")

  // creating functions for identifying active x and y axis labels
  function select_x_label(datum) {
    return d3.select('.axis-x')
      .selectAll('text')
      .filter(d => d == datum.month);
  }

  function select_y_label(datum) {
    return d3.select('.axis-y')
      .selectAll('text')
      .filter(d => d == datum.primary_type);
  }

  // creating functions that change the tooltip when user mouseovers / moves / leaves a cell
  var mouseover = function (d) {
    Tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "white")
      .style("opacity", 0.5)
    select_x_label(d).attr('style', "font-weight: bold;")
    select_y_label(d).attr('style', "font-weight: bold;")
  }

  // var mousemove = function (d) {
  //   Tooltip
  //     .style("left", (d3.event.pageX - 225) + "px")
  //     .style("top", (d3.event.pageY + 25) + "px")
  //     .html(`${d.primary_type} </br>COUNT ${d.month}: ` + `<b>${numberWithCommas(+d.counts)}</b>`)
  // }

  var mouseleave = function (d) {
    Tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.85)
    select_x_label(d).attr('style', "font-weight: regular;");
    select_y_label(d).attr('style', "font-weight: regular;");
  }

  // building color scale
  var myColor = d3.scaleSequential(d3.interpolateRdYlGn)

  groupedArray.forEach(function (item) {
    myColor.domain(d3.extent(item[1], i => +i.counts).reverse())

    var sum = d3.sum(item[1], i => +i.counts)

    // mousemove function with percentages
    var mousemove = function (d) {
      Tooltip
        .style("left", (d3.event.pageX - 225) + "px")
        .style("top", (d3.event.pageY + 25) + "px")
        .html(`${d.primary_type} </br>COUNT ${d.month}: ` + `<b>${numberWithCommas(+d.counts)}</b>` + ` (${d3.format(".2f")((+d.counts / sum) * 100)}%)`)
    }

    var g = svg.append("g")
      .attr("transform", "translate(0," + y(item[0]) + ")")

    g.selectAll("rect")
      .data(item[1])
      .enter()
      .append("rect")
      .attr("x", d => x(d.month))
      .attr("y", 0)
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", d => myColor(+d.counts))
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)

  });

  // adding title
  svg.append("text")
    .attr("class", "title")
    .attr("x", width / 2)
    .attr("y", -25)
    .style("text-anchor", "middle")
    .text(`Chicago Crime "Heat" Map`);

  svg.append("text")
    .attr("class", "subtitle")
    .attr("x", width / 2)
    .attr("y", -10)
    .style("text-anchor", "middle")
    .text(`2018 - 2020`);

  // creating color legend
  var colorData = COLOR_DATA;
  var colorExtent = d3.extent(colorData, d => d.value);

  var padding = 9;
  var innerWidth = width - (padding * 2);
  var barHeight = 10;

  var xScale = d3.scaleLinear()
    .range([0, innerWidth])
    .domain(colorExtent);

  var xTicks = [0, 510]
  var xTickLabels = ['MIN', 'MAX']

  var xAxis = d3.axisBottom(xScale)
    .tickSize(barHeight * 1.5)
    .tickValues(xTicks)
    .tickFormat(function (d, i) { return xTickLabels[i] });

  var g = svg.append("g")
    .attr("transform", "translate(" + padding + ", 825)");
  var defs = svg.append("defs");
  var linearGradient = defs.append("linearGradient").attr("id", "myGradient");

  linearGradient.selectAll("stop")
    .data(colorData)
    .enter().append("stop")
    .attr("offset", d => ((d.value - colorExtent[0]) / (colorExtent[1] - colorExtent[0]) * 100) + "%")
    .attr("stop-color", d => d.color);

  g.append("rect")
    .attr("width", innerWidth)
    .attr("height", barHeight)
    .attr("rx", 4)
    .attr("ry", 4)
    .style("fill", "url(#myGradient)");

  g.append("g")
    .call(xAxis)
    .select(".domain").remove()

});