document.addEventListener('click', function(event) {
    
    if(event.target.classList.contains('button')) {
        var title = event.target.closest('.block').querySelector('.title').textContent;

        var newBlock = document.getElementById('new_block');
        newBlock.classList.remove('hidden');
    
        var overlay = document.getElementById('overlay');
        overlay.classList.remove('hidden');

        var new_title = document.getElementById('new_title');
        new_title.textContent = title;
    }

    if(event.target.id === 'overlay') {
        var overlay = document.getElementById('overlay');
        overlay.classList.add('hidden');
    
        var newBlock = document.getElementById('new_block');
        newBlock.classList.add('hidden');
    }
});