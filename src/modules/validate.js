const validate = () => {
  const calcItemInput = document.querySelectorAll("input.calc-item");
  const InputPhone = document.querySelectorAll("input[type='tel']");
  const inputMessage = document.querySelector(".mess");
  const inputText = document.querySelectorAll("input[type='text']");
  const inputMail = document.querySelectorAll("input[type='email']");
  const spaceDel = (str) => {
    let reg = /^[\s\-]+|[\s\-]+$/;
    str = str.replace(reg, "");
    reg = /\s{2,}/g;
    str = str.replace(reg, " ");
    return str;
  };
  inputMessage.addEventListener("input", (e) => {
    e.target.classList.remove('success')
    let reg = /[^а-яА-Я\s\-]/g;
    e.target.value = e.target.value.replace(reg, "");
  });
  inputMessage.addEventListener("blur", (e) => {
    e.target.value = spaceDel(e.target.value);
    if (e.target.value)
          {e.target.classList.add('success')}
  });

  ///////////Для валидации телефонов
  InputPhone.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.classList.remove('success')
      let reg = /[^\d\(\-\)]+$/g;
      e.target.value = e.target.value.replace(reg, "");
    });
    
    input.addEventListener("blur", (e) => {
      
      if (e.target.value)
        {e.target.classList.add('success')}
    })

  });

  inputText.forEach((input) => {
    if (!input.classList.contains("calc-item")) {
      
      let reg = /[^а-яА-Я\s\-]/g;
      input.addEventListener("input", (e) => {
        e.target.classList.remove('success')
        e.target.value = e.target.value.replace(reg, "");
      });
      input.addEventListener("blur", (e) => {
        let reg;
        e.target.value = spaceDel(e.target.value);
        reg = /^[а-яА-Я]|\s[а-яА-Я]/g;
        e.target.value = e.target.value.replace(reg, (str) => {
          return str.toUpperCase();
        });
        
        if (e.target.value)
        
          {e.target.classList.add('success')}
      }
      );
    } else if (input.classList.contains("calc-item")) {
      input.addEventListener("input", (event) => {
        e.target.classList.remove('success')
        event.target.value = event.target.value.replace(/\D+/, "");
      });
      input.addEventListener("blur", (event) => {
        if (e.target.value)
          {e.target.classList.add('success')}
      })



    }
  });

  inputMail.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.classList.remove('success')
      let reg = /[^a-zA-Z\d\-\.\_\!\~\*\'\@]/g;
      e.target.value = e.target.value.replace(reg, "");
    });
    input.addEventListener("blur", (e) => {
      if (e.target.value)
        {e.target.classList.add('success')}
    })
  });
};
validate();

  export default  validate;
  