var vue = new Vue({
    el: "#app",
    data: dataList,
    mounted() {
        var clipboard = new ClipboardJS('#result');
        clipboard.on('success', function(e) {
            // console.info('Action:', e.action);
            // console.info('Text:', e.text);
            // console.info('Trigger:', e.trigger);
            e.clearSelection();
            var options = {
                iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557750214150&di=0c45be9ff3c170a13078fb6c90869e8c&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F41%2F88%2F84573d5a843d19d.jpg',
                title: '恭喜',
                body: 'flex代码复制成功，赶快去使用吧',
            };
            $.notification(options);
        });
        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    },
    methods: {
        changeAttr: function(item) {
            $('#showBox').css(item.attr, item.selected);
            const buffer = this.fatherList.filter((item)=>{ return item.selected })
            this.result = buffer;
        },
        clearAttr: function(item) {
            $('#showBox').css(item.attr, '');
            item.selected = null
        },
    }
})