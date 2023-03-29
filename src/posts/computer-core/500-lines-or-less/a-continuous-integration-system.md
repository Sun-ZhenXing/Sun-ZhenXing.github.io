---
title: '3. 一个持续集成系统'
date: 2023-03-29
category:
  - 计算机核心知识
tag:
  - '500 Lines or Less'
---

第三章：一个持续集成系统。

<!-- more -->

[[TOC]]

::: info 原文信息

本文的翻译部分参考了 [500LineorLess_CN](https://github.com/HT524/500LineorLess_CN/blob/master/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E7%B3%BB%E7%BB%9F%20A%20Continuous%20Integration%20System/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E7%B3%BB%E7%BB%9F.md) 的内容。

本文的原文可访问 [aosabook.org](http://aosabook.org/en/500L/pages/a-continuous-integration-system.html) 阅读。

:::

Malini Das 是一个致力于改善编码速度（当然是在保证代码安全的前提下），并不断寻求交叉编程的解决方案的软件工程师。她曾以工具工程师的身份供职于 Mozilla，现在她在 Twitch 工作。可以通过关注 [Malini 的 Twitter](https://twitter.com/malinidas) 或是她的 [Blog](http://malinidas.com/) 来了解她的最新动态。

## 什么是持续集成系统

在软件开发的过程中，我们需要一种方式来保证每一个新功能都能稳定的实现，每一个 Bug 都能按照预期得到修复。通常来讲这种方式就是对代码进行测试。多数情况下，开发人员会在开发环境中直接进行测试来确保功能实现的完整和稳定，很少有人会有时间在每一种可能的运行环境中都进行测试。进一步来讲，随着开发的不断进行，需要进行的测试不断的增加，在开发环境中对代码进行完全的测试的可行性也随之变得越来越低。持续集成系统的出现，正是为了解决这种开发中的困境。

**持续集成**（CI）系统是专门用来对新代码进行测试的系统。当一段新的代码被提交时，持续集成系统的作用就是确保这些新代码不会导致之前测试样例的失败。要实现这样的功能，就要求持续集成系统可以获取到新更改的代码，自动完成测试，并生成测试报告。同时，持续集成系统还需要保证良好的稳定性。也就是说，当系统的任何一部分出现错误甚至崩溃时，整个系统应该可以从上一次中断的地方重新恢复运行。

这个系统同样需要均衡负载的能力，这样一来当提交新版本的时间比运行测试的时间还要短的时候，我们仍然可以保证在一个合理的时间内获得测试的结果。我们可以通过向多线程分发测试样例，并行化运行他们来实现这一点。本项目中将介绍一个小型可拓展的极简分布式持续集成系统。

## 注意事项及相关说明

在本项目中使用 Git 作为进行测试的代码托管系统。我们只会调用标准的代码管理指令，所以，如果你并不熟悉 Git 的操作，但对于使用其他像 [SVN](https://subversion.apache.org/) 或者 [Mercurial](https://www.mercurial-scm.org/) 这样的 **版本控制系统**（VCS）很熟悉，那么你也可以继续跟随下面的操作进行开发试验。

出于代码长度的限制及单元测试的要求，我简化了测试样例搜索的机制。我们将仅仅运行在名为 `tests` 的文件夹中的测试样例。

通常来讲，持续集成系统监听的应该是远程代码托管库的变化。但是为了方便起见，在我们的示例之中，我们选择监听本地的代码库文件来代替远程文件。

持续集成系统并不是必须按照固定的时间表执行。当然你也可以设定成每一次或几次提交时自动运行。在我们的例子中，我们将 CI 设定为定期运行。也就是说，如果我们设定 CI 系统设定为 5 秒钟运行一次，那么每隔 5 秒系统就会对 5 秒内最近的一次提交进行测试。不论这 5 秒内发生了多少次提交，系统只会对最后一次提交的结果进行一次测试。

CI 系统旨在监听代码库中的变化。在实际中使用的 CI 系统可以通过代码库的通知来获取提交信息。例如，在 Github 中提供了专门的 “提交钩子”。在这种模型中 CI 系统的会被 Github 中设置的通知 URL 对应的服务器唤醒进行相应的响应。但是这种模型在我们本地的试验环境中太过复杂了，所以我们使用了观察者模型。在这种模型中系统主动检测代码变化而不是等待代码管理库的通知。

CI 系统还需要一个报告形式（比如一个网页），这样触发测试的人将测试的结果提交给 CI 的结果组件，其他项目中的参与者就可以直接查看到相应的结果。

注意，在我们的项目中，只是讨论了众多 CI 系统框架中的一种。在这种框架中，我们将我们的项目简化成了三个主要组成部分。

## 引言

最基础的持续集成系统分为三个部分：监听器，测样例调度器，和测试运行器。首先监听器会监视代码库，当发生提交时，监听器会通知调度器。之后，样例调度器会分配测试运行器完成对应提交版本号的测试。

这三部分的组合方式有很多。我们可以将他们全部运行在一台电脑的同一个线程之中。但是这样一来，我们的 CI 系统就会缺少了处理大负载的能力，当很多的提交带来了大量的测试内容时，这种方案非常容易引起工作的积压。同时这种方案的容错率非常低，一旦运行该系统的计算机发生故障或是断电，没有后备的系统完成中断的工作。我们希望我们的 CI 系统应该根据需求尽可能的同时完成多项测试工作，并且在机器发生意外停机时有很好的后备运行方案。

为了构建一个负载能力强并且容错率又高的 CI 系统，在本项目中，上述的每一个组件都以独立的进程运行。每个进程之间完全独立，并且每种线程可以同时运行多个实例。在很多的测试工作需要同时展开时这种方案会带来非常大的便利。我们可以在不同的线程上同时运行多个测试运行器的实例，每个测试运行器独立工作，这样就可以有效的解决测试队列积压的问题。

在本项目中这些组件虽然是相互独立的运行在单独的线程上，但是线程之间可以通过套接字进行通信，这样我们就可以在互联网中的不同主机上分别运行这些进程。我们会为每一个进程分配一个地址/端口，这样每个进程之间就可以通过向分配到的地址发送消息来互相通信。

通过分布式的架构，我们可以做到在硬件发生错误时即时的进行处理。我们可以把监听器，测样例调度器，和测试运行器分别运行在不同的机器上，他们可以通过网络保持相互通信。当他们之中的任何一个发生问题时，我们可以安排一台新的主机上线运行发生问题的进程。这样一来这个系统就会有非常高的容错率。

在本项目中，并没有包含自动恢复的代码。自动恢复的功能去取决于你使用的分布式系统的结构。在实际的使用中，CI 系统通常运行在支持故障信息转移（举个例子，当分布式系统中的一个机器发生故障，我们设定好的后备机器会自动接手中断的工作）的分布式系统之中。

为了方便测试我们的系统，在本项目中我们将会在本地手动的触发一些进程来模拟分布式的环境。

## 项目的文件结构

项目中每个组件的 Python 文件结构如下：
- 监听器（`repo_observer.py`）
- 测试样例调度器（`dispatcher.py`）
- 测试运行器（`test_runner.py`）

上述每个线程之间通过套接字通信，我们将用于实现通信功能的代码统一的放在 `helpers.py` 中。这样就可以让每个组件直接从这个文件中导入相关功能，而不用再每个组件中重复的写这段代码。

另外，我们还用到了 Bash 脚本。这些脚本用来执行一些简单的 Bash 和 Git 的操作，直接通过 Bash 脚本要比利用 Python 提供的系统级别的模块（比如，`os` 或者 `subprocess` 之类的）要更方便一些。

最后，我们还建立了一个 `tests` 目录来存放我们需要 CI 系统运行的测试样例。在这个目录中包含两个用于测试的样例，其中一个样例模拟了样例通过时的情况，另一个则模拟了失败时的情况。

## 初始设置

虽然我们的 CI 系统是为分布式的运行而设计的，但是为了在理解 CI 系统运行原理的过程中不受网络因素的影响，我们会在同一台计算机上运行所有的组件。当然，如果你想要试一试分布式的运行环境，你也可以将每一个组件分别运行到不同的主机上。

持续集成系统通过监听代码的变动来触发测试，所以在开始之前我们需要设置一个用于监听的代码库。

我们称这个用于测试的项目为 `test_repo`：

```bash
mkdir test_repo 
cd test_repo 
git init
```

监听器模块通过检查提交（commit）来进行代码更新的监听，所以我们至少需要一次的 commit 才能进行监听器模块的测试。

将 `tests` 文件夹拷贝到 `test_repo` 中，然后提交：

```bash
cp -r /this/directory/tests /path/to/test_repo/
cd /path/to/test\_repo
git add tests/
git commit -m "add tests"
```

现在，在我们测试用的代码仓库中的 master 分支上有了一次可以用来测试的提交。

监听器组件需要一份单独的代码拷贝来检测新的提交。让我们从 master 分支做一份代码拷贝，起名为 `test_repo_clone_obs`：

```bash
git clone /path/to/test_repo test_repo_clone_obs
```

测试运行器同样需要一个自己的代码拷贝，这样它才能在 commit 发生时运行相关的测试。我们同样从 master 分支做一份代码拷贝，并起名为 `test_repo_clone_runner`：

```bash
git clone /path/to/test_repo test_repo_clone_runner
```

## 组件

### 监听器（`repo_observer.py`）

监听器的任务是监听代码库中的改动，并在发现改动是通知测试样例分配器。为了保证我们的 CI 系统与各种版本控制系统（并不是所有的 VCS 都有内置的通知系统）都能够兼容，我们设定 CI 系统定时检查代码库是否有新的提交，而不是等待 VCS 在代码提交时发送通知。

监听器会定时轮询代码库，当有新的提交时，监听器会向分配器推送需要运行测试的代码的版本 ID。监听器的轮询过程是：
1. 首先，在监听器的储存空间中得到当前的提交版本；
2. 其次，将本地库更新至这个版本；
3. 最后，将这个版本与远程库最近一次的提交 ID 进行比对。

这样，监听器中本地的当前版本与远程的最新版本不一致时就判定为发生了新的提交。在我们的 CI 系统中，监听器只会向分配器推送最近的一次提交。这意味着，如果在一次的轮询周期内发生了两次提交，监听器只会为最近的一次运行测试。通常来讲，CI 系统会为自上一次更新以来的每一次的提交运行相应的测试。但是为了简单起见，这次我们搭建的 CI 系统采取了仅为最后一次提交运行测试的方案。

监听器必须清楚自己监听的到底是哪一个代码库，我们之前已经在 `/path/to/test_repo_clone_obs` 建立了一份用于监听的代码拷贝。我们的监听器会使用这份拷贝进行检测。为了监听器能够使用这份拷贝，我们在调用 `repo_observer.py` 时会传入这一份代码拷贝的路径。监听器会利用这份拷贝从主仓库中拉取最新的代码。

同样，我们还需要为监听器提供测试用例分配器的地址，这样监听器推送的消息才能传递到分配器中。在运行监听器时，可以通过命令行参数 `--dispatcher-server` 来传递分配器的地址。如果不手动传入地址，分配器的默认地址取值为：`localhost:8888`。

```python 
def poll():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dispatcher-server",
                        help="dispatcher host:port, " \
                        "by default it uses localhost:8888",
                        default="localhost:8888",
                        action="store")
    parser.add_argument("repo", metavar="REPO", type=str,
                        help="path to the repository this will observe")
    args = parser.parse_args()
    dispatcher_host, dispatcher_port = args.dispatcher_server.split(":")
```

当运行监听器脚本时，会直接从`poll()`开始运行。这个函数会将命令行的参数传递进来，并开始一个无限的 `while` 循环。这个 `while` 循环会定期的检查代码库的变化。这个循环中所做的第一个工作就是运行 Bash 脚本`update_repo.sh`。

> 这里没有使用 Python 指令而是使用 Bash 脚本，是因为我们需要执行一些像检查文件是否存在，创建文件以及使用 Git 指令这样的操作。相比 Python 的实现方式，Shell 脚本更加直接而简单。另外，Python 还提供了很多跨平台的模块方便我们的使用。比如，Python 的内置模块 `os` 可以用来操作文件系统，GitPython 模块可以提供 Git 的调用方法，但是使用这些方法不免显得有些舍近求远。

```python
    while True:
        try:
            # call the bash script that will update the repo and check
            # for changes. If there's a change, it will drop a .commit_id file
            # with the latest commit in the current working directory
            subprocess.check_output(["./update_repo.sh", args.repo])
        except subprocess.CalledProcessError as e:
            raise Exception("Could not update and check repository. " +
                            "Reason: %s" % e.output)
```

`update_repo.sh` 用于识别新的提交并通知监听器。它首先记录当前所在的提交 ID，然后拉取最新的代码，接着检查最新的提交 ID。如果当前的版本 ID 与最新的匹配，说明代码没有变动，所以监听器不会作出任何响应。但是，如果提交 ID 间存在不同，就意味着有新了新的提交。这时，`update_repo.sh` 会创建一个叫 `.commit_id` 的文件来记录最新的提价 ID。

`update_repo.sh` 的细分步骤如下：

首先，我们的脚本源自于一个叫 `run_or_fail.sh` 的文件。`run_or_fail.sh` 提供了一些 Shell 脚本的辅助函数。通过这些函数我们可以运行指定的脚本并可以在运行出错时输出错误信息。

```bash 
#!/bin/bash

source run_or_fail.sh 
```

接下来，我们的脚本会试图删除`.commit_id`文件。因为`repo_observer.py`会不断循环的调用`updaterepo.sh`，如果在上一次的调用中产生了`.commit_id`文件，并且其中储存的版本 ID 我们在上一次轮询中已经完成了测试，就会造成混乱。所以我们在每次都会先删除上一次的`.commit_id`文件，以免产生混乱。

```bash
bash rm -f .commit_id 
```

在删除了文件之后（在文件已经存在的情况下），脚本会检查我们监听的代码库是否存在，再把`.commit_id`更新到最近的一次提交，保证`.commit_id`文件与代码库提交 ID 之间的同步。

```bash
run_or_fail "Repository folder not found!" pushd $1 1> /dev/null
run_or_fail "Could not reset git" git reset --hard HEAD
```

再之后，读取 git 的日志，将其中最后一次的提交 ID 解析出来。

```bash
COMMIT=$(run_or_fail "Could not call 'git log' on repository" git log -n1)
if [ $? != 0 ]; then
  echo "Could not call 'git log' on repository"
  exit 1
fi
COMMIT_ID=`echo $COMMIT | awk '{ print $2 }'`
```

接下来，拉取代码库，获取最近所有的更改，并得到最新的提交ID。

```bash
run_or_fail "Could not pull from repository" git pull
COMMIT=$(run_or_fail "Could not call 'git log' on repository" git log -n1)
if [ $? != 0 ]; then
  echo "Could not call 'git log' on repository"
  exit 1
fi
NEW_COMMIT_ID=`echo $COMMIT | awk '{ print $2 }'`
```

最后，如果新得到的提交 ID 与上一次的 ID 不匹配，我们就知道在两次轮询间发生了新的提交，所以我们的脚本应该将新的提交 ID 储存在 `.commit_id` 文件中。

```bash
# if the id changed, then write it to a file
if [ $NEW_COMMIT_ID != $COMMIT_ID ]; then
  popd 1> /dev/null
  echo $NEW_COMMIT_ID > .commit_id
fi
```

当 `repo_observer.py` 中的 `update_repo.sh` 脚本运行街数后，监听器会检查 `.commit_id` 是否存在。如果文件存在，我们就知道在上一次的轮询后又发生了新的提交，我们需要通知测试样例调度器来开始测试。监听器会通过连接并发送一个 `'status'` 请求来检查调度器服务的运行状态，以保证它处在可以正常接受指令的状态正常工作状态。

```python
        if os.path.isfile(".commit_id"):
            try:
                response = helpers.communicate(dispatcher_host,
                                               int(dispatcher_port),
                                               "status")
            except socket.error as e:
                raise Exception("Could not communicate with dispatcher server: %s" % e)
```

如果调度器返回一个 `"OK"`，监听器就会读取 `.commit_id` 文件中最新的提交 ID，并使用 `dispatch:<commit ID>` 请求将 ID 发送到调度器中。监听器会每个 5 秒发送一次指令。如果发生任何错误，监听器同样会每隔 5s 进行一次重试。

```python
            if response == "OK":
                commit = ""
                with open(".commit_id", "r") as f:
                    commit = f.readline()
                response = helpers.communicate(dispatcher_host,
                                               int(dispatcher_port),
                                               "dispatch:%s" % commit)
                if response != "OK":
                    raise Exception("Could not dispatch the test: %s" %
                    response)
                print "dispatched!"
            else:
                raise Exception("Could not dispatch the test: %s" %
                response)
        time.sleep(5)
```

如果你不使用 `KeyboardInterrupt`（`Ctrl + C`）终止监听器发送进程或发送终止信号，监听器会永远重复这一操作。

### 测试样例分配器（`dispatcher.py`）

测试样例分配器是一个用来为测试运行器分配测试任务的独立进程。他会在一个指定端口监听来自代码库监听器及测试运行器的请求。分配器允许测试运行器主动注册，当监听器发送一个提交 ID 时，它会将测试工作分配给一个已经注册的测试运行器。同时，它还可以平稳的处理测试运行器遇到的各种问题，当一个运行器发生故障，它可以立即将该运行器运行测试的提交 ID 重新分配给一个新的测试运行器。

`dispatch.py` 脚本从 `serve` 函数开始运行。首先，它会解析你设定的分配器的地址及端口：

```python
def serve():
    parser = argparse.ArgumentParser()
    parser.add_argument("--host",
                        help="dispatcher's host, by default it uses localhost",
                        default="localhost",
                        action="store")
    parser.add_argument("--port",
                        help="dispatcher's port, by default it uses 8888",
                        default=8888,
                        action="store")
    args = parser.parse_args()
```

这里我们会开启分配器进程以及一个 `runner_checker` 函数进程，和一个 `redistribute` 函数进程。

```python
    server = ThreadingTCPServer((args.host, int(args.port)), DispatcherHandler)
    print('serving on %s:%s' % (args.host, int(args.port)))

    ...

    runner_heartbeat = threading.Thread(target=runner_checker, args=(server,))
    redistributor = threading.Thread(target=redistribute, args=(server,))
    try:
        runner_heartbeat.start()
        redistributor.start()
        # Activate the server; this will keep running until you
        # interrupt the program with Ctrl+C or Cmd+C
        server.serve_forever()
    except (KeyboardInterrupt, Exception):
        # if any exception occurs, kill the thread
        server.dead = True
        runner_heartbeat.join()
        redistributor.join()

```

`runner_checker` 函数会定期的 Ping 每一个注册在位的运行器，来确保他们都处于正常工作的状态。如果有运行器没有响应，该函数就会将其从注册的运行器池中删除，并且之前分配给他的提交 ID 会被重新分配给一个新的可用的运行器。函数会在 `pending_commits` 变量中记录运行受到运行器失去响应影响的提交 ID。

```python
    def runner_checker(server):
        def manage_commit_lists(runner):
            for commit, assigned_runner in server.dispatched_commits.iteritems():
                if assigned_runner == runner:
                    del server.dispatched_commits[commit]
                    server.pending_commits.append(commit)
                    break
            server.runners.remove(runner)
        while not server.dead:
            time.sleep(1)
            for runner in server.runners:
                s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                try:
                    response = helpers.communicate(runner["host"],
                                                   int(runner["port"]),
                                                   "ping")
                    if response != "pong":
                        print "removing runner %s" % runner
                        manage_commit_lists(runner)
                except socket.error as e:
                    manage_commit_lists(runner)
```

`redistribute` 用来将 `pending_commits` 中记录的提交 ID 进行重新分配。`redistribute` 运行时会不断的检查 `pending_commits` 文件，一旦发现 `pending_commits` 中存在提交 ID，函数会调用 `dispatch_tests` 方法来分配这个提交 ID。

```python
    def redistribute(server):
        while not server.dead:
            for commit in server.pending_commits:
                print "running redistribute"
                print server.pending_commits
                dispatch_tests(server, commit)
                time.sleep(5)
```

`dispatch_tests` 函数用来从已注册的运行器池中返回一个可用的运行器。如果得到了一个可用的运行器，函数会发送一个带有提交 ID 的运行测试指令。如果当前没有可用的运行器，函数会在 2s 的休眠之后重复上述过程。如果分配成功了，函数会在 `dispatched_commits` 变量中记录提交 ID 及该提交 ID 的测试正在由哪一个运行器运行。如果提交 ID 在`pending_commits` 中，`dispatch_tests` 函数会在重新分配后将提交 ID 从 `pending_commits` 中删除。

```python
def dispatch_tests(server, commit_id):
    # NOTE: usually we don't run this forever
    while True:
        print "trying to dispatch to runners"
        for runner in server.runners:
            response = helpers.communicate(runner["host"],
                                           int(runner["port"]),
                                           "runtest:%s" % commit_id)
            if response == "OK":
                print "adding id %s" % commit_id
                server.dispatched_commits[commit_id] = runner
                if commit_id in server.pending_commits:
                    server.pending_commits.remove(commit_id)
                return
        time.sleep(2)
```

分配器服务用到了标准库中的一个叫 `SocketServer` 的非常简单的网络服务器模块。`SocketServer` 模块中有四种基本的服务器类型：`TCP`、`UDP`、`UnixStreamServer` 和 `UnixDatagramServer`。为了保证我们的数据传输连续稳定，我们使用基于 TCP 协议的套接字（UPD 并不能保证数据的稳定和连续）。

`SocketServer` 中提供的默认的 `TCPServer` 最多只支持同时维持一个会话。所以当分配器与一个运行器建立会话后，就无法再与监听器建立连接了。此时来自监听器的会话只能等待第一个会话完成并断开连接才能建立与分配器的连接。这对于我们的项目而言并不是非常理想，在我们预想中，分配器应该直接而迅速的同时与所有运行器及监听器进行通信。

为了使我们的分配器可以同时维护多个连接，我们使用了一个自定义的类 `ThreadingTCPServer` 来为默认的 `SocketServer` 类增加多线程运行的功能。也就是说无论何时分配器接收到连接请求，他都会新建一个进程来处理这个会话。这就使分配器同时维护多个连接成为了可能。

```python
class ThreadingTCPServer(SocketServer.ThreadingMixIn, SocketServer.TCPServer):
    runners = [] # Keeps track of test runner pool
    dead = False # Indicate to other threads that we are no longer running
    dispatched_commits = {} # Keeps track of commits we dispatched
    pending_commits = [] # Keeps track of commits we have yet to dispatch
```

分配器会为每一个请求定义了处理函数。在继承自 `SocketServer` 和 `BaseRequestHandler` 两个类的 `DispatcherHandler` 类中定义了处理的方法。基类要求我们定义一个随时可以处理链接请求的函数。我们将这个函数的自定义内容写在 `DispatcherHandler` 中，并且确保在每一次请求出现是，这个函数能够被调用。这个函数会不断地监听发来的请（`self.request` 会携带请求信息），并解析请求中的指令。

```python
class DispatcherHandler(SocketServer.BaseRequestHandler):
    """
    The RequestHandler class for our dispatcher.
    This will dispatch test runners against the incoming commit
    and handle their requests and test results
    """
    command_re = re.compile(r"(\w+)(:.+)*")
    BUF_SIZE = 1024
    def handle(self):
        self.data = self.request.recv(self.BUF_SIZE).strip()
        command_groups = self.command_re.match(self.data)
        if not command_groups:
            self.request.sendall("Invalid command")
            return
        command = command_groups.group(1)
```

这个函数可以处理如下指令：`status`、`register`、`dispatch` 以及 `results`。其中 `status` 函数用来检测分配器服务是否处于运行状态。

```python
        if command == "status":
            print "in status"
            self.request.sendall("OK")
```

为了让分配器的功能生效，我们需要注册至少一个运行器。当注册器被调用时，为了确保在需要发送提交 ID 触发测试时能准确的找到对应的运行器，会在一个列表中保存下运行器的 `{host: port}` 数据（运行器的数据会被保存在一个叫 `ThreadingTCPServer` 的对象中）。

```python
        elif command == "register":
            # Add this test runner to our pool
            print "register"
            address = command_groups.group(2)
            host, port = re.findall(r":(\w*)", address)
            runner = {"host": host, "port":port}
            self.server.runners.append(runner)
            self.request.sendall("OK")
```

`dispatch` is used by the repository observer to dispatch a test runner
against a commit. The format of this command is `dispatch:<commit ID>`.
The dispatcher parses out the commit ID from this message and sends it
to the test runner.

`dispatch` 被版本库检测器用来调度一个测试运行器对一个提交进行调度。这个命令的格式是 `dispatch:<commit ID>`。调度器从该消息中解析出提交 ID 并将其发送给发送给测试运行器。

```python
        elif command == "dispatch":
            print "going to dispatch"
            commit_id = command_groups.group(2)[1:]
            if not self.server.runners:
                self.request.sendall("No runners are registered")
            else:
                # The coordinator can trust us to dispatch the test
                self.request.sendall("OK")
                dispatch_tests(self.server, commit_id)
```

`results` 指令会由测试运行器在上报测试结果是调用。此命令的用法为：`results:<commit ID>:<length of results data in bytes>:<results>`。`<commit ID>` 用于标识测试报告对应的提交 ID。`<length of results data in bytes>` 用于计算结果数据使用需要多大的缓冲区。最后，`<results>` 中是实际报告信息。

```python
        elif command == "results":
            print "got test results"
            results = command_groups.group(2)[1:]
            results = results.split(":")
            commit_id = results[0]
            length_msg = int(results[1])
            # 3 is the number of ":" in the sent command
            remaining_buffer = self.BUF_SIZE - \
                (len(command) + len(commit_id) + len(results[1]) + 3)
            if length_msg > remaining_buffer:
                self.data += self.request.recv(length_msg - remaining_buffer).strip()
            del self.server.dispatched_commits[commit_id]
            if not os.path.exists("test_results"):
                os.makedirs("test_results")
            with open("test_results/%s" % commit_id, "w") as f:
                data = self.data.split(":")[3:]
                data = "\n".join(data)
                f.write(data)
            self.request.sendall("OK")
```

### 测试运行器（`test_runner.py`）

测试运行器负责对给定的提交 ID 运行测试，并上报测试结果。它仅会与分配器通信，分配器负责为其提供需要运行测试的提交 ID，并且会接收测试结果报告。

`test_runner.py` 文件会以启动测试运行器服务的 `serve` 函数为入口，并启动一个线程来运行 `dispatcher_checker` 函数。由于此启动过程与 `repo_observer.py` 和 `dispatcher.py` 的启动过程非常相似，因此我们在这里就不再赘述。

`dispatcher_checker` 函数每五秒对分配器执行一次 Ping 操作，以确保它仍然在正常运行。这个操作主要是出于资源管理上的考虑。如果对应的分配器挂了，就需要将测试运行器也关闭。否则测试运行器就只能空跑，及接收不到新的任务也无法提交之前任务产生报告。

```python
    def dispatcher_checker(server):
        while not server.dead:
            time.sleep(5)
            if (time.time() - server.last_communication) > 10:
                try:
                    response = helpers.communicate(
                                       server.dispatcher_server["host"],
                                       int(server.dispatcher_server["port"]),
                                       "status")
                    if response != "OK":
                        print "Dispatcher is no longer functional"
                        server.shutdown()
                        return
                except socket.error as e:
                    print "Can't communicate with dispatcher: %s" % e
                    server.shutdown()
                    return
```

测试运行器的服务于分配器相同都是 `ThreadingTCPServer`，它需要多线程运行的是因为分配器既会向它下发提交 ID，也可能在测试运行的期间的 Ping 它。

```python
class ThreadingTCPServer(SocketServer.ThreadingMixIn, SocketServer.TCPServer):
    dispatcher_server = None # Holds the dispatcher server host/port information
    last_communication = None # Keeps track of last communication from dispatcher
    busy = False # Status flag
    dead = False # Status flag
```

整个通信流是从分配器向测试运行器发送需要运行测试的提交 ID 开始的。如果测试运行器的状态可以运行测试，它会发送确认消息回分配器，然后关闭第一个连接。为了使测试运行器在跑测试的同时还能接受来自分配器的其他请求，它会单独启动一个进程来运行测试。

这样，当分配器在测试运行器正在运行测试的时候发来一个请求（比如一个 Ping 请求），测试运行器的测试跑在另一个进程上，运行器服务本身仍然可以在作出响应。这样测试运行器就可支持同时运行多个任务了。还有一种替代多线程运行的设计是在分配器与测试运行器间建立一个长连接。但这样会在分配器端消耗大量的内存来维持连接，另外这种方式还对网络有强依赖。如果网络一旦产生波动（比如突然的断线）就会对系统造成破坏。

测试运行器会从分配器接收到两种消息。第一种是 `ping` 消息 ，分配器用这个消息来验证测试运行器是否仍处于活跃状态。

```python
class TestHandler(SocketServer.BaseRequestHandler):
    ...

    def handle(self):
        ....
        if command == "ping":
            print "pinged"
            self.server.last_communication = time.time()
            self.request.sendall("pong")
```

另一个是 `runtest`，它的格式是 `runtest:<commit ID>`。这条指令用于分配器下发需要测试的提交 ID。当接收到 `runtest` 时，测试运行器将检查当前是否有正在运行的测试。如果有，它会给分配器返回 `BUSY` 的响应。如果没有，它会返回 `OK`，将其状态设置为 `busy` 并运行其 `run_tests` 函数。

```python
        elif command == "runtest":
            print "got runtest command: am I busy? %s" % self.server.busy
            if self.server.busy:
                self.request.sendall("BUSY")
            else:
                self.request.sendall("OK")
                print "running"
                commit_id = command_groups.group(2)[1:]
                self.server.busy = True
                self.run_tests(commit_id,
                               self.server.repo_folder)
                self.server.busy = False
```

这个函数会调用一个叫 `test_runner_script.sh` 的 Shell 脚本，该脚本会将代码更新为给定的提交 ID。脚本返回后，如果代码库已经被成功的更新，运行器会使用 `unittest` 运行测试并将结果收集到一个文件中。测试运行完毕后，测试运行器将读入结果报告文件，并将报告发送给调度程序。

```python
    def run_tests(self, commit_id, repo_folder):
        # update repo
        output = subprocess.check_output(["./test_runner_script.sh",
                                        repo_folder, commit_id])
        print output
        # run the tests
        test_folder = os.path.join(repo_folder, "tests")
        suite = unittest.TestLoader().discover(test_folder)
        result_file = open("results", "w")
        unittest.TextTestRunner(result_file).run(suite)
        result_file.close()
        result_file = open("results", "r")
        # give the dispatcher the results
        output = result_file.read()
        helpers.communicate(self.server.dispatcher_server["host"],
                            int(self.server.dispatcher_server["port"]),
                            "results:%s:%s:%s" % (commit_id, len(output), output))
```

这是 `test_runner_script.sh` 的内容：

```bash
#!/bin/bash
REPO=$1
COMMIT=$2
source run_or_fail.sh
run_or_fail "Repository folder not found" pushd "$REPO" 1> /dev/null
run_or_fail "Could not clean repository" git clean -d -f -x
run_or_fail "Could not call git pull" git pull
run_or_fail "Could not update to given commit hash" git reset --hard "$COMMIT"
```

要运行`test_runner.py`，必须将其指向存储库的副本。你可以使用我们先前创建的 `/path/to/test_repo test_repo_clone_runner` 副本作为启动参数。默认情况下，`test_runner.py` 将在 `localhost` 的 8900-9000 端口上启动，并尝试连接到 `localhost:8888` 上的调度程序服务器。你通过可以一些可选参数来更改这些值。`--host` 和 `--port` 参数用于指定运行测试运行器服务器地址和端口，`--dispatcher-server` 参数指定调度程序的地址。

### 控制流程图

下图是该系统的概述图。图中假设所有三个文件（`repo_observer.py`、`dispatcher.py` 和 `test_runner.py`）都已在运行，并描述了每个进程在新的提交发生时所采取的操作。

![](./images/3-diagram.png)

### 运行代码

我们可以在本地运行这个简单的 CI 系统，为每个进程使用不同的终端 Shell。我们首先启动分配器，它默认运行在端口 8888 上：

```bash
python dispatcher.py
```

开一个新的的 Shell，我们启动测试运行器（这样它就可以在分配器中注册了）：


```bash
python test_runner.py <path/to/test_repo_clone_runner>
```

测试运行器将自动为自己分配端口，范围为 8900-9000。你可以根据需求尽可能多起几个测试运行器。

最后，在另一个新 Shell 中，让我们启动代码库监听器：

```bash
python repo_observer.py --dispatcher-server=localhost:8888 <path/to/repo_clone_obs>
```

现在万事俱备，让我们触发一些测试吧玩一下吧！根据设计我们需要创建一个新的提交来触发测试。切换到你的主代码仓库中，随便改点什么：

```bash
cd /path/to/test_repo
touch new_file
git add new_file
git commit -m"new file" new_file
```

然后 `repo_observer.py` 识别到有一个新的提交产生了，之后通知分配器。你可以在它们各自的 Shell 窗口中查看它们的运行日志。当分配器收到测试结果，它就会将它们存储在此代码库中的 `test_results/` 文件夹中，并使用提交 ID 作为文件名。

### 错误处理

该 CI 系统中包括一些简单的错误处理。

如果你将 `test_runner.py` 进程杀掉，`dispatcher.py` 将确定该运行器将会识别出这个节点已经不再活跃，并将其从运行器池中移除。

你也可以模拟网络或系统故障，在测试运行器执行测试的时候将它杀死。这时，分配器会识别到运行器已经挂了，它会将挂掉的运行器从运行器池中移除，并将这个运行器之前在执行的任务分配给池中其他的运行器。

如果你杀掉分配器，那么监听器会直接报错。测试运行器也会发现分配器不再运行，并自动关闭。

### 结论

通过逐个分析各个进程中的不同功能，我们对构建了一个分布式的持续集成系统的有了一些基本的认识。通过套接字请求实现进程间的通信，我们的 CI 系统可以分布式的运行在不同的机器上，这增强了我们的系统可靠性和可扩展性。

这套 CI 系统现在的功能仍然非常简单，你还可以发挥自己的才能对它进行各种扩展以实现更多功能。以下是一些改进建议：

## 对每次提交自动运行测试

当前系统将定期检查是否有新的提交并对最近的一次提交运行测试。这个设计可以改为每次提交都触发测试。你可以修改定期检查程序，获取在两次轮询中发生的所有提交来实现这个功能。

## 更智能的运行器

如果测试运行器检测到分配器没有响应，则它将停止运行。当测试运行器正在运行测试时，也会立即关闭！如果测试运行器可以有一段时的等待期或者长期运行（如果你并不在乎它对资源的占用）来等待分配器恢复可能会更好一些。这样当分配器恢复时，运行器既可以将之前执行的测试的报告重新发回分配器。这样可以避免因分配器故障而引起的重复任务，在对每一个提交都执行测试时，这将很大程度上节约运行器资源。

## 报告展示

在真正的 CI 系统中，测试报告一般会发送到一个单独的报告服务。在报告系统中，人们可以查看报告详情，或是设置一些通知规则，在遇到故障或其他一些特殊的情况下通知相关人员。你可以为我的 CI 系统创建一个独立的报告进程，替换掉分配器的报告收集功能。这个新的进程可以是一个 Web 服务（或链接到一个 Web 服务上），这样我们就可以在网页上直接在线查看测试报告，甚至可以用一个邮件服务器来实现测试失败时的提醒。

## 测试运行器管理器

在当前的系统中，我们必须手动运行 `test_runner.py` 文件来启动测试运行器。你可以创建一个测试运行器管理器进程，通过这个进程来管理查看所有运行器上的负载和来自分配器的请求，对运行器的数量进行相应的调整。这个进程会接受所有的测试任务，根据任务启动测试运行器，并在任务少的时候减少运行器的实例。

遵循这些建议，你可以使这个简单的 CI 系统更加健壮并且容错率更高，并且具有与其他系统（比如一个网页版的报告查看器）集成的能力。

如果你希望了解现在的持续集成系统可以实现到什么样的灵活性，我建议你去看看 [Jenkins](http://jenkins-ci.org/)，这是一个用 Java 编写的非常强大的开源 CI 系统。它提供了一个基本的 CI 系统，同时也允许使用插件进行扩展。你可以 [通过 GitHub](https://github.com/jenkinsci/jenkins/) 访问其源代码。另一个推荐的项目是 [Travis CI](https://travis-ci.org/)，它是用 Ruby 编写的，其源代码也可以 [通过 GitHub](https://github.com/travis-ci/travis-ci) 得到。

这是了解 CI 系统如何工作以及如何自己构建 CI 系统的尝试。现在你应该对制作一个可靠的分布式系统所需的内容有了更深入的了解，希望你可以利用这些知识开发更复杂的解决方案。
