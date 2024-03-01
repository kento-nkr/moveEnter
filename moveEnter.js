document.addEventListener('DOMContentLoaded', function ()
{
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++)
    {
        inputs[i].addEventListener('keypress', function (event)
        {
            if (event.key === 'Enter')
            {
                const index = Array.prototype.indexOf.call(inputs, this);
                if (index !== -1 && index < inputs.length - 1)
                {
                    inputs[index + 1].focus();
                    event.preventDefault();
                }
            }
        });
    }
});
