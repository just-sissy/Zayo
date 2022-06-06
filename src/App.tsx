import { useEffect, useState } from 'react'
import * as _ from 'lodash'
import './App.css'
import { Zayo, ZayoProps } from './components/Zayo'
import { Input } from './components/Input';

const eyes = ['normal', 'glasses', 'cyclops', 'lashes', 'uplook', 'serious'] as const;
export type EyeType = typeof eyes[number];

const mouths = ['sneaky', 'smiling', 'smirking', 'chipped', 'beard', 'goatee'] as const;
export type MouthType = typeof mouths[number]

const bunnyColors = [
  { bodyColor: '#4FB5FF', earColor: '#9FCBFF', shirtColor: '#0D0000' },
  { bodyColor: '#CEDC76', earColor: '#165123', shirtColor: '#0D0000' },
  { bodyColor: '#FFAF9F', earColor: '#BA4949', shirtColor: '#0D0000' },
  { bodyColor: '#C3C3C3', earColor: '#A3A3A3', shirtColor: '#0D0000' },
  { bodyColor: '#DB4FDE', earColor: '#A737A9', shirtColor: '#0D0000' }
] as const;
export type BunnyColorType = typeof bunnyColors[number];

function App() {
  const [isNext, setIsNext] = useState(false);
  const [isExplaining, setIsExplaining] = useState(false);
  const [zayo, setZayo] = useState<ZayoProps>({ bunnyColors: { bodyColor: '#FFAF9F', earColor: '#BA4949', shirtColor: '#0D0000' }, eyeType: 'normal', mouthType: 'chipped', isExplaining, isNext })
  useEffect(() => {
    setZayo({ ...zayo, isNext, isExplaining })
  }, [isNext, isExplaining])

  return (
    <div className="App">
      <header className="App-header">
        {/* <Input /> */}
        <Zayo {...zayo} />
        <button onClick={() => setZayo({ bunnyColors: _.sample(bunnyColors) as BunnyColorType, eyeType: _.sample(eyes) as EyeType, mouthType: _.sample(mouths) as MouthType, isExplaining, isNext })}>
          random
        </button>
        <div>
          isExplaining
          <input type="checkbox" onChange={() => setIsExplaining(!isExplaining)} />
        </div>
        <div>
          isNext
          <input type="checkbox" onChange={() => setIsNext(!isNext)} />
        </div>
      </header>
    </div>
  )
}

export default App
