const out = document.querySelector('.input');
const btns = document.querySelectorAll('[data-key]');
const delBtn = document.querySelector('.delete')
const equalsTo = document.querySelector('.equals-to')
btns.forEach((button) => {
  button.addEventListener('click', () => {
    const dataKey = button.getAttribute('data-key');
    out.textContent += dataKey;
  });
});

delBtn.addEventListener('click', ()=>{
  out.textContent='';
})

equalsTo.addEventListener('click', ()=>{
  try {
    const result = eval(out.textContent);
    out.textContent = result;
  } catch (error) {
    out.textContent = 'Error';
  } 
})

