type state = {
  color: string
};

type action = 
  | SetColor(string)
  | SwitchColor;

let squareComponent = ReasonReact.reducerComponent(__MODULE__);

let setStyleColor = (color) => 
  ReactDOMRe.Style.make(
    ~backgroundColor=color,
    ~width="120px",
    ~height="120px", 
    ()
  );

let switchColor = (color) =>
  switch(color) {
  | "red" => "green"
  | "green" => "blue"
  | "blue" => "pink"
  | _ => "red"
  }

let make = (~initialColor: string, _children) => {
  ...squareComponent,
  initialState: () => {color: initialColor},
  didMount: (self) => 
    Js.Global.setInterval(() => self.send(SwitchColor), 1000) |> ignore,
  reducer: (action: action, state) => switch(action) {
  | SetColor(color) => ReasonReact.Update({color: color})
  | SwitchColor => ReasonReact.Update({color: switchColor(state.color)})
  },
  render: self => {
    <div style=setStyleColor(self.state.color)></div> 
  }
}