let onClickDocunment=(e)=>{
    let {target}=e
    callbakcs.forEach((item)=>{
        if(item.el===target||item.el.contains(target)){
            return
        }else{
            item.callback()
        }
    })
}

document.addEventListener("click",onClickDocunment)
let callbakcs=[]

export  default {
    bind:function (el,binding,vnode) {
        callbakcs.push({el,callback:binding.value,vnode})
    }
}

let removeListener=()=>{
    document.removeEventListener("click",onClickDocunment)
}

export {removeListener}