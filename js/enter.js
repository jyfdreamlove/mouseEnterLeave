function EnterAnimate(){
	var nodes = document.querySelectorAll('li'),
		_nodes = [].slice.call(nodes,0);
	var _this = this;
	_nodes.forEach(function(el){
		el.addEventListener('mouseenter',function(ev){
			_this._addClass(ev,this,'in')
		}, false)
		el.addEventListener('mouseleave',function(ev){
			_this._addClass(ev,this,'out')
		}, false)
	})
}
EnterAnimate.prototype.getDirection = function(ev,obj){
	//返回进入的方向
	var w = obj.offsetWidth,
        h = obj.offsetHeight,
        /*x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
        y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;*/

        x = (ev.pageX - obj.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1),
		y = (ev.pageY - obj.offsetTop - (h / 2)) * (h > w ? (w / h) : 1),
		d = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
		
    	return d;

}
EnterAnimate.prototype._addClass = function(ev,obj,state){
	var dir = this.getDirection(ev,obj);
	var class_suffix = '';
	obj.className = '';
	switch (dir) {
		case 0:
			class_suffix = '-top';
			break;
		case 1:
			class_suffix = '-right';
			break;
		case 2:
			class_suffix = '-bottom';
			break;
		case 3:
			class_suffix = '-left';
			break;
		default:
			break;
	}
	obj.classList.add(state + class_suffix);
}	

var enter = new EnterAnimate();