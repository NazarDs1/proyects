document.querySelector('base').remove()
     document.querySelectorAll('script').forEach((el, i)=>{
        if(/^(?!https?:\/\/|\/\/)(.+)(\?.+)?/im.test(el.src)){
            console.log('https://html.design/demo/pricing-tables-v1/',el.src)
        }
          
    })
