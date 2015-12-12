
var page = document.getElementById('page');
var vids = [];
var dogVids = ['n08ZLsAiYAE','wx3MqcWiHG4','y27ywcx0HNM','tea6HiYZoKk','oNRcagcDbJw','7DFJUVwrKlQ','zkaK0LbeTYc'];

function displayVids(vids){
	for (u = 0; u <= vids.length; u++){
		var box = document.createElement('div');
		box.className = "5column";
		box.id = u.toString();
		page.appendChild(box);

		var videoWrap = document.createElement('div');
		videoWrap.className = "videoWrap";
		box.appendChild(videoWrap);

		var frame = document.createElement('iframe');
		frame.setAttribute('width','560');
		frame.setAttribute('height','315');
		frame.setAttribute('src','https://www.youtube.com/' + vids[u] + '?wmode=transparent&showinfo=0&autoplay=1&rel=0');
		frame.setAttribute('frameborder','0');
		frame.setAttribute('allowfullscreen');
		frame.setAttribute('volume','0');
		videoWrap.appendChild(frame);
	};
};

fuction dogs(){
	for (var i = 0; i <= 25; i++){
		var vid = Math.floor(Math.random*(dogVids.length)));
		var chosenVid = dogVids[vid];
		vids.push(chosenVid);
	};
	displayVids(vids);
};
