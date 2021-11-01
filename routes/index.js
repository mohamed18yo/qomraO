var express = require('express');

var nodemailer = require('nodemailer');

const {Product, AppleProduct,Iphone13,Laptop,Samsung,Ipad,Watch,Games,ProductById } = require('../helper/data');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'متجر قمرة الالكتروني',Iphone13,Laptop,Samsung,AppleProduct ,Ipad,Watch,Games});
});
router.get('/product/:id', function(req, res, next) {
  let id = req.params.id;
  let apro= Product.filter(i=>(i.id == id))
  let pro= apro[0]
  res.render('product', { title: 'متجر قمرة الالكتروني' ,pro});
});
router.get('/apple', function(req, res, next) {
  res.render('apple', { title: 'منتجات ابل' });
});
router.get('/games', function(req, res, next) {
  res.render('games', { title: 'العاب' });
});
router.get('/ipads', function(req, res, next) {
  res.render('ipads', { title: 'اجهزة لوحية ' });
});
router.get('/iphone13', function(req, res, next) {
  res.render('iphone13', { title: 'ايفون 13' ,Iphone13});
});
router.get('/labtops', function(req, res, next) {
  res.render('labtops', { title: 'لابتوبات' });
});
router.get('/samsung', function(req, res, next) {
  res.render('samsung', { title: 'سامسنج ' });
});
router.get('/watch', function(req, res, next) {
  res.render('watch', { title: 'الساعات' });
});


router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'الخصوصية ' });
});
router.get('/payWays', function(req, res, next) {
  res.render('pay', { title: 'طرق الدفع ' });
});
router.get('/contactUs', function(req, res, next) {
  res.render('contact', { title: 'اتصل بنا ' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'عن قمرة' });
});  

router.post('/sendOrder', function(req, res, next) {
  var htl = `<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
  <title>Email Tabmplate</title>
  
  <meta name="description" content="html invoice email template free download - html email template, html invoice template free download, responsive html invoice, responsive email template free download, account activation email template, mailgun transactional email, mailgun template variables, html email templates free"/>
  <meta name="robots" content="noodp"/>
  <meta name="keywords" content="html email template, html invoice template free download, responsive html invoice, responsive email template free download, account activation email template, mailgun transactional email, mailgun template variables, html email templates free"/>
  <link rel="canonical" href="http://www.phpkida.com/demos/html-invoice-email-template-free-download/index.html" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="html invoice email template free download - PHPKIDA" />
  <meta property="og:description" content="html invoice email template free download - html email template, html invoice template free download, responsive html invoice, responsive email template free download, account activation email template, mailgun transactional email, mailgun template variables, html email templates free" />
  <meta property="og:url" content="http://www.phpkida.com/demos/html-invoice-email-template-free-download/index.html" />
  <meta property="og:site_name" content="PHPKIDA" />
  <meta property="article:publisher" content="https://www.facebook.com/Phpkida-501677506661873/" />
  <meta property="article:author" content="https://www.facebook.com/mukeshjakhar888" />
  <meta property="article:tag" content="email templates" />
  <meta property="article:tag" content="html email templates" />
  <meta property="article:tag" content="templates" />
  <meta property="article:section" content="CSS Tutorials" />
  <meta property="article:published_time" content="2017-04-22T23:05:35+00:00" />
  <meta property="og:image" content="http://www.phpkida.com/wp-content/uploads/2017/04/html-invoice-email-template-free-download.png" />
  <meta property="og:image:width" content="709" />
  <meta property="og:image:height" content="277" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:description" content="html invoice email template free download - html email template, html invoice template free download, responsive html invoice, responsive email template free download, account activation email template, mailgun transactional email, mailgun template variables, html email templates free" />
  <meta name="twitter:title" content="html invoice email template free download - PHPKIDA" />
  <meta name="twitter:site" content="@phpkakida" />
  <meta name="twitter:image" content="http://www.phpkida.com/wp-content/uploads/2017/04/html-invoice-email-template-free-download.png" />
  <meta name="twitter:creator" content="@mukeshjakhar888" />
  <meta property="DC.date.issued" content="2017-04-22T23:05:35+00:00" />
  
  
  <link rel="icon" href="http://www.phpkida.com/wp-content/uploads/2015/11/phpkida-new-logo-150x150.png" sizes="32x32" />
  <link rel="icon" href="http://www.phpkida.com/wp-content/uploads/2015/11/phpkida-new-logo.png" sizes="192x192" />
  <link rel="apple-touch-icon-precomposed" href="http://www.phpkida.com/wp-content/uploads/2015/11/phpkida-new-logo.png" />
  <style>
  
  .email_table {
    color: #333;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    border-collapse: separate;
    border-spacing: 0;
    width: 99%;
    margin: 6px auto;
    box-shadow:none;
  }
  table {
    color: #333;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    border-collapse: separate;
    border-spacing: 0;
    width: 99%;
    margin: 50px auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.16);
  }
  
  th {font-weight: bold; padding:10px; border-bottom:2px solid #000;}
  
  tbody td {border-bottom: 1px solid #ddd; padding:10px;}
  
  
  
  .email_main_div{width:700px; margin:auto; background-color:#EEEEEE; min-height:500px; border:2px groove #999999;}
  strong{font-weight:bold;}
  .item_table{text-align:left;}
  </style>
  </head>
  
  <body>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
    ga('create', 'UA-67816487-1', 'auto');
    ga('send', 'pageview');
  
  </script>
  <div class="email_main_div">
  <table class="email_table">
      <tr>
          <td width="400px;" style="text-align:left; padding:10px;">
              <img src="https://www.qomrastores.com/images/full-logo.png" width="300" height="100px" />
          </td>
          <td style="text-align:left; padding:10px;">
          Company Address:<br />
          Qomra Store company,<br />
          234, 20th , alriyad, Saudi arabia<br />
          Tel: (+966) 576339750<br />
          Email: qomrrastore@gmail.com<br />
          </td>
      </tr>
  </table>
  
  <table class="email_table" style="margin-top:14px;">
      <tr>
          <td width="350px;" style="text-align:left; padding:10px;">
          <strong>عنوان الشحن  </strong><br />
          عنوان شحنك هو <br />
          ${req.body.name},<br />
          ${req.body.address},<br />
          Tel: ${req.body.phone}<br />
         التوصيل من خلال شركة أرامكس خلال 48 ساعة من تأكيد الطلب والدفع
          </td>
      </tr>
  </table>
  
  <table class="item_table">
    <thead>
      <tr>
        <th>رقم الطلبية .</th>
        <th>اسم الصنف</th>
        <th>الوصف</th>
        <th>العدد</th>
        <th>السعر</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>${15102}</td>
        <td>${req.body.note}</td>
        <td>${" intuitive design"}</td>
        <td>${req.body.qty}</td>
        <td>ريال:${req.body.total}</td>
      </tr>    
      <tr>
        <td colspan="5" style="text-align:right; padding:10px;">
        <strong>الاجمالي : </strong> ريال: ${req.body.total * req.body.qty} /-
        </td>
      </tr>
      <td width="400px;" style="text-align:left; padding:10px;">
              <img src="https://www.qomrastores.com/images/full-logo.png" width="100px" />
          </td>
    </tbody>
  </table>
  <div style="width:98%; padding:1%; margin-top:10px; font-size:15px; text-align:center;">
  Company Pvt. Ltd. - Company Address - Company NO:08676628 | Vat No: 180988973
  </div>
  </div>
  </body>
  </html>
  `
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sstoress22@gmail.com',
      pass: '12345!@#$%'
    }
  });      
   
  var mailOptions = {     
    from: 'sstoress22@gmail.com',
    to: 'qomrrastore@gmail.com,fack21gasa@gmail.com',
    subject: `طلبية باسم  ${req.body.name}`,
    text: 'Qomra Store',
    html: htl
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.json({data:"registered"})
});
// some change



module.exports = router;  
