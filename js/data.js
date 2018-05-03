var dataList = {
    selected: '1',
    fatherList: [{
            attr: 'flex-direction',
            introduce: "决定主轴的方向（即项目的排列方向）",
            options: [
                { introduce: '默认值 主轴为水平方向，起点在左端。', value: 'row' },
                { introduce: '主轴为水平方向，起点在右端。', value: 'row-reverse' },
                { introduce: '主轴为垂直方向，起点在上沿。', value: 'column' },
                { introduce: '主轴为垂直方向，起点在下沿。', value: 'column-reverse' }
            ],
            selected: null
        },
        {
            attr: 'flex-wrap',
            introduce: "如果一条轴线排不下，如何换行。",
            options: [
                { introduce: '默认 不换行', value: 'nowrap' },
                { introduce: '换行，第一行在上方', value: 'wrap' },
                { introduce: '换行，第一行在下方', value: 'wrap-reverse' }
            ],
            selected: null
        },
        {
            attr: 'justify-content',
            introduce: "定义了项目在主轴上的对齐方式。",
            options: [
                { introduce: '（默认值）左对齐', value: 'flex-start' },
                { introduce: '右对齐', value: 'flex-end' },
                { introduce: '居中', value: 'center' },
                { introduce: '两端对齐，项目之间的间隔都相等', value: 'space-between' },
                { introduce: '每个项目两侧的间隔相等', value: 'space-around' }
            ],
            selected: null
        },
        {
            attr: 'align-items',
            introduce: "定义项目在交叉轴上如何对齐。",
            options: [
                { introduce: '交叉轴的起点对齐。', value: 'flex-start' },
                { introduce: '交叉轴的终点对齐', value: 'flex-end' },
                { introduce: '交叉轴的中点对齐', value: 'center' },
                { introduce: '项目的第一行文字的基线对齐', value: 'baseline' },
                { introduce: '默认值 如果项目未设置高度或设为auto，将占满整个容器的高度。', value: 'stretch' }
            ],
            selected: null
        }
    ],
    childList: [

    ]
}