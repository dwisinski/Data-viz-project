// setting the dimensions and margins of the graph
var margin = { top: 20, right: 30, bottom: 40, left: 300 },
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// appending the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// reading the .csv data
d3.csv("static/csv/location_crime_data.csv").then((data) => {

    const n = 10;
    var grouped = _.groupBy(data, d => d.primary_type);
    var groupedArray = Array.from(Object.entries((grouped)));
    var topTen = groupedArray.map(item => (item[1]).slice(0, n));
    var dropdown = d3.select("#selDataset");

    // creating tooltip
    var tooltip = d3.select("#my_dataviz")
        .append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('z-index', '10')
        .style('visibility', 'hidden')
        .style('padding', '10px')
        .style('background', 'rgba(0,0,0,0.6)')
        .style('border-radius', '4px')
        .style('color', '#fff')

    // creating the initial chart on load
    function init() {
        topTen.forEach(elt => {
            dropdown.append("option").text((elt[0].primary_type)).property("value");
        })

        // creating X axis
        const x = d3.scaleLinear()
            .domain([0, d3.max(topTen[0], d => +d.count)])
            .range([0, width]);
        const xAxis = svg.append("g")
            .attr("transform", `translate(0, ${height})`)
        xAxis.transition().duration(2500).call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // creating Y axis
        const y = d3.scaleBand()
            .range([0, height])
            .domain(topTen[0].map(d => d.location_description))
            .padding(.1);
        const yAxis = svg.append("g")
        yAxis.transition().duration(1500).call(d3.axisLeft(y))

        // creating bars
        svg.selectAll("rect")
            .data(topTen[0])
            .join("rect")
            .attr("x", x(0))
            .attr("y", d => y(d.location_description))
            .on("mouseover", function () {
                d3.select(this).transition().attr('fill', "#437C90");
            })
            .on('mousemove', function (d, i) {
                tooltip
                    .html(`<div>Count: ${d3.format(",")(i.count)}</div>`)
                    .style('visibility', 'visible')
                    .style("left", (d3.event.pageX - 25) + "px")
                    .style("top", (d3.event.pageY + 25) + "px")
            })
            .on('mouseout', function () {
                tooltip.html(``).style('visibility', 'hidden');
                d3.select(this).transition().attr('fill', "#B3DDF2");
            })
            .transition()
            .attr("height", y.bandwidth())
            .transition()
            .duration(2000)
            .attr("width", d => x(+d.count))
            .attr("fill", "#B3DDF2")
    }

    // creating the function for a change in selection from dropdown
    d3.selectAll("#selDataset").on("change", update);

    // creating the charts
    function buildChart(newData) {
        var filteredData = topTen.filter(elt => elt[0].primary_type == (newData))[0];

        // creating X axis
        const x = d3.scaleLinear()
            .domain([0, d3.max(filteredData, d => +d.count)])
            .range([0, width]);
        const xAxis = svg.append("g")
            .attr("transform", `translate(0, ${height})`)
        xAxis.transition().duration(2500).call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // creating Y axis
        const y = d3.scaleBand()
            .range([0, height])
            .domain(filteredData.map(d => d.location_description))
            .padding(.1);
        const yAxis = svg.append("g")
        yAxis.transition().duration(1500).call(d3.axisLeft(y))

        // creating bars
        svg.selectAll("myRect")
            .data(filteredData)
            .join("rect")
            .attr("x", x(0))
            .attr("y", d => y(d.location_description))
            .on("mouseover", function () {
                d3.select(this).transition().attr('fill', "#437C90");
            })
            .on('mousemove', function (d, i) {
                tooltip
                    .html(`<div>Count: ${d3.format(",")(i.count)}</div>`)
                    .style('visibility', 'visible')
                    .style("left", (d3.event.pageX - 25) + "px")
                    .style("top", (d3.event.pageY + 25) + "px")
            })
            .on('mouseout', function () {
                tooltip.html(``).style('visibility', 'hidden');
                d3.select(this).transition().attr('fill', "#B3DDF2");
            })
            .transition()
            .attr("height", y.bandwidth())
            .transition()
            .duration(2000)
            .attr("width", d => x(+d.count))
            .attr("fill", "#B3DDF2")
    }

    function update(newData) {
        svg.selectAll('*').remove();
        var primaryType = (this.value);
        buildChart(primaryType);
    }

    init();

});