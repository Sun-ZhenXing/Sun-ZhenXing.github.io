---
title: 进行 ROS 实验
date: 2023-03-21
category:
  - 环境搭建
tag:
  - ROS
---

ROS 实验内容。

<!-- more -->

::: info 说明

本文的源代码在 [Gitee](https://gitee.com/sun-zhenxing/ros-lab) 上保存，在进行本文实验时需要确保安装了 [ROS 环境安装](./ros-env.md) 一文中的指定环境。

:::

## 1. 自定义话题通信

创建一个名为 `learning01_ws` 的工作空间：

```bash
mkdir -p learning01_ws/src
cd learning01_ws/
catkin_make
```

创建名为 `plumbing_pub_sub` 的功能包并添加相关依赖：
1. 在 VS Code 中按 `Ctrl + Shift + P` 使用命令面板，输入 `ROS: Create Catkin Package` 回车
2. 接着输入包名 `plumbing_pub_sub`
3. 输入依赖项 `roscpp rospy std_msgs`

新建文件 `plumbing_pub_sub/msg/Person.msg`，内容是：

```go
string  location
int32   number
float32 floor
```

编辑 `plumbing_pub_sub/package.xml`，在 `<exec_depend>` 标签附近添加下面两句：

```xml
  <build_depend>message_generation</build_depend>
  <exec_depend>message_runtime</exec_depend>
```

编辑 `plumbing_pub_sub/CMakeLists.txt`：

```cmake
# 需要替换
find_package(catkin REQUIRED COMPONENTS
  roscpp
  rospy
  std_msgs
  message_generation
)

# 直接添加
add_message_files(
  FILES
  Person.msg
)

# 直接添加
generate_messages(
  DEPENDENCIES
  std_msgs
)

# 需要替换
catkin_package(
  CATKIN_DEPENDS roscpp rospy std_msgs message_runtime
)
```

现在执行构建，按 `Ctrl + Shift + B`，然后选中 `catkin_make: build`，然后回车。如果配置正确将完成构建。

在编写 Python 代码之前，最好在 `.vscode/settings.json` 中配置 Python 的读取路径：

```json
{
    "python.autoComplete.extraPaths": [
        "/opt/ros/noetic/lib/python3/dist-packages",
        "${workspaceFolder}/devel/lib/python3/dist-packages"
    ],
    "python.analysis.extraPaths": [
        "/opt/ros/noetic/lib/python3/dist-packages",
        "${workspaceFolder}/devel/lib/python3/dist-packages"
    ]
}
```

在 `plumbing_pub_sub/` 文件夹下创建 `scripts/person_pub.py` 和 `scripts/person_sub.py`，下面是创建命令，并赋予可执行权限：

```bash
cd src/plumbing_pub_sub/
mkdir -p scripts
cd script
touch person_pub.py
touch person_sub.py

chmod +x *.py
```

`person_pub.py` 文件的内容是：

```python
#!/usr/bin/env python3

import rospy
from plumbing_pub_sub.msg import Person

if __name__ == '__main__':
    rospy.init_node('AlexPub')
    pub = rospy.Publisher('Alex', Person, queue_size=10)
    p = Person()
    p.location = 'ChangZhou'
    p.number = 66
    p.floor = 1.66
    rate = rospy.Rate(1)
    while not rospy.is_shutdown():
        pub.publish(p)
        rate.sleep()
        rospy.loginfo('House data: %s, %d, %.2f', p.location, p.number, p.floor)
```

`person_sub.py` 文件的内容是：

```python
#!/usr/bin/env python3

import rospy
from plumbing_pub_sub.msg import Person

def do_person(person: Person):
    rospy.loginfo('House data: %s, %d, %.2f', person.location, person.number, person.floor)

if __name__ == '__main__':
    rospy.init_node('AlexSub')
    sub = rospy.Subscriber('Alex', Person, do_person, queue_size=10)
    rospy.spin()
```

现在，编辑 `plumbing_pub_sub/CMakeLists.txt`，在下方添加下面的代码：

```cmake
catkin_install_python(PROGRAMS scripts/person_pub.py
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

catkin_install_python(PROGRAMS scripts/person_sub.py
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)
```

然后按 `Ctrl + Shift + B`，再次执行编译。编译成功后可测试。

下面创建三个终端，执行测试：

::: code-tabs

@tab 终端 1

```bash
# 启动 ROS 核心进程，只需要启动一次
roscore
```

@tab 终端 2

```bash
source ./devel/setup.bash
rosrun plumbing_pub_sub person_pub.py
```

@tab 终端 3

```bash
source ./devel/setup.bash
rosrun plumbing_pub_sub person_sub.py
```

:::

如果两个终端都分别看到消息表明成功。

## 2. 服务通信

创建功能包名为 `plumbing_server_client` 并添加相关依赖：
1. 在 VS Code 中按 `Ctrl + Shift + P` 使用命令面板，输入 `ROS: Create Catkin Package` 回车
2. 接着输入包名 `plumbing_server_client`
3. 输入依赖项 `roscpp rospy std_msgs`

在功能包下创建 `scripts` 文件夹和 `srv` 文件夹，创建文件 `srv/Multiply.srv`，其内容为：

```go
# 客户端请求时发送的两个数字
int32 num1
int32 num2
---
# 服务器响应发送的数据
int32 sum
```

编辑 `plumbing_server_client/package.xml`，在 `<exec_depend>` 标签附近添加下面两句：

```xml
  <build_depend>message_generation</build_depend>
  <exec_depend>message_runtime</exec_depend>
```

编辑 `plumbing_server_client/CMakeLists.txt`：

```cmake
# 需要替换
find_package(catkin REQUIRED COMPONENTS
  roscpp
  rospy
  std_msgs
  message_generation
)

# 直接添加
add_service_files(
  FILES
  Multiply.srv
)

# 直接添加
generate_messages(
  DEPENDENCIES
  std_msgs
)

# 需要替换
catkin_package(
  CATKIN_DEPENDS roscpp rospy std_msgs message_runtime
)
```

现在执行构建，步骤和上面一样。确保生成成功继续。

创建 `scripts/mul_srv.py`，内容为：

```python
#!/usr/bin/env python3

import rospy
from plumbing_server_client.srv import Multiply, MultiplyRequest, MultiplyResponse

def do_req(req: MultiplyRequest):
    res = req.num1 * req.num2
    rospy.loginfo('got data: %d x %d = %d', req.num1, req.num2, res)
    resp = MultiplyResponse(res)
    resp.sum = res
    return resp

if __name__ == '__main__':
    rospy.init_node('MulService')
    server = rospy.Service('Mul', Multiply, do_req)
    rospy.spin()
```

创建 `scripts/mul_cli.py`，内容为：

```python
import sys

import rospy

from plumbing_server_client.srv import Multiply, MultiplyResponse

if __name__ == '__main__':
    if len(sys.argv) != 3:
        rospy.logerr('Params Error!')
        sys.exit(1)
    rospy.init_node('MulCli')
    client = rospy.ServiceProxy('Mul', Multiply)
    num1 = int(sys.argv[1])
    num2 = int(sys.argv[2])
    client.wait_for_service()
    res: MultiplyResponse = client.call(num1, num2)
    rospy.loginfo('got res: %d', res.sum)
```

加入下面的代码到 `CMakeLists.txt`：

```cmake
catkin_install_python(PROGRAMS scripts/mul_srv.py
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

catkin_install_python(PROGRAMS scripts/mul_cli.py
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)
```

现在授予权限并运行服务，测试结果。

```bash
chmod +x plumbing_server_client/scripts/*.py
```

现在执行构建，步骤和上述构建步骤一致，确保构建成功。

下面创建三个终端，执行测试：

::: code-tabs

@tab 终端 1

```bash
# 启动 ROS 核心进程，只需要启动一次
roscore
```

@tab 终端 2

```bash
source ./devel/setup.bash
rosrun plumbing_server_client mul_srv.py
```

@tab 终端 3

```bash
source ./devel/setup.bash
rosrun plumbing_server_client mul_cli.py
```

:::
