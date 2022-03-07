# ne-velocity-loader

Webpack velocity loader for NETEASE

一个简单的Webpack velocity loader，在cms项目中使用。可以开发环境渲染vm模板，支持cms方法。

## 支持语法

```html
#macro (getImglist)
  #set($imgurl = '')
  #if($one.get('imgsrc3g') != "")
    #set($imgurl = $one.get('imgsrc3g'))
  #else
    #set($imgurl = [图片链接])
  #end
#end
#set($list=$tag.getList("topicid=0025986V;listnum=2;titlelength=16;pointstart=60;pointend=150;split=1;"))
#if ($list)#foreach ($one in $list)
  #getImglist()
  <div>$imgurl</div>
  <div>[摘要]</div>
#end#end
```

目前支持大部分常用cms方法，包括$tag、$tools

## 设置

请在dev模式中使用！

```js
// webpack.dev.config.js

module: {
  rules: [{
    test: /\.html?$/,
    use: [
      {
        loader: 'html-loader' // Used to output as html
      },
      {
        loader: 'ne-velocity-loader'
      }
    ]
  }]
}
```


## 基于velocityjs开发

[velocityjs](https://github.com/shepherdwind/velocity.js)
