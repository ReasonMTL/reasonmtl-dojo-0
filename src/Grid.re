let grid = ReasonReact.statelessComponent("Grid");

let make = (~colors, _children) => {
  ...grid,
  render: (_self) =>
    Array.map((color) => <HelloColor initialColor={color} />, colors) |> ReasonReact.array
};