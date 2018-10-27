$(function(){
	//Methods that are launched upon site/document finishing loading
	cdnFailSafe();
});

/*Method used to check if CDN has failed. If it has, get the local installed package
for the required packages.*/

function cdnFailSafe(){
	if(!window.jQuery && !window.Firebase){		
		document.write(
		  '<script src="/node_modules/firebase/firebase.js"></script>',
		  '<br/>',
		  '<script src="/node_modules/firebase/firebase-app.js"></script>',
		  '<br/>',
		  '<script src="/node_modules/firebase/firebase-storage.js"></script>',
		  '<br/>',
		  '<script src="/node_modules/jquery/dist/jquery.js"></script>'
		);
	}
}