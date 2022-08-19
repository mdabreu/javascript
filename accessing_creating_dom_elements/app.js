const btnCreate = document.querySelector('.btn-main');

btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');
    const item = document.createElement('li');
    item.textContent = input.value;
    input.value = '';
    list.append(item)

});



### or using insertAdjacentHTML

btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');
    
    list.insertAdjacentHTML(
        'afterbegin',
        `<li>${input.value}</li>`);
    input.value = '';
});
