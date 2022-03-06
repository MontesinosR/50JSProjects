const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)



function dragStart() {
  console.log('drag start')
}

function dragEnd() {
  console.log('drag end')
}

function dragOver() {
  console.log('drag over')
}

function dragEnter() {
  console.log('drag enter')
}

function dragLeave() {
  console.log('drag leave')
}
