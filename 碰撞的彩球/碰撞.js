;(function(){
    var _global=function(){
        return this
    }()
    function Pengz(opt){
        for(var item in opt){
            this[item]=opt[item]
        }
        this.wrap=$(this.el)
        this.init()
        
        
    }
    Pengz.prototype={
        constructor:Pengz,
        init(){
        this.Tianjia()
       
        },
        Tianjia(){
            var arr=[]
            for(var i=0;i<this.num;i++){
             var str='',x=0,y=0,aa=0,bb=0,cc=0,dd=0
                x=parseInt(Math.random()*650)
                y=parseInt(Math.random()*450)
                aa=parseInt(Math.random()*255)
                bb=parseInt(Math.random()*255)
                cc=parseInt(Math.random()*255)
                dd=(Math.random()*0.8+0.1).toFixed(1)
                str+=`<div class='doll' style="left:${x}px;top:${y}px ;background-color:rgba(${aa},${bb},${cc},${dd})"></div>`  
                $('.container').append(str)
            }
           $('.doll').each(function(index,item){
               arr.push(item)
           })
           for(var j=0;j<this.num;j++){
                setInterval(this.move(arr[j]), 20);
           }
          
                
        },
        move(ball){
         var stepX = this.xx;
         var stepY = this.yy;
         function scroll(){
                  var scrollW = ball.offsetLeft + stepX;
                  var scrollH = ball.offsetTop + stepY;
                  if (scrollW >= 650) {
                      stepX *= -1;
                  } else if (scrollW <= 0) {
                      stepX *= -1;
                  }
                  if (scrollH >= 450) {
                      stepY = -stepY;
                  } else if (scrollH <= 0) {
                      stepY = -stepY;
                  }
                  ball.style.left = scrollW + "px";
                  ball.style.top = scrollH + "px";
        

                }
                setInterval(() => {
                    scroll()
                }, this.speed);
          }
        } 
        
    
    !('Pengz' in _global) && (_global.Pengz=function(){
        return new Pengz(arguments[0])
    })
})()
