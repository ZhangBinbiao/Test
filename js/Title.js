var OriginTitile = document.title;//标题名
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = 'Σ(っ °Д °;)っ不要走，再玩会儿嘛~';
        clearTimeout(titleTime);
    }
    else {
        document.title = '(*´∇｀*)欢迎回来~ ';
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 2000);
    }
});
