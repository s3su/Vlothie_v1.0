module.exports = [{"isApi":true,"priority":1000.0001,"key":"Window","style":{backgroundColor:"transparent",font:{fontFamily:"AmericanTypewriter",},}},{"isApi":true,"priority":1000.0002,"key":"Label","style":{color:"#FFF",}},{"isId":true,"priority":100000.0002,"key":"loading","style":{height:20,width:20,images:["/images/com.appcelerator.loading/00.png","/images/com.appcelerator.loading/01.png","/images/com.appcelerator.loading/02.png","/images/com.appcelerator.loading/03.png","/images/com.appcelerator.loading/04.png","/images/com.appcelerator.loading/05.png","/images/com.appcelerator.loading/06.png","/images/com.appcelerator.loading/07.png","/images/com.appcelerator.loading/08.png","/images/com.appcelerator.loading/09.png","/images/com.appcelerator.loading/10.png","/images/com.appcelerator.loading/11.png",],}},{"isId":true,"priority":100000.0003,"key":"title","style":{color:"#652F8D",font:{fontSize:"24dp",fontWeight:"bold",},}}];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ?
		'com.appcelerator.loading/' + s :
		s.substring(0,index) + '/com.appcelerator.loading/' + s.substring(index+1);

	// TODO: http://jira.appcelerator.org/browse/ALOY-296
	return OS_ANDROID && path.indexOf('/') !== 0 ? '/' + path : path;
}