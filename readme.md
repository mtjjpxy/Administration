# 1）项目设计部分

（1）项目总体构成：

```
用node+mongodb+express写的学生管理系统
```

包含登录模块：使用ajax进行post请求登录；

							通过mongodb插件设置链接数据库获取db对象。	

学生信息模块：在数据库中存储学生信息；

					       查询学生信息系统；
	
					       新增学生信息系统；
	
					       修改学生信息系统；
	
					       删除学生信息系统。

用户权限模块：设置登录后才能进行“增删改查”功能。

（2）引入的包：

1. ###### express:一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。使用 Express 可以快速地搭建一个完整功能的网站。

2. ###### mongoose:可以通过Node来操作Mongodb.

5. ###### art-template:模板引擎.

6. ###### express-art-template: 模板引擎与Express的关联包.

7. ###### body-parser:post请求解析工具.

（3）项目目录结构和各个部分的说明：

           admin.js 项目入口文件，可以使用node admin.js进行运行
            routers 登录功能所需路由存放的文件夹
            public 静态资源,css文件，图片存储根目录（css,js,img）
            views 存放html页面文件夹
            package.json ,package-lock.json项目说明文件
    
    		node_modules下载的包文件

# 2)使用说明书

提前打开mongodb，将项目在node中运行，在网页中输入网址，即可访问网页，登陆后可实现对学生信息的增删改查。

# 3)开发日记

2021/12/20:

基本环境配置：创建新项目，在github上创建远程仓库并连接，下载项目所需要的包，上传远程代码到远程仓库。

2021/12/21~2021/12/28：

搭建基本框架：连接mongodb数据库，创建项目所需要的表，用schema声明元素与属性，测试能否正常上传数据到数据库。

创建html文件：首页index.html，新增页面new.html，编辑页面edit.html，登录页面login.html，注册页面register.html，学生信息页面list.html。

同步后台与前端。

2021/12/29~2021/12/31：

调试修改bug，完善功能，使前端网页的操作能发送到后端。
