function likeApp(deleteApp){if(typeof(deleteApp)=='undefined'){if(Cookies.get("likedApp")==undefined){Cookies.set('likedApp',';'+appName,{expires:20});}
else{if(Cookies.get('likedApp').includes(appName)==false){Cookies.set('likedApp',Cookies.get('likedApp')+';'+appName,{expires:20});verifyLikedApp();}
else{newLikedApp=Cookies.get('likedApp').replace(";"+appName,'');Cookies.remove('likedApp');Cookies.set('likedApp',newLikedApp,{expires:20});verifyLikedApp();}}
setTimeout(function(){$(".likeApp").attr('animation','');},1200);$(".likeApp").attr('animation','burst');}
else{newLikedApp=Cookies.get('likedApp').replace(";"+deleteApp,'');Cookies.remove('likedApp');Cookies.set('likedApp',newLikedApp,{expires:20});setTimeout(function(){$(".icon-x-like").attr('animation','');loadLikedApp();getNbrLikeApp();},600);$(".icon-x-like").attr('animation','spin');}
verifyLikedApp();}