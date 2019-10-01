let icon = document.getElementById('hamburguer');
    let menu = document.getElementById('menu')
    function open_menu(){
        if(icon.checked){
            menu.style.display='flex';
            console.log('Habilitado');
        }else{
            menu.style.display='none'
            console.log('Desabilitado');
        }

    }
    window.addEventListener('resize',() =>{
        if(screen.width>600){
            menu.style.display = 'flex';
            
        }else{
            icon.checked=false;
            menu.style.display = 'none';
        }
    })

    window.addEventListener('load',() => {
        if(screen.width>600){
            menu.style.display = 'flex';
            
        }else{
            icon.checked=false;
            menu.style.display = 'none';
        }
    })
