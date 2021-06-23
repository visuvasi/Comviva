d3.csv("https://raw.githubusercontent.com/visuvasi/Comviva/main/same-data.csv", function(data){

    var Group1 = d3.map(data, function(d){return (d.EXECUTION_TYPE)}).keys()
    var Group2 = d3.map(data, function(d){return (d.Success)}).keys()
    var Group3 = d3.map(data, function(d){return (d.SERVICE_TYPE)}).keys()

    d3.select("#filter2")
        .selectAll('myOptions')
        .data(Group1)
        .enter()
        .append('option')
        .text(function(d)
        {
            return d;
        })

    d3.select("#filter3")
        .selectAll('myOptions')
        .data(Group2)
        .enter()
        .append('option')
        .text(function(d)
        {
            return d;
        })

    d3.select("#filter4")
    .selectAll('myOptions')
    .data(Group3)
    .enter()
    .append('option')
    .text(function(d)
    {
        return d;
    })
});
