console.log("JavaScript is connected");

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', function()
 {document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode'))
    {toggle.Button.textContnet = 'Light Mode';}
else {toggleButton.textContnent = 'Dark Mode';}
});