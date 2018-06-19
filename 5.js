var x = 1;

function video(i)
{
	$('#video' + x ).hide();
	$('#video' + x)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	$('#video' + i ).show();
	x = i;
}