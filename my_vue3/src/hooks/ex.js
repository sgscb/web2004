let buttons = [{ name: "b1" }, { name: "b2" }, { name: "b3" }];
function bind() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      console.log(i);
    };
  }
}
bind();
buttons[0].onclick();
buttons[1].onclick();
buttons[2].onclick();

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function() {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});
console.log("script end");
