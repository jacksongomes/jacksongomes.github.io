//Captura os projetos do behance.net (http://www.behance.net/jacksongomes)
(function () {
	var months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

	var $projects = $('#jobs');

	$.ajax({
		url: 'http://www.behance.net/v2/users/jacksongomes/projects?callback=?&api_key=NImk7OcbDeeem5xB1nuDnRvun3sQJP2k',
		dataType: 'json',
		beforeSend: function () {
			console.log('beforeSend');
		},
		complete: function () {
			console.log('complete');
		},
		error: function () {
			console.log('error');
		},
		success: function (data) {
			$.each(data.projects, function (index, item) {
				
				var publishDate = new Date(item.published_on*1000);

				// console.info(publishDate);
				// console.info(item);

				$projects.append('<li><a href="'+ item.url+'" target="_blank"><figure><img src="'+ item.covers[404] +'"/><figcaption><div class="date"><h3>' + publishDate.getDate() + '<br><span>' + months[publishDate.getMonth()] + '</span></h3></div><div class="class-title"><h2>' + item.name + '</h2></div></figcaption></figure><div class="views"><i></i>'+ item.stats['views'] +'</div></a></li>');
			});
		}
	});
})();
