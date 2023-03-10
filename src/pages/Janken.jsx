// pages/Janken.jsx;

// đœ useState ăźèȘ­ăżèŸŒăż
import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Janken = () => {
  const [jankenResult, setJankenResult] = useState({
    myHand: "ć„ććŸăĄ",
    comHand: "ćŸæ©äž­",
    result: "æȘćŻŸæŠ",
  });

  // đœ ć±„æ­Žăäżć­ăăăăăź state ăäœæïŒćæć€ăŻç©șéć
  const [history, setHistory] = useState([]);

  // đœ ăèȘćăźæăăć„ćăăŠïŒăèȘćăźæïŒçžæăźæïŒćæăăæăŁăăȘăăžă§ăŻăăćșćăăéąæ°
  const getJankenResult = (myHand) => {
    const hand = ["ă°ăŒ", "ăă§ă­", "ăăŒ"];
    const myIndex = hand.indexOf(myHand);
    const comIndex = Math.floor(Math.random() * 3);
    const resultSheet = [
      ["Draw", "Win", "Lose"],
      ["Lose", "Draw", "Win"],
      ["Win", "Lose", "Draw"],
    ];
    return {
      myHand: myHand,
      comHand: hand[comIndex],
      result: resultSheet[myIndex][comIndex],
    };
  };

  // đœ ăăżăłăŻăȘăăŻæă«ćźèĄăăăăăăăăăăăŠç”æăäżć­ăăéąæ°ă
  const getJanken = (myHand) => {
    const result = getJankenResult(myHand);
    setJankenResult(result);
    // đœ ăć±„æ­Žăźéćăźćé ­ă«ăăăăăăźç”æăèżœć ăăæ°ăăéćăăäœæăăŠć±„æ­ŽăźăăŒăżăäžæžăăăïŒ
    setHistory([result, ...history]);
  };

  return (
    <>
      <p>ăăăăăăźç»éą</p>
      <ActionButton text="ă°ăŒ" action={() => getJanken("ă°ăŒ")} />
      <ActionButton text="ăă§ă­" action={() => getJanken("ăă§ă­")} />
      <ActionButton text="ăăŒ" action={() => getJanken("ăăŒ")} />
      <p>èȘćăźæïŒ{jankenResult.myHand}</p>
      <p>çžæăźæïŒ{jankenResult.comHand}</p>
      <p>ç”æïŒ{jankenResult.result}</p>
      {/* đœ èżœć  */}
      <p>ć±„æ­Ž</p>
      <table>
        <thead>
          <tr>
            <th>èȘćăźæ</th>
            <th>çžæăźæ</th>
            <th>ç”æ</th>
          </tr>
        </thead>
        <tbody>
          {/* đœ ć±„æ­ŽăźéćăăèŠçŽ ăçæăăŠèĄšç€șăă */}
          {history.map((x, i) => (
            <tr key={i}>
              <td>{x.myHand}</td>
              <td>{x.comHand}</td>
              <td>{x.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
