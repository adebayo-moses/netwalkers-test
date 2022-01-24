function tag(selector){
    return document.querySelector(selector);
}

tag('.menu').addEventListener('click', e=>{
    if(tag('aside').style.display == 'none'){
        tag('aside').style.display = 'block';  
        tag('main').style.display = 'grid';
        // tag('main').style.padding = '5px 10px'
    }
    else{
        tag('aside').style.display = 'none';
        tag('main').style.display = 'block'
        // tag('main').style.padding = '5px 20px'
    }
})