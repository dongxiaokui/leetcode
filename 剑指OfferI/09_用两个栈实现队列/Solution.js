var CQueue = function () {
    this.stack1 = []
    this.stack2 = []    
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if(this.stack2.length){
        return this.stack2.pop()
    }else{
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        if(this.stack2.length){
            return this.stack2.pop()
        }else{
            return -1
        }
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue()
obj.appendTail(1)
obj.appendTail(2)
obj.appendTail(3)

var param1 = obj.deleteHead()
var param2 = obj.deleteHead()
var param3 = obj.deleteHead()
var param4 = obj.deleteHead()
console.log(param1,param2,param3);
console.log(param4);