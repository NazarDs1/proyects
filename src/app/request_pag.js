// const puppeteer = require("puppeteer");
var curl = require('curlrequest');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// async function scraping(res, url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await loadUrl(page, url, browser,res)
// };
let val;
function scraping(res, url){
  curl.request(url, function(a, b, c){
    // const body = b.text();
  //  let content = b;
    const { window: { document } } = new jsdom.JSDOM(b);
    if(!!document.querySelector('base')) document.querySelector('base').remove();
    // const link = document.createElement('link');
    //       link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css';
    //       link.setAttribute('integrity', 'sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn');
    //       link.setAttribute("crossorigin","anonymous");
    //       link.setAttribute('rel', 'stylesheet');
  const script1 = document.createElement('script');
          script1.src = 'https://kit.fontawesome.com/15ebe3729b.js';
          //  script1.setAttribute('integrity', "sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF");
           script1.setAttribute("crossorigin","anonymous");
          
        
    // const script = document.createElement('script');
    //       script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js';
    //        script.setAttribute('integrity', "sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF");
    //        script.setAttribute("crossorigin","anonymous");
    //         document.head.appendChild(script1);
    //         document.body.appendChild(script);
    //       document.head.appendChild(link);
    
    let $urlExt = url;
    let $patt_1 = /^(?!https?:\/\/|\/\/)(.+)(\?.+)?/im;
    let $ElementsDOM = new Array("img", "script", "link", "a");
    
    $ElementsDOM.forEach(ele => {
        let $el_tagElem = document.querySelectorAll(ele);
            $el_tagElem.forEach(thisElm => {
                // let $numThisEle = thisElm
                let nametagelem = thisElm.tagName.toLowerCase();
                if(nametagelem == "a" || nametagelem == "link"){ 
                    $urlExt = $urlExt.split('/[?]/')[0];
                    $urlElement = thisElm.getAttribute('href'); //"</br>". 
                    if($patt_1.test($urlElement)) thisElm.setAttribute('href', $urlExt+$urlElement);
        
                    // if (thisElm == "a") {  
                    // //   $urlElement = base64_encode($urlElement);        
                    // //   $numThisEle.setAttribute('href', $host."/".$file."?work_id=".$urlElement);
                    // }else{
                    //   $numThisEle.setAttribute('href', $urlElement);
                    // }
                  }
                  if(nametagelem == "script"){
                    // $urlExt = preg_split('/[?]/',$urlExt)[0];
                    $urlElement = thisElm.getAttribute('src');
                    if(thisElm.hasAttribute('src')){
                      if($patt_1.test($urlElement)){
                          thisElm.setAttribute('src', $urlExt+$urlElement);
                      }else{
                          thisElm.setAttribute('src', $urlElement);  
                      }
                    }
                    
                  }
                  if(nametagelem == "img"){
                    $urlExt = $urlExt.split('/[?]/')[0];
                   if(thisElm.hasAttribute('data-src'))
                    $urlElement = thisElm.getAttribute('data-src');
                    else
                    $urlElement = thisElm.getAttribute('src');
                    // if(!preg_match($patt_1, $urlElement))$urlElement = $urlElement;
                    
                   if($patt_1.test($urlElement)){
                     
                        thisElm.setAttribute('src', $urlExt+$urlElement);             
                        thisElm.setAttribute('data-src', $urlExt+$urlElement);
                    }else{
                        thisElm.setAttribute('src', $urlElement);             
                        thisElm.setAttribute('data-src', $urlElement);
                    }
                    // $baseName .=",</br>". basename($urlElement);
                  }
            });
    });
    contentHtml = document.querySelector('html').outerHTML

    res.end(contentHtml)
  });
}



async function loadUrl(page, url, browser, res){
   const response = await page.goto(url,{
        // waitUntil:["load","domcontentloaded","networkidle0","networkidle2"]
    });
     
    const body = await response.text();

    // const { window: { document } } = new jsdom.JSDOM(body);
    let $urlExt = url;
    let $patt_1 = '/^(?!https?:\/\/|\/\/)(.+)(\?.+)?/im';
    let $ElementsDOM = array("img", "script", "link", "a");
    const { window: { document } } = new jsdom.JSDOM(body);
    $ElementsDOM.forEach(ele => {
        let $el_tagElem = document.querySelectorAll(ele);
            $el_tagElem.forEach(thisElm, index => {
                // let $numThisEle = thisElm
                let nametagelem = thisElm.tagName.toLowerCase();
                if(nametagelem == "a" || nametagelem == "link"){ 
                    $urlExt = split('/[?]/',$urlExt)[0];
                    $urlElement = thisElm.getAttribute('href'); //"</br>". 
                    if($patt_1.test($urlElement)) $urlElement = $urlExt+$urlElement;
        
                    if (thisElm == "a") {  
                    //   $urlElement = base64_encode($urlElement);        
                    //   $numThisEle.setAttribute('href', $host."/".$file."?work_id=".$urlElement);
                    }else{
                      $numThisEle.setAttribute('href', $urlElement);
                    }
                  }
            });
    });
    // Seleccionamos los títulos y lo mostramos en consola
    document.querySelector('base').remove()
    document.querySelectorAll('link').forEach(element => console.log(element.href));
    
    
    
      res.end(document.querySelector('html').innerHTML)
    

    await browser.close();
}
//request_pag
// app.use('/works/demo',  require('./routers'));
module.exports.scraping = scraping;