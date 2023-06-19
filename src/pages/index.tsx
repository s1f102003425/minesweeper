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
    row.some((input, x) => input === 1 && bombMap[x][y] === 1)
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
  const userClick = (x: number, y: number) => {
    console.log(x, y);
    const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
    const newBombMap: (0 | 1)[][] = JSON.parse(JSON.stringify(bombMap));
    if (normalBoard === bombMap) {
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
      console.table(newBombMap);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
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
                    backgroundPosition: 30 - 30 * display,
                    border:
                      display !== -1 && display !== 9 && display !== 10
                        ? '5px #d6d7d8  solid'
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
