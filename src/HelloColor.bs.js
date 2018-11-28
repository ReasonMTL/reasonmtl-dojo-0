// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var squareComponent = ReasonReact.reducerComponent("HelloColor-ReactTemplate");

function setStyleColor(color) {
  return {
          backgroundColor: color,
          height: "120px",
          width: "120px"
        };
}

function switchColor(color) {
  switch (color) {
    case "blue" : 
        return "pink";
    case "green" : 
        return "blue";
    case "red" : 
        return "green";
    default:
      return "red";
  }
}

function make(initialColor, derp, _children) {
  return /* record */[
          /* debugName */squareComponent[/* debugName */0],
          /* reactClassInternal */squareComponent[/* reactClassInternal */1],
          /* handedOffState */squareComponent[/* handedOffState */2],
          /* willReceiveProps */squareComponent[/* willReceiveProps */3],
          /* didMount */(function (self) {
              setInterval((function (param) {
                      return Curry._1(self[/* send */3], /* SwitchColor */0);
                    }), 1000);
              return /* () */0;
            }),
          /* didUpdate */squareComponent[/* didUpdate */5],
          /* willUnmount */squareComponent[/* willUnmount */6],
          /* willUpdate */squareComponent[/* willUpdate */7],
          /* shouldUpdate */squareComponent[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", {
                          style: setStyleColor(self[/* state */1][/* color */0])
                        });
            }),
          /* initialState */(function (param) {
              return /* record */[/* color */initialColor];
            }),
          /* retainedProps */squareComponent[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[/* color */action[0]]]);
              } else {
                return /* Update */Block.__(0, [/* record */[/* color */switchColor(state[/* color */0])]]);
              }
            }),
          /* jsElementWrapped */squareComponent[/* jsElementWrapped */13]
        ];
}

exports.squareComponent = squareComponent;
exports.setStyleColor = setStyleColor;
exports.switchColor = switchColor;
exports.make = make;
/* squareComponent Not a pure module */