import React, { useEffect, useState } from 'react';
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
  let cleared = false;
  // timeCount
  const [timeCount, setTimeCount] = useState(0);
  useEffect(() => {
    if (isPlaying && !isFailure && !cleared) {
      const plusTimeCount = setInterval(() => {
        setTimeCount(timeCount + 1);
      }, 1000);
      return () => {
        clearInterval(plusTimeCount);
      };
    }
  }, [isPlaying, timeCount, isFailure, cleared]);
  // boardにuserInputsとbombMapを反映(bombSearchを参照)
  for (let iY = 0; iY < 9; iY++) {
    for (let iX = 0; iX < 9; iX++) {
      if (userInputs[iY][iX] === 1) {
        {
          bombMap[iY][iX] === 1 ? (board[iY][iX] = 11) : bombSearch(iX, iY);
        }
      } else if (userInputs[iY][iX] === 2) {
        board[iY][iX] = 9;
      } else if (userInputs[iY][iX] === 3) {
        board[iY][iX] = 10;
      }
    }
  }
  // 旗の立っている数
  let flagCount = 0;
  for (const boardRow of board) {
    for (const boardElement of boardRow) {
      if (boardElement === 10) {
        flagCount++;
      }
    }
  }
  // bombCount
  let bombCount = 0;
  for (const bombRow of bombMap) {
    for (const bomb of bombRow) {
      if (bomb === 1) {
        bombCount++;
      }
    }
  }
  if (bombCount !== 0) {
    bombCount -= flagCount;
  }
  // board上の開いたマスを数える(クリア時の挙動の準備)
  let revealCount = 0;
  for (let iY = 0; iY < 9; iY++) {
    for (let iX = 0; iX < 9; iX++) {
      if (board[iY][iX] !== -1 && board[iY][iX] !== 9 && board[iY][iX] !== 10) {
        revealCount++;
      }
    }
  }
  // クリア時のフラグ
  if (revealCount === 71) {
    cleared = true;
  }
  // リセットボタン
  const resetClick = () => {
    setUserInputs(normalBoard);
    setBombMap(normalBoard);
    setTimeCount(0);
  };
  const userClick = (x: number, y: number) => {
    // ボムを左クリックした時にそれ以上クリックできないように
    if (isFailure) {
      null;
    } // クリア時にそれ以上クリックできないようにする(初級限定)
    else if (revealCount === 71) {
      null;
    } else {
      console.log(x, y);
      // useStateに代入する準備
      const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
      const newBombMap: (0 | 1)[][] = JSON.parse(JSON.stringify(bombMap));
      // 1手目の時に実行
      if (JSON.stringify(normalBoard) === JSON.stringify(bombMap)) {
        let i = 1;
        while (i < 11) {
          const xBomb = Math.floor(Math.random() * 9);
          const yBomb = Math.floor(Math.random() * 9);
          if (
            newBombMap[yBomb][xBomb] === 0 &&
            `${yBomb}-${xBomb}` !== `${y}-${x}` &&
            (Math.abs(yBomb - y) > 1 || Math.abs(xBomb - x) > 1) // 初手で必ず空白連鎖がおきる
          ) {
            newBombMap[yBomb][xBomb] = 1;
            i += 1;
          }
          setBombMap(newBombMap);
        }
      }
      if (userInputs[y][x] === 0) {
        newUserInputs[y][x] = 1;
        setUserInputs(newUserInputs);
      }
    }
  };
  // 右クリックした時に旗とはてなにする
  const rightClick = (x: number, y: number, event: React.MouseEvent) => {
    event.preventDefault(); // デフォルトの右クリックメニューを無効化
    if (isFailure) {
      null;
    } else {
      const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
      if (userInputs[y][x] === 0 && flagCount < 10) {
        newUserInputs[y][x] = 3;
      } else if (userInputs[y][x] === 3) {
        newUserInputs[y][x] = 2;
      } else if (userInputs[y][x] === 2) {
        newUserInputs[y][x] = 0;
      }
      setUserInputs(newUserInputs);
    }
  };
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

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles['sub-board']}>
          <div className={styles['bomb-count-board']}>
            <p className={styles['bomb-count']}>{bombCount}</p>
          </div>
          <div
            className={styles.reset}
            onClick={() => resetClick()}
            style={isFailure ? { backgroundPositionX: '-390px' } : {}}
          />
          <div className={styles['time-count-board']}>
            <p className={styles['time-count']}>{timeCount}</p>
          </div>
        </div>
        <div className={styles.bar} />
        <div className={styles['play-board']}>
          {board.map((row, y) =>
            row.map((display, x) => (
              <div
                className={styles.cell}
                key={`${x}-${y}`}
                onClick={() => userClick(x, y)}
                onContextMenu={(event: React.MouseEvent) => rightClick(x, y, event)}
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
