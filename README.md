appify.js
=========

jQuery plugin will enable you to stay In Full Screen Mode on the iPhone, iPad and iPod


If you made responsive website and added in meta tag something like this

<pre>
 &lt;meta name="apple-mobile-web-app-capable" content="yes" /&gt;
 &lt;meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no" /&gt;
 &lt;meta name="apple-mobile-web-app-status-bar-style" content="black" /&gt;
</pre>

you will be able to add to home screen of iPhone/iPad/iPod your website and surf around in full screen mode.

But wen you click on any link in your website you will be redirected back to safari.

To keep experience of the web app in full screen mode just add appify.js to your project folder and link ti to your page like this:

<pre>  &lt;script type="text/javascript" src="appify.js" &gt;&lt;/script &gt; </pre>

after that you just need to initialize plugin like this:

<code>$('body').appify();</code>

and it is done! You have perfect full screen mode capable web app :D

Additional explanation 
======================

Appify will take all links inside html tag on which you bind him and take look if link have attribute target="_blank". If target is _blank it will open your link in safari but if link don't have attribute target _blank it will preserve your surfing in full screen mode.

In that way you can control what you want to open in safari what you want to keep in full screen mode.

e.g. if you have some PDF and you want to give possibility to users to open it in iBooks or some other app they use, you just put attribute target="_blank" and that's it.

If you find any bug, or you have any advice, don't hesitate to open an issue.

For more cool stuff check out my [Blog](https://dragojevich.com)
