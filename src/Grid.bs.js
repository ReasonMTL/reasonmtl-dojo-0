// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var HelloColor$ReactTemplate = require("./HelloColor.bs.js");

var grid = ReasonReact.statelessComponent("Grid");

function make(colors, _children) {
  return /* record */[
          /* debugName */grid[/* debugName */0],
          /* reactClassInternal */grid[/* reactClassInternal */1],
          /* handedOffState */grid[/* handedOffState */2],
          /* willReceiveProps */grid[/* willReceiveProps */3],
          /* didMount */grid[/* didMount */4],
          /* didUpdate */grid[/* didUpdate */5],
          /* willUnmount */grid[/* willUnmount */6],
          /* willUpdate */grid[/* willUpdate */7],
          /* shouldUpdate */grid[/* shouldUpdate */8],
          /* render */(function (_self) {
              return $$Array.map((function (color) {
                            return ReasonReact.element(undefined, undefined, HelloColor$ReactTemplate.make(color, /* array */[]));
                          }), colors);
            }),
          /* initialState */grid[/* initialState */10],
          /* retainedProps */grid[/* retainedProps */11],
          /* reducer */grid[/* reducer */12],
          /* jsElementWrapped */grid[/* jsElementWrapped */13]
        ];
}

exports.grid = grid;
exports.make = make;
/* grid Not a pure module */
