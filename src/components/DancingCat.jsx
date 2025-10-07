import { useState, useEffect } from 'react';
import Cat from '../assets/images/Cat';
import '../styles/animations.css';

const DancingCat = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(2); // 1: 매우빠름, 2: 빠름, 3: 보통, 4: 느림

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const stopAnimation = () => {
    setIsPlaying(false);
  };

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      // 스페이스바 또는 엔터: 시작/정지
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        toggleAnimation();
      }
      // ESC: 정지
      else if (e.code === 'Escape') {
        stopAnimation();
      }
      // 1-4: 속도 조절
      else if (e.code === 'Digit1' || e.code === 'Numpad1') {
        changeSpeed(1);
      }
      else if (e.code === 'Digit2' || e.code === 'Numpad2') {
        changeSpeed(2);
      }
      else if (e.code === 'Digit3' || e.code === 'Numpad3') {
        changeSpeed(3);
      }
      else if (e.code === 'Digit4' || e.code === 'Numpad4') {
        changeSpeed(4);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const getSpeedLabel = () => {
    switch(speed) {
      case 1: return '매우 빠름';
      case 2: return '빠름';
      case 3: return '보통';
      case 4: return '느림';
      default: return '보통';
    }
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">춤추는 고양이 !</h1>
      <div className={`cat-wrapper ${isPlaying ? 'dancing' : 'paused'} speed-${speed}`}>
        <Cat />
      </div>
      <div className="controls">
        <button className="control-button" onClick={toggleAnimation}>
          {isPlaying ? '⏸️ 멈추기' : '▶️ 춤추기'}
        </button>
        <div className="speed-controls">
          <span className="speed-label">속도: {getSpeedLabel()}</span>
          <div className="speed-buttons">
            {[1, 2, 3, 4].map(s => (
              <button
                key={s}
                className={`speed-button ${speed === s ? 'active' : ''}`}
                onClick={() => changeSpeed(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="keyboard-hint">
        <p>⌨️ 키보드 단축키</p>
        <p>Space/Enter: 시작/정지 | ESC: 정지 | 1-4: 속도 조절</p>
      </div>
    </div>
  );
};

export default DancingCat;
