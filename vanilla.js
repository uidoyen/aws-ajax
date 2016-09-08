function loadDoc() {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if(this.readyState == 0) {
			console.log('uninitialized...')
		}else if(this.readyState == 1) {
			console.log('loading...')
		}else if(this.readyState == 2) {
			console.log('loaded')
		}else if(this.readyState == 3) {
			console.log('interactive')
		}
		else if(this.readyState == 4 && this.status == 200) {
			console.log('There was a problem with the request')
			var resp = JSON.parse(this.response);
			
		}else{
			console.log('completed...')
		}
	};
	httpRequest.open('GET', 'https://eforms.rhodar.co.uk/api/v1/training_updates/users?auth_token=MntrxJTGbX-Pqoy29dDn', true);
	//httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.send();
}
//loadDoc();

$(function(){
function ajaxfunc() {
 	 $.ajax({
      //url: 'https://eforms.rhodar.co.uk/api/v1/training_updates/users?auth_token=MntrxJTGbX-Pqoy29dDn',
      url: 'http://54.234.147.103/aws-ajax/json.json',
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      dataType: 'json',
      success: function(data) {
      	var resources = data.resources;
      	console.log(resources);
      	$.each(resources, function(index, value) {
    		var $title = $('<p>').text(value.first_name);
    		$('#info').append($title)
		});
      },
      type: 'GET'
   });
 }
 ajaxfunc();
});


if(window.matchMedia('(min-width: 768px)').matches) {
	//console.log('under 768px')
}
