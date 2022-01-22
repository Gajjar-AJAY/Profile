const scriptURL = 'https://script.google.com/macros/s/AKfycbxAyj1iobQrIPyf5fOOZZcEp-odD-iD2HlN-CBLUwx7zpgLDt647RJW77oXeBMaJ0cdzg/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting To Me..! I Will Contact To You Soon..."))
                .catch(error => console.error('Error!', error.message))
		})