console.log('Starting');

let tabBtn = document.querySelectorAll('.tab-btn');
let tabContent = document.querySelectorAll('.tab-content-container');
let icons = document.querySelectorAll('.tab-icon');

tabBtn.forEach((tab)=>{
    
    tab.addEventListener('click', ()=>{

        const target = tab.getAttribute('data-target');

        icons.forEach((icon)=>{
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-plus');
        })

        tabContent.forEach((content)=>{
            let currentId = content.getAttribute('id');
            if(currentId!=="tab-content-"+target){
                content.style.display = "none";
            } 
        });

        const contentBox = document.getElementById('tab-content-'+target);

        if(contentBox.style.display=="none"){
            contentBox.style.display = "block";
            document.querySelector('.tab-icon-'+target).classList.remove('fa-plus');
            document.querySelector('.tab-icon-'+target).classList.add('fa-xmark');
        }else{
            contentBox.style.display = "none";
            document.querySelector('.tab-icon-'+target).classList.remove('fa-xmark');
            document.querySelector('.tab-icon-'+target).classList.add('fa-plus');
            
        }

        

    });
});
