<template>
        <div :class="{modal:true,fade:true,in:visiable}" :style="{display:visiable?'block':'none'}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button @click="close" type="button" class="close" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" v-text="title"></h4>
                    </div>
                    <div class="modal-body center-block" style="width: 90%;">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <button @click="close" type="button" class="btn btn-default">取消</button>
                        <button @click="doClickOkBtn" type="button" class="btn btn-primary" v-text="okBtnText"></button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props:{
        title:String,
        okBtnText:String,
        visiable:{
            type:Boolean,
            defaultValue:false
        }
    },
    methods:{
        doClickOkBtn(){
            this.$emit("ok-click");
        },
        close(){
            this.$emit("update:visiable",false);
        }
    }
}
</script>

<style>

</style>