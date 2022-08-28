const express = require('express');
const app = express();
const router = express.Router();
var ejs = require("ejs");
// const passport = require('passport');

router.get('/', (req, res, next) => {
  res.render('index');
});
let scrap = require('./request_pag');
router.get('/works/demo', (req, res, next) => {
  // res.render('demo')
  let url = req.query.work_id;
 
  url = /^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/.test(url)?decodeBase64(url):url;
   console.log(url)
  scrap.scraping(res, url)
});

// let ejs = router.get('ejs');
decodeBase64 = function(s) {
  var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
  var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for(i=0;i<64;i++){e[A.charAt(i)]=i;}
  for(x=0;x<L;x++){
      c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
      while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
  }
  return r;
};

// console.log(appRoot + '/lib/moduleB/component2.js')
const send_email = require(__dirname + '/ms/send-email');
router.post('/send', async  (req, res)=>{
  let dats= JSON.parse(req.body.datos);
  console.log(dats.email)
  // res.send("Email enviado:");
    
    // enviar(dats.message, dats.email,'rodolfo@naz-d.com');

    await ejs.renderFile(appRoot + '/views/email_template/simple_welcom.ejs',
        {
        user_firstname: dats.name,
        confirm_link: "https://naz-d.com=" +dats.name
        })
        .then(result => {
          // emailTemplate = result;
          // res.send(emailTemplate);
          // console.log(result);
          enviar(result, dats.email,'rodolfo@naz-d.com');
        
        })
        .catch(err => {
        res.status(400).json({
            message: "Error Rendering emailTemplate",
            error: err
            });
            console.log(err)
        })

var c = 0;

function enviar(emailTemplate, to, from) {  

            var mailOptions = {
              from: from,//tucorreo@gmail.com... Direccion de quien envia el email
              to: to,//mi-amigo@yahoo.com... A donde se envia el email
              subject: 'nuevo Suscriptor',
              // text: "suscriptor: "+ req.body.email
              html:emailTemplate
            };
            
         send_email.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              //   return error;
                // res.redirect('/')
              } else {
                console.log((c+1)+'_Email enviado: ' + info.response);
              //   return 'Email enviado: ' + info.response
            
                  //  res.redirect('/?alertTitle=Hola')
                  if(c < 1 ){

                    enviar('<h3>'+dats.email+' se a suscrito a nazardesign</h3><br><h3>'+dats.name+' se a suscrito a nazardesign</h3>', 'rodolfo@naz-d.com','rodolfo@naz-d.com');                   
                    c++;
                  }
                  if (c == 1) {
                     res.send("Segundo Email enviado:");
                  }
              }
            });
          }
  // res.end('Email enviado');

});
/*
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
 

router.get('/signin', (req, res, next) => {
  res.render('signin');
});


router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/profile',
  failureRedirect: '/signin',
  failureFlash: true
}));

router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile');
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}*/

module.exports = router;