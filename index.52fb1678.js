function e(e,n){return new Promise(function(t){e.addEventListener(n,function(){t("It was ".concat(n," on the element:\n         ").concat(e.nodeName,", id: ").concat(e.id,"."))})})}var n=function(e){// write your code here
var n=document.createElement("div");n.className="message",n.textContent=e,document.body.appendChild(n)},t=document.getElementById("login"),c=document.getElementById("password"),o=document.getElementById("submit");e(t,"click").then(n),e(c,"click").then(n),e(o,"click").then(n),e(t,"input").then(n),e(c,"input").then(n),e(t,"blur").then(n),e(c,"blur").then(n),e(o,"blur").then(n);//# sourceMappingURL=index.52fb1678.js.map

//# sourceMappingURL=index.52fb1678.js.map
