/* This data source is just a mock.
 * TODO: Replace with actual call to get real apps from a real data source.
 */

var cursor_path = '../../images/';

$(function() {
  var datasource = {
    iconList: {
      app1: {
        title: "Astronomy Wizard",
        imgURL: "../../images/app_samples/app.png"
      },
      app2: {
        title: "Password Maker",
        imgURL: "../../images/app_samples/app.png"
      },
      app3: {
        title: "Search Bunny",
        imgURL: "../../images/app_samples/app.png"
      },
      app4: {
        title: "Shopping R Us",
        imgURL: "../../images/app_samples/app.png"
      },
      app5: {
        title: "Social Music",
        imgURL: "../../images/app_samples/app.png"
      },
      app6: {
        title: "Super Notepad",
        imgURL: "../../images/app_samples/app.png"
      },
      app7: {
        title: "Mini Chat",
        imgURL: "../../images/app_samples/app.png"
      },
      app8: {
        title: "Resto Recommender",
        imgURL: "../../images/app_samples/app.png"
      }
    },

    getList: function(callback) {
      var list = this.iconList;

      // Add special one
      list["about:icongrid"] = {
        title: "About IconGrid",
        imgURL: "../../images/app_samples/app_about.png"
      };
      callback(list);
    },

    openItem: function(itemID) {
      window.open("http://www.google.com/search?q=" + itemID);
    },

    // if all your items have 'imgURL' and 'title' properties,
    // then you don't need to implement these.
    // These get called when an item doesn't have the right properties.
    // Note that you can pass in data URIs for icons
    getImgURL: function(itemID) {},
    getTitle: function(itemID) {}
  };

  var hostElement = $("#clipper");
  var layout = new GridLayout(hostElement.width(), hostElement.height(), 3, 2);
  var dashboard = new IconGrid("mydash", hostElement, datasource, layout);

  dashboard.initialize();
  dashboard.refresh();
});