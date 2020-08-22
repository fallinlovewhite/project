define(["jquery","jquery-cookie"],function($){
        window.search = function(data){
            var oUl = $("ul").filter(".list");
            oUl.css("display","block");
            var arr =data.s;
            var str = ``;
            for(var i=0;i<arr.length;i++){
                str += `<li><a href="https://www.baidu.com/s?wd=${arr[i]}" target = "_blank">${arr[i]}</a></li>`;
            }
            oUl.html(str);
        }
        function sb(){
            var oUl = $("ul").filter(".list");;
            var oinput = $("input").filter(".serch");
            
            oinput.on("input",function(){
                var oValue = this.value;
                if(!oValue){
                    oUl.css("display","none");
                }else{
                    var oScript = document.createElement("script");
                    oScript.src = `http://suggestion.baidu.com/su?wd=${oValue}&cb=search`;
                    document.body.appendChild(oScript);
                }
            })
            $("body").on("click",function(){
                oUl.css("display","none");
                console.log("ssss");
            })
        }
    return{
        sb:sb,
    }
})
