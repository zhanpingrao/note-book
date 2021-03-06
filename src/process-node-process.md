### Node.js 通过进程、线程优化的性能

**1.  node.js 单线程的特点**  
> node.js 以异步非阻塞单线程，作为其执行速度的保障。什么是非阻塞单线程？

* 高性能（不用考虑多线程间来回调用引起性能的损耗）
* 线程安全（不用担心同意变量会被多线程进行读写而造成程序的崩溃）
* 底层多线程
说node.js 是单线程其实也是不全面的，node.js 底层库会使用libuv调用多线程来处理I/O 操作。这就像食堂只有一个窗口，只能有按顺序一个个的接收点餐，但是后厨配菜的员工却有很多，他们各司其职保证出餐的速度。  

**2.如何通过多线程提高node.js 的性能**  

* cluster: 为了利用多核系统，用户有时会想启动一个 Node.js 进程的集群去处理负载。

**3. 如何通过多进程提高node.js 的性能**  

* Child Process 创建进程