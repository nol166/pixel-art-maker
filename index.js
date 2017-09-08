window.onload = () => {


  let finalBoss = {
    //the grid and other element stuff

    board: {
      margin: 'auto',
      marginTop: '15px',
      padding: '20px',
      width: '800px',
      height: '600px',
      // borderRadius: '3px',
      backgroundColor: 'transparent',
    },
    toolBar: {
      margin: 'auto',
      marginTop: '25px',
      padding: '20px',
      width: 'auto',
      height: '55px',
      borderRadius: '3px',
      backgroundColor: 'grey',
      boxShadow: '3px 3px 3px grey',
      // background-image: url('https://1.bp.blogspot.com/-hMLICEzhVH0/WXZSMnCkDJI/AAAAAAAACG4/d5wfzfVE8rkNq6re8x1BNV5b04IOp-8bACLcBGAs/s1600/22222_1.gif');


    },
    thing: {
      width: '8px',
      height: '8px',
      border: '1px solid lightgrey',
      backgroundColor: 'white',
      float: 'left',
    },
    palette: {
      margin: 'auto',
      display: 'flex',
      borderRadius: '3px',
      justifyContent: 'center',
    },
    button: {
      borderRadius: '100%',
      height: '30px',
      width: '30px',
    },
    colorShit: {
      height: 'auto',
      width: '300px',
      margin: 'auto',
      marginTop: '10px',
      textAlign: 'center'
    },
    colors: ['white', 'blue', 'black'],
    currentPaintColor: null,
    toggleMouse: false,
  }

  //Make each pixel
  function makeTheThingz(index) {
    //Make the canvas
    let thing = document.createElement('div');
    //Add an id
    thing.setAttribute('id', index)

    thing.addEventListener('mouseenter', function() {
      if (finalBoss.toggleMouse) {
        thing.style.backgroundColor = finalBoss.currentPaintColor;
      }
    })
    //Style the thing
    addShit(finalBoss, thing, "thing")
    //Add to the board
    board.append(thing);
  }

  //Create toolbar
  function builToolbarShit() {
    let palette = document.createElement('div');
    addShit(finalBoss, palette, 'palette')
    toolBar.append(palette);
    //iterate through the colors
    for (color of finalBoss.colors) {
      let button = document.createElement('button');
      button.setAttribute('id', color);
      button.onfocus = button.style.outline = 'none';
      /////////////////////////////////////////////////////
      button.addEventListener('click', function() {
        finalBoss.currentPaintColor = this.id;
      })
      addShit(finalBoss, button, "button", color)
      palette.append(button)
    }




    let colorShit = document.createElement('form');



    let colorInput = document.createElement('input');
    colorInput.setAttribute('type', 'color');
    addShit(finalBoss, colorShit, "colorShit");
    colorInput.onfocus = colorInput.style.outline = 'none';
    colorInput.addEventListener('change', function() {
      finalBoss.currentPaintColor = colorInput.value;
    })
    toolBar.append(colorShit);
    colorShit.append(colorInput);
  }




  let body = document.getElementsByTagName('body')[0]

  let board = document.createElement('div')

  let toolBar = document.createElement('div')

  //Style the shit
  addShit(finalBoss, board, "board");
  //add style to the toolbar
  addShit(finalBoss, toolBar, "toolBar");

  // add the toolbar and board itself to the body
  body.append(board)
  body.append(toolBar)

  //Create toolbar components
  builToolbarShit();

  //Make all the things
  for (var i = 0; i < 1360; i++) {
    makeTheThingz(i);
  }

  window.addEventListener('mousedown', function() {
    finalBoss.toggleMouse = true;
  })
  window.addEventListener('mouseup', function() {
    finalBoss.toggleMouse = false;
  })
}

function addShit(options, element, objname, color) {
  let styles = options[objname];
  let style = element.style;
  Object.assign(style, styles);
  if (color) {
    element.style.backgroundColor = color
  }
}

// create button for html2canvas
var button = document.createElement("button");
button.innerHTML = "Create image file";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function() {
  html2canvas(document.body, {
    onrendered: function(canvas) {
      document.body.appendChild(canvas);
    },
    width: 300,
    height: 300
  });
});
