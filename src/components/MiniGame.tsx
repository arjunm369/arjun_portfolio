import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Play, RefreshCw, Trophy } from 'lucide-react';

const WORDS = [
  "javascript", "typescript", "react", "frontend", "backend",
  "scalable", "performance", "component", "deployment", "repository",
  "middleware", "asynchronous", "promise", "database", "framer",
  "tailwind", "serverless", "automation", "algorithm", "optimization"
];

const GAME_DURATION = 30; // seconds

export default function MiniGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('devTypingHighScore') || '0', 10);
  });

  const inputRef = useRef<HTMLInputElement>(null);

  // Game Logic Loop
  useEffect(() => {
    let timer: number;
    if (isPlaying && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  // Focus input when game starts
  useEffect(() => {
    if (isPlaying && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isPlaying]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setUserInput('');
    nextWord();
    setIsPlaying(true);
  };

  const endGame = () => {
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('devTypingHighScore', score.toString());
    }
  };

  const nextWord = () => {
    const minLen = Math.min(score > 5 ? 7 : 4, 15);
    const validWords = WORDS.filter(w => w.length >= minLen);
    const randomWord = validWords[Math.floor(Math.random() * validWords.length)];
    setCurrentWord(randomWord);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().trim();
    setUserInput(value);
    
    if (value === currentWord) {
      setScore(s => s + 1);
      setUserInput('');
      nextWord();
    }
  };

  // Easter Egg Trigger (Floating Icon)
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    if(isPlaying) endGame();
  };

  return (
    <>
      <motion.button
        onClick={handleOpen}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-white/80 dark:bg-dark-bg/80 border border-primary-500/20 glass rounded-full flex items-center justify-center text-primary-600 dark:text-primary-500 opacity-60 hover:opacity-100 hover:bg-white dark:hover:bg-dark-bg hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="hidden-game"
      >
        <Terminal size={20} className="group-hover:animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 dark:bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl w-full max-w-md overflow-hidden"
            >
              {/* Header */}
              <div className="glass p-5 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50/80 dark:bg-gray-900/50">
                <div className="flex items-center gap-3">
                  <Terminal className="text-primary-500" size={20} />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Developer Speed Test</h3>
                </div>
                <button 
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Game Area */}
              <div className="p-8 text-center bg-gradient-to-b from-transparent to-primary-100/30 dark:to-primary-900/5">
                {!isPlaying && timeLeft === GAME_DURATION ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy size={32} className="text-primary-500 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">How fast can you type?</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Type the developer-themed words before the 30s timer runs out.</p>
                    </div>
                    {highScore > 0 && <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">High Score: {highScore}</p>}
                    <button 
                      onClick={startGame}
                      className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 hover:opacity-90 rounded-full text-white font-semibold flex items-center justify-center gap-2 mx-auto transition-transform active:scale-95 shadow-md"
                    >
                      <Play size={18} fill="currentColor" /> Start Game
                    </button>
                  </motion.div>
                ) : isPlaying ? (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="space-y-6 py-4">
                    <div className="flex justify-between items-center text-sm font-medium px-4">
                      <span className="text-gray-600 dark:text-gray-400">Score: <span className="text-primary-600 dark:text-primary-400 text-lg">{score}</span></span>
                      <span className={`${timeLeft <= 5 ? 'text-red-500 dark:text-red-400 animate-pulse' : 'text-gray-600 dark:text-gray-400'}`}>
                        {timeLeft}s
                      </span>
                    </div>

                    <div className="text-4xl font-bold text-gray-900 dark:text-white tracking-wider h-12 flex items-center justify-center select-none font-mono">
                      {currentWord}
                    </div>

                    <input
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={handleInputChange}
                      placeholder="Type the word..."
                      className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 focus:border-primary-500 px-6 py-4 rounded-xl text-center text-xl text-gray-900 dark:text-white outline-none shadow-inner tracking-wider font-mono transition-colors"
                      autoComplete="off"
                      spellCheck="false"
                      autoCorrect="off"
                    />
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest font-semibold">Time's Up!</p>
                    <div className="text-5xl font-bold mt-2">
                       <span className="gradient-text">{score}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">Words completed</p>
                    
                    <div className="pt-4 flex justify-center gap-4">
                      <button 
                        onClick={startGame}
                        className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full text-gray-900 dark:text-white font-medium flex items-center gap-2 transition-colors border border-gray-300 dark:border-gray-600"
                      >
                        <RefreshCw size={16} /> Play Again
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 text-center border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/20 text-xs text-gray-500 font-medium">
                Built by Arjun for those who dig deeper.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}