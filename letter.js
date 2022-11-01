let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "bdb.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str =
  "写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，像是一只温顺的小🦌<躲在情意绵绵的字里行间，被火燎封印起来，等着解封的那一刻窜出来，跳进启信人眼底的柔波里。<你一眨眼，<温驯的小鹿有跳动一下，<柔软的暖风有轻拂一下，<遥远的星星有闪烁一下，<我也有心动<却不止一下<❤小红同学";
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
