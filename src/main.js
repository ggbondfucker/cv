let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string2 = ''
let string = `
/* 你好，我是一名前端新人
* 接下来我先给你一个方盒子
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 再给你制作个太极 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none
}
/* 太极是阴阳形成的
一黑一白
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 给你+两个睾丸
*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
let n = 0

let step = () => {
    setTimeout(() => {
        //如果是回车就不照搬；如果不是回车就照搬
        if (string[n] === "\n") {
            string2 += "<br>"
        } else if (string[n] === ' ') {
            string2 += "&nbsp"
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 9999)
        html.scrollTo(0, 9999)
        if (n < string.length - 1) {
            n += 1
                //不是最后一个,就继续
            step()
        }
    }, 0)
}
step()