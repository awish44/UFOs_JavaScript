// Create array of States
var states = data.map(row => row.state),
// Count the number of times each State appears
result = { };
for(var i = 0; i < states.length; ++i) {
    if(!result[states[i]])
        result[states[i]] = 0;
    ++result[states[i]];
}
var stateCount = result;
console.log(stateCount);

// Create array of the object and sort by the count
var sortable = [];
for (var x in stateCount) {
    sortable.push([x, stateCount[x]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});

console.log(sortable)

// Convert the arrays to an object
var statesUpdated = sortable.reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{});
console.log(statesUpdated);


// Plot the top 10 UFO Sightings by State
var traceBar = {
    x: Object.keys(statesUpdated),
    y: Object.values(statesUpdated),
    type: "bar"
};

var data = [traceBar];

var layout = {
    title: "UFO Sightings by State",
    xaxis: {title: "State"},
    yaxis: {title: "# of Sightings"}
}

Plotly.newPlot("plot", data, layout);
