# 安装Pycharm

## Pycharm是IDE

用编程语言写出的文章叫做代码。平时我们写文章时，我们选择的软件可以是最普通的记事本，也可以是像 Word，WPS office 这样拥有更多功能，能方便我们写作的工具。写代码也是一样。我们可以用记事本来写，但为了高效率的开发，我们通常会使用一些 IDE 软件。

什么是 IDE 呢？IDE 是 Integrated Development Environment，集成开发环境的缩写。一个典型的 IDE 软件会为我们提供软件开发流程中需要的工具，来方便我们编程。就像 Word 会提供语法检测，英文句首字母大写等等功能。

Pycharm 是由 Jetbrain 公司出品的一款专为 Python 量身定制的 IDE。这里多说一嘴，我们一般习惯把 py 当成前缀或后缀添加到一个单词中来表示这个单词与 Python 有关系，比如好久没更新，但很有名气的 pygame 库（“库”指别人写好的，你直接能拿来用的代码），一看就知道它是一个用于游戏制作的 Python 库。按照这个理解来看，Pycharm 的意思是“Python 的魅力”，真是个好名字。

## 安装Pycharm

Pycharm 的安装并不复杂，也没有坑。在这里，我告诉你你只需要安装免费的社区版本，而不是收费的专业版，因为免费的版本在初学阶段已经完全够用了。至于具体的安装细节和新建项目等简单操作，我相信你可以自己解决。

## 配置Python环境

安装好 Pycharm 之后，我们要告诉它之前安装的 Python 解释器在哪里。需要注意的是，在写作本书时 Pycharm 推出了新的界面，但差别不大，这里以旧版的界面作为示例。

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/1.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">点击 File->Settings</div> </center><br>

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/4.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">Settings 窗口，点击 Project（后面是你的项目名称）</div> </center><br>

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/3.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">点击 Python Interpreter</div> </center><br>

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/5.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">点击 Add Interpreter</div> </center><br>

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/6.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">点击 System Interpreter</div> </center><br>

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/7.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">如果正确安装 Python，Pycharm会自动识别出来，点击OK即可。如没有识别，点击图示按钮，手动选择 Python路径</div> </center><br>

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/8.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">Python 安装默认路径，可供参考（“peler”应改为你自己的用户名）</div> </center><br>

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/9.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">配置完成后，右键点击项目文件夹，新建一个 Python 文件</div> </center><br>


在其中输入：

```python
print("HelloWorld")
```

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/10.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">点击运行</div> </center><br>

<center>    <img style="border-radius: 0.3125em;    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"     src="before_study/pycharm.assets/11.png">    <br>    <div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">运行后的截图</div> </center><br>

如果你得到了和上图类似的结果，那么恭喜你，你已经正式踏入了 Python 学习的大门！洗个澡好好睡一觉，明天我来介绍这段代码的含义。

<div style="page-break-after:always"></div>
