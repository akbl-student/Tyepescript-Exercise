let personName :string = '';
personName = prompt('what is your name?') || '';
if(personName ! == null && personName !== ''){
    alert('Hello ${personName}, would you like to learn some python to day?')
}
else{alert('you have to fill your name !')}