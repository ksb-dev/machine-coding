const stars = document.querySelectorAll('.stars i')
const emojiEl = document.querySelector('#emoji')
const resetBtn = document.querySelector('#btn')

const emojiArr = ['😞', '🙁', '🙂', '😀', '😍']

stars.forEach((star, index1) => {
  star.addEventListener('click', e => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add('active')
        : star.classList.remove('active')

      emojiEl.textContent = emojiArr[index1]

      resetBtn.classList.add('show')
    })
  })
})

resetBtn.addEventListener('click', () => {
  stars.forEach(star => {
    star.classList.remove('active')

    emojiEl.textContent = ''

    resetBtn.classList.remove('show')
  })
})
