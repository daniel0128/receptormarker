HTMLWidgets.widget({

  name: 'convergence',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      width: el.offsetWidth,
      height: el.offsetHeight
    }

  },

  renderValue: function(el, x, instance) {
    var network = {
      data: {
          nodes: [ { id: "1" }, { id: "2" } ],
          edges: [ { id: "2to1", target: "1", source: "2" } ]
      }
    };
    var options = {
      swfPath: HTMLWidgets.getAttachmentUrl('cytoscapeweb', 'CytoscapeWeb'),
      flashInstallerPath: HTMLWidgets.getAttachmentUrl('cytoscapeweb', 'playerProductInstall')
    };
    var vis_style = {
      global: {
          backgroundColor: "#ABCFD6"
      },
      nodes: {
          shape: "CIRCLE",
          borderWidth: 3,
          borderColor: "#ffffff",
          color: "#0b94b1",
          size: 25,
          labelHorizontalAnchor: "center"
      },
      edges: {
          width: 3,
          color: "#0B94B1"
      }
    };
    var draw_options = {

      network: network,

      nodeLabelsVisible: isLabel,

      // let's try another layout
      layout: "Circle",

      // set the style at initialisation
      visualStyle: vis_style,

      // hide pan zoom
      panZoomControlVisible: false
    };
    instance.cy = new org.cytoscapeweb.Visualization(el.id, options);
    instance.cy.draw(draw_options);
  },

  resize: function(el, width, height, instance) {

  }

});
