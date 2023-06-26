document.querySelector('h1').onclick = function() {
this.textContent = 'Welcome to my Website!';
}
document.querySelector('a[href="mailto:antonio20001024@gmail.com"]').onclick = function() {
alert('You clicked the email link!');
}
document.querySelector('a[href="https://www.instagram.com/antonio061024/"]').setAttribute('target', '_blank');