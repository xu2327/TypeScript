"removeComments": true, 这个配置的意思是 在准成 js 文件的时候去掉注释，但只能在 tsc 后面不带任何代码的情况下才可以

tsc 命令不带任何参数的情况下，会把目录里的所以.ts 文件进行编译

"include": ["./demo.ts"], 这句话的意思就是值编译 ./demo.ts 文件
"exclude": ["./demo.ts] 就是相反的，出了这个不编译，其它全编译

如果这两项不加上去，哪默认就是都编译

"files": ["./demo.ts"] "include": ["./demo.ts"] "exclude": ["./demo.ts] 都是用来显示文件的编译范围，可以写正则
