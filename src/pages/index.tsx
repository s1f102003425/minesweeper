import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
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
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const bombCount = 10;
  // 0 -> ボム無し
  // 1 -> ボム有り
  const [bombMap, setBombMap] = useState<(0 | 1)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
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
    [-1, -1, -1, -1, -1, 0, -1, -1, -1],
    [-1, -1, -1, -1, -1, 1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 2, -1, -1, -1],
    [-1, -1, -1, -1, -1, 3, -1, -1, -1],
    [-1, 9, -1, -1, -1, 4, -1, -1, -1],
    [-1, 10, -1, -1, -1, 5, 8, -1, -1],
    [-1, 11, -1, -1, -1, 6, 7, -1, -1],
  ];
  const onClick = (x: number, y: number) => {
    const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
    newUserInputs[y][x] = +1;
    console.log(`${x}-${y}`);
    setUserInputs(newUserInputs);
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles['play-board']}>
          {board.map((row, y) =>
            row.map((display, x) => (
              <div
                className={styles.icon}
                key={`${x}-${y}`}
                onClick={() => onClick(x, y)}
                style={{
                  backgroundPosition: 30 - 30 * display,
                  border:
                    display === -1 || display === 9 || display === 10
                      ? '5px #f9f9f9 outset'
                      : '5px #f9f9f9 solid',
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
