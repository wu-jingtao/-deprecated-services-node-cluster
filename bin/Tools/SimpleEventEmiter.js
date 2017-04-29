//自定义的一个消息派发器
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleEventEmiter {
    constructor() {
        this.listeners = {};
    }
    on(type, callback) {
        if (!(type in this.listeners)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    }
    off(type, callback) {
        if (!(type in this.listeners)) {
            return;
        }
        var stack = this.listeners[type];
        for (var i = 0, l = stack.length; i < l; i++) {
            if (stack[i] === callback) {
                stack.splice(i, 1);
                return;
            }
        }
    }
    once(type, callback) {
        let one = (...args) => {
            callback(...args);
            this.off(type, one);
        };
        this.on(type, one);
    }
    emit(type, ...args) {
        if (!(type in this.listeners)) {
            return true;
        }
        var stack = this.listeners[type];
        for (var i = 0, l = stack.length; i < l; i++) {
            stack[i].call(undefined, ...args);
        }
        return true;
    }
    ;
}
exports.default = SimpleEventEmiter;
let test = new SimpleEventEmiter;
test.on('test', function (a) {
    console.log(a);
});
test.emit('test', 1);
test.emit('test', 2);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvb2xzL1NpbXBsZUV2ZW50RW1pdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7OztBQUViO0lBQUE7UUFFSSxjQUFTLEdBQVEsRUFBRSxDQUFDO0lBd0N4QixDQUFDO0lBdENHLEVBQUUsQ0FBQyxJQUFZLEVBQUUsUUFBa0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVksRUFBRSxRQUFrQjtRQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQztZQUNYLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZLEVBQUUsUUFBa0I7UUFDakMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQVc7WUFDckIsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZLEVBQUUsR0FBRyxJQUFnQjtRQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQTFDRCxvQ0EwQ0M7QUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLGlCQUFpQixDQUFDO0FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLFVBQVMsQ0FBSztJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2xCLENBQUMsQ0FBQyxDQUFBO0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoiVG9vbHMvU2ltcGxlRXZlbnRFbWl0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+iHquWumuS5ieeahOS4gOS4qua2iOaBr+a0vuWPkeWZqFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlRXZlbnRFbWl0ZXIge1xyXG5cclxuICAgIGxpc3RlbmVyczogYW55ID0ge307XHJcblxyXG4gICAgb24odHlwZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoISh0eXBlIGluIHRoaXMubGlzdGVuZXJzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYodHlwZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoISh0eXBlIGluIHRoaXMubGlzdGVuZXJzKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGFjayA9IHRoaXMubGlzdGVuZXJzW3R5cGVdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RhY2subGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFja1tpXSA9PT0gY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbmNlKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG9uZSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcclxuICAgICAgICAgICAgdGhpcy5vZmYodHlwZSwgb25lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbih0eXBlLCBvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5hcmdzOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgaWYgKCEodHlwZSBpbiB0aGlzLmxpc3RlbmVycykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGFjayA9IHRoaXMubGlzdGVuZXJzW3R5cGVdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RhY2subGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0YWNrW2ldLmNhbGwodW5kZWZpbmVkLCAuLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5sZXQgdGVzdCA9IG5ldyBTaW1wbGVFdmVudEVtaXRlcjtcclxudGVzdC5vbmNlKCd0ZXN0JyxmdW5jdGlvbihhOmFueSl7XHJcbiAgICBjb25zb2xlLmxvZyhhKVxyXG59KVxyXG50ZXN0LmVtaXQoJ3Rlc3QnLDEpXHJcbnRlc3QuZW1pdCgndGVzdCcsMikiXX0=