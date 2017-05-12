'use strict'

  var menu, close, drawer, nav, html, height, navList

  drawer = document.querySelector('.sticky')
  nav = document.querySelector('nav')
  html = document.querySelector('html')
  navList = document.querySelector('ul')
  height = nav.clientHeight;

 

  // Create link elements, set attributes, classes and content
  menu = document.createElement('a')
  close = document.createElement('a')
  menu.setAttribute('href', '#')
  close.setAttribute('href', '#')
  menu.classList.add('menu')
  close.classList.add('close')
  menu.innerHTML = '<span>Menu</span>'
  close.innerHTML = '<span>Close</span>'


  // Append links before drawer and nav
  drawer.parentNode.insertBefore(menu, drawer)
  nav.parentNode.insertBefore(close, nav)

  menu = document.querySelector('.menu')
  close = document.querySelector('.close')

  drawer.style.height = 0

  // Change height on resize

  window.addEventListener('resize', function(e) {
  e.preventDefault;
  height = navList.clientHeight;
  console.log(height)
})

  menu.addEventListener('click', function(e) {
    e.preventDefault()
    drawer.style.height =  height + 'px'
    close.style.position = 'absolute'
    close.style.zIndex = '101'
  })

  close.addEventListener('click', function(e) {
    e.preventDefault(e)
    drawer.style.height = 0
    close.style.position = 'static'
    close.style.zIndex = '0'
  })

  html.classList.add('js')