var posts=["2024/04/02/Markdown 编写语法/","2024/04/02/Python 基础笔记/","2024/04/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };