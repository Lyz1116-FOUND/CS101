---
title: Make 入门
---

# Make 入门
> [!note]
> 学习这一篇的内容，需要你对以下技能有基本的了解：
> * 命令行的基本运用


随着学习的深入，同学们编写的代码会逐渐需要多个文件的协同工作。而本文介绍的 Make 便是多文件编译的事实标准。它通过一套基于规则匹配的机制，可以允许我们方便地定义一系列编译规则。Make 程序会根据这些规则，自动地找出哪些文件需要重新编译，大大节省编译时间。

这篇文章是 Make 的快速入门，因此对一些高级的功能做了省略。

在如今 CMake 等高级工具可以生成 Make 的时代，人们往往不会手写复杂的 Makefile
。但是，学习 Makefile 的基本知识，无论是对于快速实现多文件编译，还是阅读他人提供的项目源码，都有很重要的作用。
## 安装 Make
如果你使用 GNU/Linux（包括 WSL），请按照你的发行版的方法安装 Make。

如果你使用 Windows，但你已经安装了 mingw，则你大概率已经有了一份 Make。请找到你的 mingw 安装目录，将它加入 PATH，便可以在命令行中直接执行 make 了。

下面打开终端，键入：

```plain
$ make --version
GNU Make 4.3
Built for x86_64-pc-linux-gnu
Copyright (C) 1988-2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

看到上面这样的文字证明你的安装是正确的。

## 一个简单的示例

假设我们有一个 C 语言项目，包含以下文件：

```
project/
├── main.c
├── hello.c
├── hello.h
└── Makefile
```
我们希望生成单个可执行文件。可以如下编写 Makefile。
```makefile
CC = gcc
CFLAGS = -Wall -g

# 目标文件
TARGET = main

# 需要编译的源文件
SRCS = main.c hello.c

# 生成的对象文件
OBJS = $(SRCS:.c=.o)

# 默认目标
$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) -o $@ $^
# 请注意，这里的缩进使用的是 TAB

# 生成 .o 文件
%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

# 清理
.PHONY: clean
# 这里的 `.PHONY` 是一个特殊的目标，它代表不生成实际文件，只是执行一些动作的目标
clean:
	rm -f $(OBJS) $(TARGET)
```

将这个文件保存到名为 `Makefile` 的文件中，再在项目目录下运行 `make`。你应该看到编译开始执行了。

## Makefile 编写方法
Makefile 是 Make 的规则文件。它定义了一系列规则。 Make 程序会查找这些规则，找到指令要求的那些规则，并自动执行有关的代码。

### 基本语法
一个基本的 Makefile 由以下部分组成：
- 目标（Target）：生成的文件，如可执行文件或对象文件。
- 依赖（Dependencies）：目标所依赖的文件。
- 命令（Commands）：用于构建目标的具体指令，通常是 shell 命令。

基本格式如下：

```
目标: 依赖
\t命令
```

> [!WARNING]
> Makefile 使用 TAB 缩进，千万不能使用空格！

Make 程序会查找这些规则。目前，你可以认为它是这样的过程：

- 先找到第一个匹配的规则
- 如果目标有依赖项：
	- 先检查依赖项 是否需要更新。
    - 递归更新依赖项（依赖项可能又有自己的依赖）。
    - 如果依赖项更新了，目标规则就会执行。

### 变量相关
你可以定义自己的变量。对于入门级的使用，只需要知道以下三种赋值的方法。
```makefile
# 将 CC 变量设置为 gcc
CC = gcc
# 如果 CFLAGS 还没有被赋值，将它设置为 -Wall -g
CFLAGS = -Wall -g
# 向已有的变量追加内容
CFLAGS += -std=c11
```

要使用这些变量，只需要用 `$()` 括起来，它们就会自动被替换为对应的内容。例如：

```makefile
CC = gcc
CFLAGS = -Wall -g

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@
```

这里的 `$(CC)` 就会被替换为 `gcc`。
### 自动变量

#### $@ （目标文件名）

代表当前规则的**目标文件**（target），主要用于编译和链接规则。

示例：

```makefile
main: main.o utils.o
    gcc -o $@ main.o utils.o
```
等价于：
```makefile
main: main.o utils.o
    gcc -o main main.o utils.o
```

#### $< （第一个依赖项）

代表当前规则的**第一个**依赖文件（prerequisite）。常用于从 .c 文件生成 .o 文件。

示例：
```makefile
%.o: %.c
    gcc -c $< -o $@
```
等价于：
```makefile
main.o: main.c
    gcc -c main.c -o main.o
```
#### $^ （所有依赖项）
代表当前规则的**所有**依赖文件，用空格分隔。适用于链接多个对象文件。

示例：
```makefile
main: main.o utils.o
    gcc -o $@ $^
```
等价于：
```makefile
main: main.o utils.o
    gcc -o main main.o utils.o
```
#### $* （匹配模式的主干部分）
代表模式匹配的**通配符**部分，即 `%` 所匹配的内容。通常用于处理不同扩展名的文件。

示例：
```makefile
%.o: %.c
    gcc -c $< -o $@
```
如果执行 `make main.o`，则这里我们有：

- `$*` 代表 main
- `$<` 代表 main.c
- `$@` 代表 main.o

### 通配符和变量的变换
`%` 符号是一个 **通配符**，可以匹配一个或者多个不含 `/` 的字符。
因此，可以用它来匹配当前目录下所有满足某个模式的文件。


假如我们有一系列 `.o` 的文件名，要编译得到它们，就要从对应的 `.c` 得来。

考虑下面的使用例子：
```makefile
SOURCES = grade.cpp median.cpp Student_info.cpp
OBJECTS = $(SOURCES:%.cpp=%.o)

main: main.o $(OBJECTS)
	$(CXX) $^ -o $@
```

我们希望能让 `$(OBJECTS)` 自动获得 `SOURCES` 变量里的那些文件替换后缀名到 `.o` 之后的结果。这就需要使用变量替换语法了。

最基本、常用的变量替换语法是：

```
TARGET = $(SOURCE:pat=rep)
```
它表示，将 `SOURCE` 变量中的**所有** `pat` 子串，全部替换为 `rep`。

此外，`make` 还提供了很多更高级的变量替换语法，如 `patsubst`。这里限于篇幅就不再介绍了。
