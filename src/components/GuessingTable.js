import React from "react";
import { func } from "prop-types";

function GuessingTable(props) {
  const [values, setValues] = React.useState(() => {
    let propsData = props.values;
    propsData.forEach(t => {
      t["revealed"] = false;
      t["userAnswer"] = "";
      t["result"] = "";
    });
    return propsData;
  });
  function RevealItem(e, item) {
    let data = [...values];
    data.forEach(t => {
      if (t === item) {
        t.revealed = true;
        if (t.answer === t.userAnswer) {
          t.result = "Ano";
        } else {
          t.result = "Ne";
        }
      }
    });
    setValues(data);

    e.preventDefault();
  }
  function RevealItems(e) {
    let data = [...values];
    data.forEach(t => {
      t.revealed = true;
      if (t.answer === t.userAnswer) {
        t.result = "Ano";
      } else {
        t.result = "Ne";
      }
    });
    setValues(data);
    e.preventDefault();
  }
  function SetUserAnswer(e, item) {
    let data = [...values];

    data.forEach(t => {
      if (t === item) {
        t.userAnswer = e.target.value;
      }
    });

    setValues(data);
    e.preventDefault();
  }
  function ClearItems(e) {
    let data = [...values];
    data.forEach(t => {
      t.revealed = false;
      t.userAnswer = "";
      t.result = "";
    });
    setValues(data);
    e.preventDefault();
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Otázka</th>
            <th>Vaše odpověď</th>
            <th>Hodnota</th>
            <th>Výsledek</th>
          </tr>
        </thead>
        <tbody>
          {values.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.question}</td>
                <td>
                  <form onSubmit={e => RevealItem(e, item)}>
                    <input
                      type="text"
                      onChange={e => SetUserAnswer(e, item)}
                      value={item.userAnswer}
                    />
                    <input
                      type="button"
                      value="Odhalit"
                      onClick={e => RevealItem(e, item)}
                      key={i}
                    />
                  </form>
                </td>
                <td>{item.revealed ? item.answer : null}</td>
                <td>{item.result}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <input
        type="button"
        value="Odhalit vše"
        className="largeButton"
        onClick={e => RevealItems(e)}
      />

      <input
        type="button"
        value="Vše resetovat"
        className="largeButton"
        onClick={e => ClearItems(e)}
      />
    </>
  );
}

export default GuessingTable;
