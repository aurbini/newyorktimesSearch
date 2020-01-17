


//grab variables from html 
var apiKey = '0wPeAJjzDQUQA2sDNk1XqPJW3W9Oitf1';

var query = "election"; 

var archiveUrl = 'https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=yourkey'

var searchUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=`
//Ajax Calls


function archiveCall(){
  $.ajax({
    url:`https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=${apiKey}   ` ,
    method: "GET"
    }).then(function(response){
      console.log(response); 

    })
  }
 // archiveCall(); 

  //Search Call
  function searchCall(){
    $.ajax({                                            
      url:  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`,
      method: "GET"
      }).then(function(response){
        console.log(response); 
      })
    }
    searchCall(); 
//Helper Functions 


//Click Events 
