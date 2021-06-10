import "../App.css";

function UI(props) {
  return (
    <div classMane="ui container parent">
      <div className="first-row row">
        <button class="mini ui button cancel" name="c" onClick={props.clear}>
          C
        </button>
        <button class="mini ui button" name="ce" onClick={props.backSpace}>
          CE
        </button>
        <button
          class="mini ui button"
          name="% "
          onClick={(e) => props.onClick(e.target.name)}
        >
          %
        </button>
        <button
          class="mini ui button"
          name="-"
          onClick={(e) => props.onClick(e.target.name)}
        >
          -
        </button>
      </div>
      <div className="second-row row">
        <button
          class="mini ui button"
          name="7"
          onClick={(e) => props.onClick(e.target.name)}
        >
          7
        </button>
        <button
          class="mini ui button"
          name="8"
          onClick={(e) => props.onClick(e.target.name)}
        >
          8
        </button>
        <button
          class="mini ui button"
          name="9"
          onClick={(e) => props.onClick(e.target.name)}
        >
          9
        </button>
        <button
          class="mini ui button"
          name="/"
          onClick={(e) => props.onClick(e.target.name)}
        >
          ÷
        </button>
      </div>
      <div className="third-row row">
        <button
          class="mini ui button"
          name="4"
          onClick={(e) => props.onClick(e.target.name)}
        >
          4
        </button>
        <button
          class="mini ui button"
          name="5"
          onClick={(e) => props.onClick(e.target.name)}
        >
          5
        </button>
        <button
          class="mini ui button"
          name="6"
          onClick={(e) => props.onClick(e.target.name)}
        >
          6
        </button>
        <button
          class="mini ui button"
          name="*"
          onClick={(e) => props.onClick(e.target.name)}
        >
          x
        </button>
      </div>
      <div className="fourth-row row">
        <button
          class="mini ui button"
          name="1"
          onClick={(e) => props.onClick(e.target.name)}
        >
          1
        </button>
        <button
          class="mini ui button"
          name="2"
          onClick={(e) => props.onClick(e.target.name)}
        >
          2
        </button>
        <button
          class="mini ui button"
          name="3"
          onClick={(e) => props.onClick(e.target.name)}
        >
          3
        </button>
        <button
          class="mini ui button plus"
          style={{ height: "8em", position: "absolute" }}
          name="+"
          onClick={(e) => props.onClick(e.target.name)}
        >
          +
        </button>
      </div>
      <div className="fifth-row row">
        <button
          class="mini ui button"
          name="0"
          onClick={(e) => props.onClick(e.target.name)}
        >
          0
        </button>
        <button
          class="mini ui button"
          name="."
          onClick={(e) => props.onClick(e.target.name)}
        >
          .
        </button>

        <button class="mini ui button" name="=" onClick={props.calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default UI;
