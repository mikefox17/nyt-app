// var search = 'dc';
// var records = '';
//var startyear = '2017';
//var endyear = '2018';


function buildurl(){

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=219e1e30325a4e79ac8bc9736e352dd5&";
    // var queryparams = {"api-key":"219e1e30325a4e79ac8bc9736e352dd5"};

    // queryparams.q = $("#search").val().trim();

    // var startyear = $("#startyear").val().trim();

    // var endyear = $("#endyear").val().trim();
    console.log($("#search").val().trim())
    queryURL = queryURL + 'q=' + $("#search").val().trim();

    // if (parseInt(startyear)){
    //     queryparams.begin_date = startyear+"0101";

    // }

    // if (parseInt(endyear)){
    //     queryparams.end_date = endyear+"0101";
        
    // }

    // console.log(queryURL + $.param(queryparams));
    // return queryURL + $.param(queryparams);
    return queryURL;

}


function updatepage(nytdata){
    debugger
    var records = $("#exampleFormControlSelect1").val();

    for(var i = 0; i<=records; i++){

        var header = $("<h2>").text(nytdata.response.docs[i].headline.main);
        var summary = $("<p>").text(nytdata.response.docs[i].abstract);
        var releasedate = $("<p>").text(nytdata.response.docs[i].pub_date);

        $("#results").append(header).append(releasedate).append(summary);

    }

}

function clear(){
    $("#results").empty();
}

$("#submitBTN").on("click", function(){

    debugger
    $.ajax({
        url: buildurl(),
        method: "GET"
      }).then(updatepage)
})

$("#clear").on("click", function(){


   clear();
})

