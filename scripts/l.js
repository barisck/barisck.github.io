
function downloadAs(url, name){
    let ou;
    fetch(url)
        .then(res => res.blob())
        .then(blob => {
        ou = URL.createObjectURL(blob);
        let l = document.createElement('a');
        l.href = ou;
        l.download = name;
        l.click();
        console.log(name +' indiriliyor...')
    });
}
function downloadAllImagesInThisContainer(containerSelector){
    let container = document.querySelector(containerSelector) || document.activeElement;
    if(!container){
        console.log('Böyle bir container yok. Selector :' + containerSelector);
        console.log(container);
        console.log(document.querySelector(containerSelector));
    }
    else{
        console.log('Container bulundu!');
        let imgList = container.querySelectorAll('img');
        if(!imgList || imgList.length){
            console.log('Hiç imaj bulunamadı')
        }
        for(i = 0; i < imgList.length; i++){
            let img = imgList[i];
            let n = (img.alt || i) + '.jpeg'
            console.log(n + ' indirilmek üzere kuyruğa eklendi.');
            setTimeout(function(){
                downloadAs(img.src || img.dataset.src , n);
            }, 1000 * i);
        }
    }
}
function dwnld(){
    console.log('İndirme Tetiklendi!');
    downloadAllImagesInThisContainer(null);
}
document.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.keyCode === 90){
        dwnld();
    }
});
