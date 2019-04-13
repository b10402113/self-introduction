//TAB 區塊
const tabs= document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click',function(e){
    
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.display);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }else{
                panel.classList.remove('active');
            }
        })
    }
    
    
})