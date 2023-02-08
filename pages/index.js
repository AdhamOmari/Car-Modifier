import { useState, useEffect, use } from 'react'
import Button from '@mui/material/Button'
import { Slider, Typography } from '@mui/material'

export default function Home() {
  const [color, setColor] = useState(0)
  const [sticker, setSticker] = useState('')
  const [X, setX] = useState(59);
  const [buttonColor, setButtonColor] = useState(0);


  const [Y, setY] = useState(0)

  const [car, setCar] = useState('')
  const [paint, setPaint] = useState('')







  return (
    <>
      <main>
        <div className='wrap '>
          <div className='flex '>
            <div className='color-picker'>


              <form onChange={e => setColor(e.target.value)}
              >
                <div class="form-group" >
                  <label for="formControlRange"></label>
                  <input type="range" class="form-control-range color-picker progress  "  min="0" max="360"/>

                </div>
              </form>
            </div>

            <div className="button-change">
              <Button className='btn-color-change'
                onClick={() =>setColor(0)}
                variant=''
                style={{ background: 'red' }}
              ></Button>
              <Button className='btn-color-change'
                onClick={() => setColor(138)}
                variant=''
                style={{ background: '#005500' }}
              ></Button>
              <Button className='btn-color-change'
                onClick={() => setColor(244)}
                variant=''
                style={{ background: '#0b1bcb' }}
              ></Button>
              <Button className='btn-color-change'
                onClick={() => setColor(322)}
                variant=''
                style={{ background: '#c30576' }}
              ></Button>
            </div>

            <div className='change-car'>
              <Button
                onClick={() => {
                  setCar('/car3.png'), setPaint('/paintf.png')
                }}
                variant=''
                style={{ background: 'red' }}
              >
                Dodge{' '}
              </Button>
    
              <Button
                onClick={() => {
                  setCar('/car.png'), setPaint('/paint.png')
                }}
                variant=''
                style={{ background: 'red' }}
              >
                Jaguar{' '}
              </Button>
            </div>

            <div className='sticker-picker'>
              <Button
                onClick={() => setSticker(1)}
                variant=''
                className='btn-color'
                style={{
                  background: 'url(/sticker1.png)no-repeat ',
                  backgroundSize: 'contain'
                }}
              ></Button>
              <Button
                onClick={() => setSticker(2)}
                variant=''
                className='btn-color'
                style={{
                  background: 'url(/sticker2.png)no-repeat ',
                  backgroundSize: 'contain'
                }}
              ></Button>
              <Button
                onClick={() => setSticker(3)}
                variant=''
                className='btn-color'
                style={{
                  background: 'url(/sticker3.png)no-repeat ',
                  backgroundSize: 'contain'
                }}
              ></Button>
              <Button
                onClick={() => setSticker(4)}
                variant=''
                className='btn-color'
                style={{
                  background: 'url(/sticker4.png)no-repeat ',
                  backgroundSize: 'contain'
                }}
              ></Button>
              <Button
                onClick={() => setSticker(5)}
                variant=''
                className='btn-color'
                style={{
                  background: 'url(/sticker5.png)no-repeat ',
                  backgroundSize: 'contain'
                }}
              ></Button>

              <div className='sticker-position'>
              <form onChange={e => setX(e.target.value)}
              >
                <div class="form-group" >
                  <label for="formControlRange"></label>
                  <input type="range" class="form-control-range  progress " min="47" max="94" />
                </div>
              </form>
              <form onChange={e => setY(e.target.value)}
              >
                <div class="form-group" >
                  <label for="formControlRange"></label>
                  <input type="range" class="form-control-range  progress " min="0" max="455"  />
                </div>
              </form>

              </div>
            </div>
          </div>

          <div class='container'>
            <div class='row'>
              <div class='col'>
                <div class='thumbnail'>
                  <div className='car-wrapper  left-0 top-0'>
                    <div
                      className='image-car  left-0 top-0'
                      style={{ backgroundImage: `url(${car})` }}
                    ></div>
                    <div
                      className='image-paint absolute  top-0  '
                      style={{
                        filter: `hue-rotate(${color}deg)`,
                        backgroundImage: `url(${paint})`
                      }}
                    ></div>
                    <div
                      className='image-sticker absolute     '
                      style={{
                        backgroundImage: `url(/sticker${sticker}.png)`,
                        top: `${X}px`,
                        left: ` ${Y}px `,
                        WebkitMaskImage: `url${paint}`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
