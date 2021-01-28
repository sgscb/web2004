// ref准则
let x = 0;
let y = 0;

function updateNumber() {
  x = 2;
  y = 3;
}

//reactive准则
const pos = {
  x: 0,
  y: 0,
};

function updateObject() {
  pos.x = 2;
  pos.y = 3;
}

const { x } = pos;
pos.x = 3;
