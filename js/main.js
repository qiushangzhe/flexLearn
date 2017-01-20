// $('#flex-direction').on('change',function(){
//     var target = $(this);
//     $('#showBox').css('flex-direction',target.val());
// })
//
// $('.flex-direction-introduce').on('click',function(){
//     $('.flex-direction-introduce-box').toggle( "fold", 100 );
// })
//
// $('#flex-wrap').on('change',function(){
//     var target = $(this);
//     $('#showBox').css('flex-wrap',target.val());
// })
//
// $('.flex-wrap-introduce').on('click',function(){
//     $('.flex-wrap-introduce-box').toggle( "fold", 100 );
// })
var vue = new Vue({
    el:"#app",
    data:dataList,
    methods:{
        changeAttr:function(attr){
            $('#showBox').css(attr,this.selected);
        }
    }
})
