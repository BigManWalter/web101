Web 101 
-------------------

----------------------------------------------------------------------------

What is Web Development?
-------------------

Web Development is building web applications such as Facebook, Google and AirBnB. What do these websites have in common?

- They are on the Internet
- They use HTML, CSS, JavaScript, Servers and Databases
- __They have lots of money__

Web developers are in high demand, with plenty of job opportunities in every single metropolitan area. Web development is accessible and you can transition toward it from any of the engineering disciplines.

As web developers, you can startup your own businesses with significantly less capital than anyone else.

Whether your interests are in finding a job, or following the entrepreneurial path, learning web development is a great way to do it!

Workshop Overview
---------------

The intention behind these workshops is to teach you how web applications are built within industry.

We will use three programming languages, HTML, CSS, JavaScript, as well as quite a few libraries. There is a lot to cover and we will move quickly, so please do not hesitate to ask any questions. We are introducing a lot of concepts and it can get confusing.

[CatBnB is a short-term property rental marketplace for cats](https://catbnb.glitch.me). We built it to showcase the fundamental tools and techniques of web application development.

All code for CatBnB can be accessed from the Glitch editor. Everyone gets their own copy of the site to hack apart and play with. It's open source so have at it!

Before diving into CatBnB's code, we will teach the basics of HTML, CSS and JavaScript.

- [Web 101 : Introduction to HTML & CSS](//web101.glitch.me)
- [Web 102 : Introduction to Javascript, Node & Express](//web102.glitch.me)
- [CatBnB](//catbnb.glitch.me)

Throughout the workshop, there will be exercises to test your understanding of the material. Please feel free to collaborate with your neighbours and to help them out if they are having trouble.


Web Development Overview
---------------------------

The are five primary components to a web application.

*HTML* is the skeleton of your application. You use it to layout where everything should go.

*CSS* is the beauty of your application. It's how you choose colours, fonts, sizes and positioning.

*JavaScript* is how your application thinks. JavaScript is necessary to make an application dynamic and interactive.

*Servers* are programs which listen to the Internet for requests. They can respond with HTML, CSS and JavaScript to be interpreted by a web browser.

*Databases* are your application's memory. They are where servers store information.


What is Glitch?
---------------

We'll be using an online web application editor called [Glitch](https://glitch.com). Glitch lets you get started making web apps very quickly. Some of its main benefits are:

- Glitch takes care of setting up the servers, so you can jump right into coding your website.
- All you need to use it is a web browser. There's no need to install anything. You can even work on your website from a tablet or phone!
- Your website is immediately online. You'll be making a real live website that you can share with your friends.
- Glitch supports real-time collaboration, much like Google Docs. Multiple people can edit a file at once, and you can see what changes others are making as they type.
- Glitch uses Node.js for the backend (we'll explain what this means later). Node.js uses JavaScript, the same language used for browser scripting. This means you don't have to learn two different languages to code the frontend and backend.
- Glitch lets you remix other projects. This gives you your own copy of the project to modify and play with. You'll be able to remix the CatBnB project we set up and add some improvements.

Let's get started. Open up the [public/intro-to-html.html](https://glitch.com/edit/#!/html-intro?path=public/intro-to-html.html) page.  Here you will see the HTML for a simple web page.

What is HTML?
-------------

HTML stands for Hypertext Markup Language. It's the language used to describe web pages. Much in the same way Microsoft Word displays .doc files, web browsers display .html files.

HTML is primarily intended for describing the content and semantics of a web page. This includes things like your text, paragraphs, images and hyperlinks. It's not meant to handle the look and style of a page. That's handled by a separate language called CSS.

The HTML for a very simple web page might look like this:

```
<html>
  <body>
    Hello everyone!
  </body>
</html>
```

The text between angle brackets, such as `<html>` and <body> are called tags. Tags are like the nouns in the HTML language. Most tags have an opening and closing tag. Closing tags start with `</`. Tags can contain other tags or text between their opening and closing tags. In the above example, everything between `<html>` and `</html>` is inside the `<html>` tag. The root element of HTML documents is always the <html> tag.

HTML documents are divided into two parts: the body and the head. We left out the head in the above example. Let's add it in.

```
<html>
  <head>
    <title>Simple HTML Document</title>
  </head>
  <body>
    Hello everyone!
  </body>
</html>
```

The body of a document contains all the stuff you see inside the page. The head contains other metadata that doesn't appear inside the page. In this example, we specified the title in the head. The title is what appears in the tab for the page.

Let's look at a slightly longer HTML page.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Intro to HTML</title>
  </head>
  
  <body>
    
    <ul>
      <li><a href="/intro-to-html.html">HTML</a></li>
      <li><a href="/intro-to-css.html">CSS</a></li>
      <li><a href="/homeless.html">CatBnB</a></li> 
      <li><a href="/intro-to-js.html">JavaScript</a></li>
      <li><a href="/intro-to-jquery.html">jQuery</a></li>
      <li><a href="/listless.html">Listings</a></li>
      <li><a href="/fun.html">Fun CSS examples.</a></li>
      <li><a href="/helpful-resources.html">Helpful resources</a></li>
    </ul>
    
    <ol>
      <li>Siamese</li>
      <li>Tabby</li>
      <li>Tuxedo cat</li>
      <li>Tuxedo cat</li>
    </ol>
    
    <h1>This is a <a href="http://google.ca">heading</a></h1>
    <h2>This is a smaller heading</h2>
    <h6>Really small heading</h6>
    
    <!-- This is a comment in HTML. It won't show up on the web page. It's useful for leaving notes for yourself and other developers working on this web page. -->
    <p>This is a paragraph.</p>
    
    <div>
      <p>The <code>div</code> tag stands for "division". Web developers typically use it as a container, to group a bunch of HTML tags together.</p>
    </div>
    
    <img src="https://cdn.gomix.com/b07a12d5-7910-4ca6-9f1f-ae0aa2d99417%2Fcat-in-box.jpg?1484188848213" width="300">
  </body>
  
</html>
```

This HTML introduces quite a few tags. Let's go over them.

- The first line, `<!DOCTYPE html>`, is a doctype declaration. It tells the browser which version of HTML we're using. As written above, it specifies that we're using HTML5, the newest version. For those who are curious, you can specify HTML 4.01 with the declaration `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`. Why does it look so much more complicated? Let's just say those were dark days for web development.
- The `<ul>` tag makes an **u**nordered **l**ist. You can use this tag to add bullet points to your web page.
- The `<li>` tag is for **l**ist **i**tems. A `<ul>` tag should contain a series of `<li>` tags: one for each bullet point.
- The `<a>` tag stands for anchor. You use it to make hyperlinks.
- The `<ol>` tag makes an **o**rdered **l**ist. Like the `<ul>` tag, it should contain a series of `<li>` tags. Ordered lists will appear as numbered lists.
- The `<h1>` through `<h6>` tags are for headings. `<h1>` is the largest, most prominent heading, `<h2>` would be for a slightly smaller subheading, and `<h6>` is for the least prominent subheadings.
- The `<p>` tag creates paragraphs.
- `<div>` tags create divisions. Web developers typically use it as a container, to group a bunch of HTML tags together.
- The `<img>` tag puts an image in your web page. 
- Anything between `<!--` and `-->` is a comment in HTML and will have no effect on your web page.

Tags can have *attributes*. Attributes are written in the form `attribute-name="value"`. For example, you could make a link to [Wikipedia](https://www.wikipedia.org/) using the `<a>` tag like this:

```
<a href="https://www.wikipedia.org/">Wikipedia</a>
```

In the above example, `href` is an attribute that anchor tags can (and usually do) have. The `href` attribute specifies where the link should point to (in this case, https://www.wikipedia.org/). The text between the opening and closing `a` tags is the text for the link.

`<img>` tags have `src` attribute. It should be set to the URL of the image you want to display. In the image above, we also used the width attribute to specify that the image should be 300 pixels wide.

Tip: you can put `<img>` tags inside `<a>` tags to make an image link.

One important attribute we'll be hearing more about later is the `class` attribute. Classes are used to apply a visual style to elements with a certain class, and also to operate on tags with JavaScript. We'll see how this works a bit later.

#### Practice
- Try making an image link by putting an `<img>` tag inside an `<a>` tag.
- The `<input>` tag is used to make textboxes and other types of input elements. It has a `type` attribute that can be one of the following values: button, checkbox, color, file, hidden, number, password, radio, range, reset, search, submit, text. Try seeing what the different types do.

What is CSS?
------------

CSS stands for Cascading Style Sheets. It's a companion language to HTML that lets you easily style your web page. With CSS you can completely change how your web page looks without modifying the HTML. [CSS Zen Garden](http://www.csszengarden.com/) has some great examples of this. All the links on that page have identical HTML, but different CSS, and each looks completely different.

You can add CSS to your web page by putting it in a `<style>` tag in the head of your document, like this:

```
<html>
  <head>
    <style>
      body { 
        color: red;
        font-size: 22px;
      }
    </style>
  </head>
  <body>
    Hello everyone!
  </body>
</html>
```

The above example makes all text on the page big and red. Let's examine the CSS in more detail.

```
body { 
  color: red;
  font-size: 22px;
}
```

CSS has two parts: selectors and properties. Selectors select the elements on the page you want to style, and properties specify how they should look. In the above example our selector is `body`; we want to apply our style to the entire body element of the web page. Our properties are `color: red;` and `font-size: 22px`. The `color` property is used to specify the color of text, and font-size, not surprisingly, specifies the size of the text. We set it to 22 pixels tall.

For each selector, you can have as many properties as you like. You can find a complete list of CSS properties <a href="https://www.w3schools.com/cssref/default.asp" target="_blank">here</a>. For now, we'll stick to a few of the more common ones.

In the above example, we used a *tag* selector to select the body. You can do the same for any tag. For example, 

```
h1 {
  color: lightblue;
}
```

will select all `h1` tags on the page and make their text light blue. If you want to apply the same style to multiple selectors, you can comma separate them:

```
h1, h2, h3, p {
  color: lightblue;
}
```

Another very important type of selector is the *class* selector.
```
.green {
  color: green;
}
```
This will turn any element with the attribute `class="green"` green

You can combine selectors as follows:
```
h1.green {
  color: green;
}
```
This would turn any `h1` element with the attribute `class="green"` green. That element would look like `<h1 class="green">...Text...</h1>`

CatBnB Homepage
--------------------------------------------------------

Now that we have seen how HTML and CSS work, we are ready to investigate `catbnb.html`