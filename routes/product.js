var express = require("express");
var router = express.Router();

var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");
var users = [
  {
    name: "Shyam",
    age: "26",
  },
  {
    name: "Navjot",
    age: "26",
  },
  {
    name: "Vitthal",
    age: "26",
  },
];

// By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

router.post("/createInvoice", function (req, res, next) {
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "",
  };
  var options = {
    format: "A3",
    orientation: "portrait",
    // border: "10mm",
    header: {
      height: "45mm",
      contents: `<div
      class="header"
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 140px;
        width: 90%;
      "
    >
      <div class="social">
        <ul style="list-style-type: none; padding-left: 0">
          <li>facebock</li>
          <li>whatsapp</li>
          <li>instagram</li>
        </ul>
      </div>
      <div>
        <img
          class="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfFaCTfkihI7yKMWsb5msz1RNKfO0zB-JQXwmak4NZTJSO0eSn3i9tjV3P_xzUxAiN8k&usqp=CAU"
          alt="logo"
          style="height: 130px; width: 160px; border-radius: 5px"
        />
      </div>
      <div class="info" style="width: 200px">
        <ul style="list-style-type: none; padding-left: 0">
          <li>exstra@info.com</li>
          <li>www.exstra.com</li>
          <li>sudia arabia, makka alwheda</li>
          <li>instagram</li>
        </ul>
      </div>
    </div>`,
    },
    // footer: {
    //   height: "28mm",
    //   contents: {
    //     first: "Cover page",
    //     2: "Second page", // Any page number is working. 1-based index
    //     default:
    //       '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
    //     last: "Last Page",
    //   },
    // },
  };
  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
  res.send('done')
});

module.exports = router;
