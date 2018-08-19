<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon class="loading" name="loading"></g-icon>
    <g-icon   class="icon" v-if="icon" :name="icon"></g-icon>
    <div class="content">
            <slot></slot>
    </div>
    </button>
</template>

<script>
        export default {
            //props:['icon','iconPosition']
            props:{
                icon:{},
                iconPosition:{
                    type:String,
                    default:"left",
                    validator(value){

                        //if(value!=="left"&&value!=="right"){
                        //    return false
                        //}else{
                        //    return true
                        //}简化写法
                        return value==="left"||value==="right"
                    }
                }
            }
        };
</script>

    <style lang="scss">
        @keyframes spin{
            0%{transform: rotate(0deg);}
            100%{transform: rotate(360deg)}
        }


        .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display:flex;
        justify-content:center;
        align-items:center;
        vertical-align: top;   /*inline元素就是如此*/
        >.content{
            order:2;
        }
        >.icon{
            order:1;
            margin-left:0;
            margin-right:.3em;
        }
        &.icon-right{
            >.content{
             order:1;
            }
            >.icon{
            order:2;
            margin-left:.3em;
            margin-right:0;
            }
        }


&:hover {
            border-color: var(--border-color-hover);
      }
      
&:active {
            background-color: var(--button-active-bg);
          }
&:focus{
    outline:none;
}
    .loading{
        animation: spin 2s infinite linear;
    }
      }
</style>
