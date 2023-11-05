# DEBUG及类型转换

## 类型转换

我曾经希望能写一个程序，帮助我解决烦人的数学题。它应该能接受两个整数输入，输出它们的和。于是年少轻狂且无知的我写下这样的代码：

```python
number1 = input()
number2 = input()
print(number1+number2)
```

透过现象看本质，你会发现这段代码其实出现过。结合上一节知识，你不难知道会出现以下幽默的结局：

输入：

```
1（回车）
1（回车）
```
输出：

```
11
```

我希望的是整数加减法，而实际运算的却是字符串加减法。很显然，我们需要类型转换，将字符串转换为整数。

我们之前已经了解过了3种数据类型：字符串、整数和浮点数。它们对应英文分别是：string、integer、float。

相应的，有三个类型转换函数名字就是它们英文或英文缩写：

```python
print(float(12))
print(int("24"))
print(str(36.6))
```

输出：

```
12.0
24
36.6
```

改变函数与其输入数据的搭配，自己尝试探索一下其中的门道。

你可能已经注意到，无论打印的是整数、浮点还是字符串，只要它们的“字面意思”相同（比如 `"100"` 与 `100`），那么它们打印出来就是一样的。这很容易给我们造成混淆。这时可以使用 `type()` 函数，示例代码如下：

```python
print(type(11))
print(type("11"))
print(type(11.0))
```

输出：

```
<class 'int'>
<class 'str'>
<class 'float'>
```

自学是编程学习中很重要的一部分，多多尝试，编写可以接受两个整数输入并输出它们的和的程序。一定要自己尝试，再将下述代码当作参考。事实上，你的代码很可能比这里的代码更优秀。

一个可行的版本：

```python
a = int(input())
b = int(input())
print(a+b)
```

当然，这段代码存在一定问题，我们马上会进行分析。

## BUGs

在这里我会先列出来一些代码以及他们产生的 BUG，然后进行分析。

### int()转换错误

运行之前有问题的代码之后，连续敲两下空格，你就会发现 Python 报出了错误：
```
Traceback (most recent call last):
  File "D:\PycharmProjects\pythonProject\test.py", line 1, in <module>
    a = int(input())
ValueError: invalid literal for int() with base 10: ''

Process finished with exit code 1
```

### 变量未定义

代码：

```python
print(a)
```

报错：

```
Traceback (most recent call last):
  File "D:\PycharmProjects\pythonProject\test.py", line 1, in <module>
    print(a)
NameError: name 'a' is not defined

Process finished with exit code 1
```

### 类型错误

代码：

```python
print("abc"*3.0)
```

报错：

```
Traceback (most recent call last):
  File "D:\PycharmProjects\pythonProject\test.py", line 1, in <module>
    print("abc"*3.0)
TypeError: can't multiply sequence by non-int of type 'float'

Process finished with exit code 1
```

### 语法错误

代码：

```python
print("Helloworld)
```

报错：

```
  File "D:\PycharmProjects\pythonProject\test.py", line 1
    print("Helloworld)
                      ^
SyntaxError: EOL while scanning string literal

Process finished with exit code 1
```

### 变量名错误

代码：

```python
123a = 456
```

报错：

```
  File "D:\PycharmProjects\pythonProject\test.py", line 1
    123a = 456
       ^
SyntaxError: invalid syntax

Process finished with exit code 1
```

## DEBUG

### 阅读错误信息

### 网上检索

### Pycharm的DEBUG工具

### Pycharm提示及智能修复

### 慎用AI

### 寻求他人帮助

当你尽全力尝试过上述所有方法，依然无法解决所面临的问题时，寻求他人帮助的可行性才应被讨论。因为这可能是效率最低的一种方法，只能作为“最后一根稻草”。

在询问他人之前，你首先要知道以下几点：

- 没人有义务帮助你
- 可能没有人帮助你
- 即使有，帮助者也许并不一直有时间帮你
- 帮助者没有心理感应能力，你需要阐述你的具体情况
- 你应当对帮助你的人心怀感激
- 如果有能力，你也可以帮助他人

#### 平台

对于国内的网络环境，新手入门学习问答较快速，有效的平台，可能就是 QQ 群和 QQ 频道了。其中有很多活跃的人员，并且相较于贴吧式的网站，实时聊天软件本身就具有速度优势。以“Python”等关键词搜索并加入一些大型群和频道，在其中遵照以下模板发言发帖。

#### 模板

```
1.大佬们好
2.我是一名……，我正在学习……
3.我想实现……的功能
4.我的思路是……
5.出现了……的BUG
6.我尝试过……，但是……，没有解决
7.有没有大佬能帮我看看这个问题，谢谢！
```

1：最合适，简单的称呼也许就是“大佬”了吧。

2：说明你的学习状态：小白？学习过一段时间？高手？以及说明你正在学习的内容，解答者可能会依靠这个信息给出一个使你能轻而易举理解的回答。

3：说明清楚你的目的。

4：你是怎么思考的，这将可以帮助解答者更快发现你的问题，对你的解答也会更有针对性。

5：阐述你遇到的问题

6：声明：“我不是伸手党！”以及更进一步的问题信息或理由。

8：“首尾呼应”，以示礼貌。

示例：

```
大佬们好，我是一名Python小白，我正在学习变量和input函数。
我想实现获得两个整数输入，输出它们和的功能。
我的思路是[代码截图]。
但我发现它并不能正常运行，比如我输入1和1，它会输出11而不是2。
我试过在网上搜索，但是还是没能理解。
有没有大佬能帮我看看这个问题，非常感谢！
```

一个很严重，但却极为常见的错误示例：


```
有没有大佬帮我看一下，没有正常运行[哭][哭][哭]
[杂乱且排版混乱的代码]
```

看到这种求救信号，真是想帮助也无能为力。

#### 非常重要的注意事项

- 当你要发送代码时，不要直接在消息框中发送，使用截图的形式。因为在消息框中发送的代码经常会排版混乱，这对Python这种依靠排版来表达逻辑关系的语言是致命的（我们之后会学到这一点）。

- 当你要发送有关电脑屏幕上显示内容的图片时，发送截图，而不是发送有波纹的，模糊不清的“摄影作品”。在 Windows 系统中，你可以使用快捷键 `Win+Shift+S` 来快速截图。
- 多浏览一些其它的技术交流，很多专业术语渐渐地就耳熟能详，一些代码也能“混个眼熟”。
- 看到学习过的内容重点关注，可以尝试帮助解答或阅读他人回答。
- 很多人也许只会给一个笼统的回答，这时可以用礼貌的语言追问。
- 不要吝啬你的赞美，尽情感谢帮助你的人，这样下次提问会容易很多。
- 如果有人帮助你解答后给你发广告，要小心了，他在利用你的感激之情！

<div style="page-break-after:always"></div>