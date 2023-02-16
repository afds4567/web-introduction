const button = document.getElementById('confirm');
button.addEventListener('click', function () {
  
  const user = document.getElementById('name').value;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  let numChecked = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      numChecked++;
    }
  });

  const alertMessage = `${user}님, 저와 ${numChecked} 개의 취향이 같으시네요!`;
  alert(alertMessage);
});