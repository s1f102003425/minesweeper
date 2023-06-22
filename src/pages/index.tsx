import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const normalBoard: 0[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const directions = [
    [-1, -1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [1, 0],
    [0, 1],
    [1, -1],
    [-1, 1],
  ];
  // 0 -> 未クリック
  // 1 -> 左クリック
  // 2 -> はてな
  // 3 -> 旗
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>(normalBoard);
  const bombCount = 10;
  // 0 -> ボム無し
  // 1 -> ボム有り
  const [bombMap, setBombMap] = useState<(0 | 1)[][]>(normalBoard);
  const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  const isFailure = userInputs.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );
  // -1 -> 石
  // 0 -> 画像セルなし
  // 1~8 -> 数字セル
  // 9 -> 石＋はてな
  // 10 -> 石＋旗
  // 11 -> ボムセル
  const board: number[][] = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
  // そのマスの周囲8マスにあるボムの数をboardに入力する関数
  // 周囲8マスのボムの有無を確認して0なら、その8マスでもそれを繰り返す関数
  const bombSearch = (x: number, y: number) => {
    let count = 0;
    for (const direction of directions) {
      if (userInputs[y + direction[0]] === undefined) {
        continue;
      }
      if (bombMap[y + direction[0]][x + direction[1]] === 1) {
        count++;
      }
    }
    if (count === 0) {
      board[y][x] = 0;
      for (const direction of directions) {
        const subX = x + direction[1];
        const subY = y + direction[0];
        if (board[subY] !== undefined && board[subY][subX] === -1) {
          bombSearch(subX, subY);
        }
      }
    } else {
      board[y][x] = count;
    }
  };
  // リセットボタン
  const resetClick = () => {
    setUserInputs(normalBoard);
    setBombMap(normalBoard);
    console.log(normalBoard === bombMap);
    console.log(JSON.stringify(normalBoard) === JSON.stringify(bombMap));
  };
  const userClick = (x: number, y: number) => {
    if (isFailure) {
      null;
    } else {
      console.log(x, y);
      const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
      const newBombMap: (0 | 1)[][] = JSON.parse(JSON.stringify(bombMap));
      // 1手目の時に実行
      if (JSON.stringify(normalBoard) === JSON.stringify(bombMap)) {
        let i = 1;
        while (i < 11) {
          const xBomb = Math.floor(Math.random() * 9);
          const yBomb = Math.floor(Math.random() * 9);
          if (newBombMap[yBomb][xBomb] === 0 && `${yBomb}-${xBomb}` !== `${y}-${x}`) {
            newBombMap[yBomb][xBomb] = 1;
            i += 1;
          }
          setBombMap(newBombMap);
        }
      }
      newUserInputs[y][x] = 1;
      setUserInputs(newUserInputs);
    }
  };
  // boardにuserInputsとbombMapを反映
  for (let iY = 0; iY < 9; iY++) {
    for (let iX = 0; iX < 9; iX++) {
      if (userInputs[iY][iX] === 1) {
        {
          bombMap[iY][iX] === 1 ? (board[iY][iX] = 11) : bombSearch(iX, iY);
        }
      }
    }
  }
  // ボムを左クリックした時
  if (isFailure) {
    for (let failY = 0; failY < 9; failY++) {
      for (let failX = 0; failX < 9; failX++) {
        if (bombMap[failY][failX] === 1) {
          board[failY][failX] = 11;
        }
      }
    }
  }
  console.table(bombMap);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles['sub-board']}>
          <div className={styles['bomb-count']} />
          <div
            className={styles.reset}
            onClick={() => resetClick()}
            style={isFailure ? { backgroundPositionX: '-390px' } : {}}
          />
          <div className={styles['time-count']} />
        </div>
        <div className={styles.bar} />
        <div className={styles['play-board']}>
          {board.map((row, y) =>
            row.map((display, x) => (
              <div
                className={styles.cell}
                key={`${x}-${y}`}
                onClick={() => userClick(x, y)}
                style={{
                  border:
                    display !== -1 && display !== 9 && display !== 10
                      ? '1px solid #999'
                      : undefined,
                }}
              >
                <div
                  className={styles.icon}
                  style={{
                    backgroundPosition:
                      (display !== -1 && display !== 9 && display !== 10 ? 29 : 31) - 30 * display,
                    border:
                      display !== -1 && display !== 9 && display !== 10
                        ? '5px #d6d7d8 solid'
                        : '5px #f9f9f9 outset',
                    width: display !== -1 && display !== 9 && display !== 10 ? 38 : 40,
                    height: display !== -1 && display !== 9 && display !== 10 ? 38 : 40,
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
