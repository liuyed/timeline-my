## myTimeline

#### 截图
![ULoPxO.png](https://s1.ax1x.com/2020/07/23/ULoPxO.png)

#### Example

```
<myTimeline>
 <myTimelineItem  v-for="n in 3" :key="n" small>
    <template v-slot:icon>
        <img src="http://i.pravatar.cc/64">
    </template>
    <span slot="opposite">test{{n}}</span>
    <p class="ivu-text-lg>
       哈哈哈哈哈哈哈{{n}}
    </p>
  </myTimelineItem>
</myTimeline>
```

#### myTimeline

| 属性 | 类型 | 默认 | 描述 ｜
| :------------ |:---------------:| -----:|:---------------:| 
| align-top  | boolean | false |  将时间线项目的插入符号和圆点对齐到顶部 | 
| dense | boolean | false |  隐藏相对的插槽内容，并将所有项目放置在时间轴的一侧 | 
| reverse | boolean | false | 反转时间轴项目 |


#### myTimelineItem

| 属性 | 类型 | 默认 | 描述 ｜
| :------------ |:---------------:| -----:|:---------------:| 
| color | string | my__primary | my__primary、my__info\my__danger\my__warning 将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色 (#033 或 rgba(255, 0, 0, 0.5))。 你可以在 colors page 中找到内置类的列表。 | 
| fill-dot | boolean | false |  从点容器中删除填充 | 
| hide-dot | boolean | false | 隐藏时间线内点的显示 |
| icon | string | undefined | 为点容器指定图标 |
| icon-color | string | undefined | 将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色 (#033 或 rgba(255, 0, 0, 0.5))。 你可以在 colors page 中找到内置类的列表。 |
| left | boolean | false | 显式地将项目设置为左方向 |
| right | boolean | false | 显式地将项目设置为右方向 |