<template>
  <div class="modal-backdrop">
    <div class="modal">
        <slot name="header">
            <button type="button" class="btn-close" @click="close">Закрыть</button>
        </slot>
        <div class="content" >
          <RichTextRenderer :document="textPopup"/>
        </div>
    </div>
  </div>

</template>


<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';


export default {
  name: 'politic-popup',
  components:{
    RichTextRenderer
  },
  props:{
      textPopup: Object
  },
  methods: {
    close() {
      this.$emit('close', true);
    },
  },
  computed:{
  }
}


</script>


<style lang="scss" scoped>

::-webkit-scrollbar {
    -webkit-appearance: none;
}
::-webkit-scrollbar:vertical {
    width: 12px;
}
::-webkit-scrollbar:horizontal {
    height: 12px;
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .5);
    border-radius: 10px;
    border: 2px solid #ffffff;

}
::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: none;

}


.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
    width: 100%;
    height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
    z-index: 100000;
}
.modal{
    overflow-y: auto;
    background-color: black;
    position: relative;
    display: flex;
    width: 80%;
    height: 80%;
    border-radius: 5%;
    a{
        margin-left: 20px;
        font-size: 1.5rem;
        text-decoration: underline;
    }
}

.big-popup{
    width: 80%;
    height: 80%;
    overflow: hidden;
    .content{
        max-width: 80%;
        max-height: 80%;
    }
}

    .btn-close{
        position: absolute;
        right: 30px;
        top: 10px;
        background: none;
        color: white;
        font-size: 1.5rem;
        margin-left: auto;
        border: none;
        cursor: pointer;


        &:after{
            content: '';
            background: url("../assets/img/close.png") no-repeat center center;
            position: absolute;
            width: 18px;
            height: 18px;
            left: 100%;
            top: 0;
            bottom: 0;
            margin: auto;
        }
    }

    .content{
        overflow-y: auto;
        overflow-x: hidden;
        max-width: 80%;
        margin: 3rem auto;
        max-height: 90%;
        position: relative;
        text-align: center;
        color: white;
        }
</style>