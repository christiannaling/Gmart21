document.getElementById('toggleForm').addEventListener('change', function() {
  var form = document.getElementById('collapsibleForm');
  if (this.checked) {
      form.style.display = 'block';
  } else {
      form.style.display = 'none';
  }
});