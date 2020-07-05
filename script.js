  let screen = document.querySelector('.form-control-lg');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.clear');
  let equal = document.querySelector('.calc');
  
  //retrieve data from numbers that are clicked
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.value;
      screen.value += value;
    })
  });
  
  equal.addEventListener('click', function(){
    if(screen.value === ''){
      alert('Please Enter a Value');
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })
  
  clear.addEventListener('click', function(){
    screen.value = '';
  })