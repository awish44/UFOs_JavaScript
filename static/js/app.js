// Variable to reference the data from data.js
var tableData = data;

// Variables to reference HTML table
var tbody = d3.select("tbody");

// Select the "Filter Table" button
var submit = d3.select("#filter-btn");

// Populate table when page loads
function populateTable(totalData) {
    tbody.html("");

    totalData.forEach((blankInput) => {
        var row = tbody.append("tr");
        Object.entries(blankInput).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

} 

// Remove duplicate from selected object key
function removeDups(states) {
    let unique = {};
    states.forEach(function(i) {
        if(!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique);
}

// Create list for Dates to add into dropdown menu
const createOptions = () => {
    
    var datesList = tableData.map(row => row.datetime);
    var datesListUnique = removeDups(datesList);
    
    const list = document.getElementById('dateLists'); 
    
    datesListUnique.forEach(item => {
        let option = document.createElement('option');
        option.value = item;   
        list.appendChild(option);
    });
};

populateTable(tableData);
createOptions();

// Activate Click function & call to the data table 
submit.on("click", function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Input Element for Date-Time
    var inputElement = d3.select("#datetime");
    // Get the value property of the element
    var inputValue = inputElement.property("value");
    
    var filterData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    // Call function to populate table data
    populateTable(filterData);

});


