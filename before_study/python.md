# 初识Python
## Python简介

开始我们的第一课，肯定要先介绍一下 Python 了。根据我博览烂书和参加少儿编程试听课捣乱的经历，这时候应该开始介绍学 Python 的前途，扯上人工智能、大数据等高级概念，在放几张很傻的“黑客”图片，开始唬人和画饼了。不不不，我会告诉你，这世界上有很多编程语言，就像人类有很多语言一样，只不过编程语言是说给计算机，让计算机理解的。这些语言之间有许多差别，有的看起来更加严谨，有的更有诗意。

Python 就是一种编程语言，用编程语言写下的文章叫做代码。对于不同编程语言，表达同一个意思的方式不同。比如我想告诉一台计算机把大象放进冰箱的步骤，在一个名字叫作 C 的编程语言中是这样的：

```
把大象拿到冰箱门前，但别挡住冰箱门
放下大象，打开冰箱门
拿起大象，放到冰箱中
放下大象，关闭冰箱门
```

在 Python 中是这样：

```
打开冰箱门
放入大象
关门
```

当然，以上只是一个比方，但可见使用Python，我们可以说更简洁的话让计算机理解更多的内容，对初学者更加友好。

## Python历史
Python 的创始人叫做 吉多·范罗苏姆，在 1989 年的圣诞节期间，他决定创造一种新的编程语言，来实现很多有用的功能。同时，他还很喜欢看 BBC 的电视剧《Monty Python's Flying Circus》，于是便将这门编程语言取名为 Python，直译过来的意思是“大蟒蛇”。看看它的 logo，是不是两只蛇呢？
    
<center>    <img src="before_study/python.assets/python-logo@2x.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">Python图标</div> </center><br>

## 安装Python

Python 是一门编程语言，不光我们要学习它，计算机也不是天生就能听懂。为了让计算机能听懂这门语言，我们需要安装 Python 的解释器。解释器是一种软件，它会把我们写下的代码一句句的解释为计算机能理解的内容，以实现我们和计算机的沟通。

Python 解释器的安装并不复杂，但有许多坑需要避开。我不会像有些编程“老师”一样告诉你网址，点击网站按钮的顺序等等详细步骤，甚至帮你直接远程安装，这无异于害人。相反的，我会引导你自己解决这个问题。在这里我会用 Windows 系统作为演示，但这个解决问题的方法是普适的。

让我们来分析一下，我们的需求是：

```
在自己的电脑上安装 Python 解释器
```

然而我们现在对怎么安装一无所知，我们有那些途径可以获取相关的信息呢？

```
找身边精通电脑的朋友请教
请教信息课老师
上网搜索相关资料
到图书馆查阅相关书籍
……
```

这些方式都可以获取有效信息，不难看出，“上网搜索相关资料”是最简便的，随时可以进行的。

那我们用什么搜索引擎搜索呢？百度？谷歌？对于在国内的网络大环境下，我强烈推荐微软出品的 Bing 搜索引擎，网址 <https://www.bing.com>。相比之下，Bing 的广告较少，且内容更加全面。

打开电脑上的浏览器，输入网址，你会看到如下页面：

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/python.assets/1.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">Bing主页（背景可能有所不同）</div> </center><br>


我们在搜索框中输入内容就可以搜索。但是怎么搜索呢？一个显而易见的答案是直接搜索“如何安装Python”，这当然可行，却不够简便。一个很有用的技巧是只输入关键字，然后用空格将他们分开，比如“Python 安装”。这样搜索出来的结果和上一种方式几乎是等价的，甚至还能搜索出更多有用的东西。

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/python.assets/2.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">搜索“Python 安装”后的结果</div> </center><br>


注意注意注意！广告在怎么少，也是相对的。我们需要注意观察，广告的标识也比较明显。往下翻一翻，会看到各种博客文章和教程。国内常见的靠谱一点的网站有 CSDN，博客园，知乎，简书等等。我们点击进入其中的一篇，阅读一下，我们也许能找到一些有用的信息：

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/python.assets/3.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">搜索到的其中一篇博客内容</div> </center><br>

在这里我们找到了“总的下载地址”，尝试点击进去：

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/python.assets/4.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">Python官方下载页面</div> </center><br>

这时候，就要锻炼我们自主阅读的能力了。尝试根据提示下载 Python 安装包。对了，经过时间的流逝，你所看到的页面可能与这里不同。在编程中，这是经常发生的事，所以培养自己阅读理解的能力很重要。

还需要注意的一点是，注意辨别盗版网站！你可以通过搜索的方式来获取官方网址再和所看到的博客中的网址比较，来确保自己没有进入盗版网站。如果你进入到像下面这样的网站，就要小心了：

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/python.assets/5.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">一个无良盗版网站</div> </center><br>

以上的过程很有挑战性，并不容易。如果你第一次没有找到靠谱的教程，那就多尝试几次。最终，打开你下载的文件，应该是这样一个页面：

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/python.assets/6.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">Python安装界面（版本号等可能不同）</div> </center><br>

你肯定可以找到一个教程告诉你具体怎么操作，但是为了防止你掉进一个巨坑里面，我在这里提一嘴：
***一定要把 Add Python to PATH 勾选上，这能解决后续 99.9% 的麻烦！***

勾选 Add Python to PATH 后，按照你找到的教程继续操作下去就好了，加油！

<div style="page-break-after:always"></div>
