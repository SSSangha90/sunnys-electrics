(() => {
    const form = document.querySelector('form');
    const formResponse = document.getElementById('form-messages');
  
    form.onsubmit = e => {
      e.preventDefault();
  
      // Prepare data to send
      const data = {};
      const formElements = Array.from(form);
      formElements.map(input => (data[input.name] = input.value));

      // Construct HTTP Request
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action, true);
      xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

      // Send data as JSON
      xhr.send(JSON.stringify(data));

      // Callback function
      xhr.onloadend = response => {
          if (response.target.status === 200){
              form.reset()
              formResponse.innerHTML = "Thanks for the message. I'll be in touch shortly"
          } else {
              formResponse.innerHTML = "Something went wrong, call me instead"
          }
      };
    };
  })();