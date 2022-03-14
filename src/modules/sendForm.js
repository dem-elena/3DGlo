
const sendForm=({formId, someElem=[]})=>{
   
    const form=document.getElementById(formId)
    
    const statusBlock=document.createElement('div')
    const loadText="Загрузка..."
    const errorText="Ошибка"
    const successText="Спасибо! Наш менеджер свяжется с вами!"
   
   const validate=(list)=>{
       let success=true
       list.forEach(input=>{
           if (!input.classList.contains('success') )
           {success=false}
       })
       return success
   }

    const sendData = (data) => {
         return fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
    }
    const submitForm = ()=>{
        const formElement=form.querySelectorAll('input')
        const formData=new FormData(form)
        const formBody={}

        if (formId=="form3"){
            statusBlock.style.color="white"
        }
        statusBlock.textContent=loadText
        window.setTimeout(()=>{statusBlock.remove()},3000)
        form.append(statusBlock)
        formData.forEach((val,key)=>{
            formBody[key]=val
        })
        someElem.forEach(elem => {
            const element=document.getElementById(elem.id)
           if(elem.type==='block') {
                formBody[elem.id]=element.textContent
           }else if (elem.type==='input') {
                formBody[elem.id]=element.value
           }
        })
        
        if (validate(formElement)){ 
            sendData(formBody)
            .then(data=>{
                statusBlock.textContent=successText
            formElement.forEach(input=>{
                input.value="";
                input.classList.remove('success')
            })
            })
            .catch(error=>{
                statusBlock.textContent=errorText
                window.setTimeout(()=>{statusBlock.remove()},3000)
            })
        }else {
                statusBlock.textContent='не корректно заполнены поля'
                alert('данные не валидны')
                
            }
       
    }

    try {
        
        if (!form){
            throw new Error('Верните форму на место!')
        }
        form.addEventListener('submit',(e)=>{
            e.preventDefault() 
            
            submitForm()
           
           
     })
    }
    catch(error) {console.log(error.message)}
}

export default sendForm