/* global document, io */
/* eslint no-console: off */
(() => {
  const host = document.getElementById('script-socket-to-me').getAttribute('data-host')
  const socket = io(`//${host}`)
  socket.on('socket-to-me', (data) => {
    document.getElementById('div-socket-to-me').innerHTML = data
  })
})()
