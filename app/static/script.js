document.getElementById('nameInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        this.form.submit();
    }
});
