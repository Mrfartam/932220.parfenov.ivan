function CreateSquare()
{
	var num = document.getElementById('num').value;
	for(var i = 0; i < num; i++)
	{
		var newdiv = document.createElement('div');
		newdiv.classList.add('square');

		var size = 100 * (Math.random() * 2.5 + 0.5);
		newdiv.style.height = size + 'px';
		newdiv.style.width = size + 'px';

		var maxHeight = window.innerHeight;
		var maxWidth = window.innerWidth;

		var topPos = Math.random() * (maxHeight - size - 50) + 50;
		var leftPos = Math.random() * (maxWidth - size);

		newdiv.style.top = topPos + 'px';
		newdiv.style.left = leftPos + 'px';

		document.getElementById('container').appendChild(newdiv);
	}
}
function CreateTriangle()
{
    var num = document.getElementById('num').value;
    for(var i = 0; i < num; i++)
    {
        var newdiv = document.createElement('div');
        newdiv.classList.add('triangle');

        var size = 50 * (Math.random() * 2.5 + 0.5);
        newdiv.style.borderLeft = size + 'px solid transparent';
        newdiv.style.borderRight = size + 'px solid transparent';
        newdiv.style.borderBottomWidth = size * 1.73 + 'px';

        var maxHeight = window.innerHeight;
        var maxWidth = window.innerWidth;

        var topPos = Math.random() * (maxHeight - size - 50) + 50;
        var leftPos = Math.random() * (maxWidth - size);

        newdiv.style.top = topPos + 'px';
        newdiv.style.left = leftPos + 'px';

        document.getElementById('container').appendChild(newdiv);
    }
}

function CreateCircle()
{
	var num = document.getElementById('num').value;
	for(var i = 0; i < num; i++)
	{
		var newdiv = document.createElement('div');
		newdiv.classList.add('circle');

		var size = 100 * (Math.random() * 2.5 + 0.5);
		newdiv.style.height = size + 'px';
		newdiv.style.width = size + 'px';

		var maxHeight = window.innerHeight;
		var maxWidth = window.innerWidth;

		var topPos = Math.random() * (maxHeight - size - 50) + 50;
		var leftPos = Math.random() * (maxWidth - size);

		newdiv.style.top = topPos + 'px';
		newdiv.style.left = leftPos + 'px';

		document.getElementById('container').appendChild(newdiv);
	}
}

document.getElementById('container').addEventListener('dblclick', function(event){
	event.target.remove();
});