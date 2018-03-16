module.exports = {
  main: {
    files: [{
      expand: true,
      cwd: './static/ui/svg',
      src: [
        '**/*.svg'
      ],
      dest: './static/ui/icons'
    }],
    options: {
      enhanceSVG: true,
      dynamicColorOnly: true,
      cssprefix: '.icon--',
      colors: {
        blue: '#6b4cde',
        blueDark: '#035f9d',
        white: '#ffffff',
        green: '#61a321'
      }
    }
  }
}
