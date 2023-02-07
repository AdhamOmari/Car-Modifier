import { useState } from 'react'
import Button from '@mui/material/Button';
import { Slider, Typography } from '@mui/material';

export default function Home() {
  const [color, setColor] = useState(0);
  const [sticker, setSticker] = useState("0");
  const [X, setX] = useState(320);

  const [Y, setY] = useState(27);


  return (
    <>

      <main>

        <div className='wrap '>
          <div className='flex'>
            {/* <input type="range" id="volume" name="volume"
              min="0" max="360" onChange={(e) => setColor(e.target.value)} style={{ background: "rgb(33 52 190)" }} /> */}
            <Typography id="linear-slider" gutterBottom square  >

              <Slider
                sx={{
                  width: 130,
                  color: `${color}`,
                  '& .MuiSlider-thumb': {
                    borderRadius: '23px',

                  },
                }}
                min={0}
                step={1}
                max={360}
                onChange={(e) => setColor(e.target.value)}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </Typography>


            <Button onClick={() => setColor(0)} variant="" style={{ background: "red" }}></Button>
            <Button onClick={() => setColor(138)} variant="" style={{ background: "#005500" }}></Button>
            <Button onClick={() => setColor(244)} variant="" style={{ background: "#0b1bcb" }}></Button>
            <Button onClick={() => setColor(322)} variant="" style={{ background: "#c30576" }}></Button>
            <Button onClick={() => setSticker(1)} variant="" className='btn-color' style={{ background: "url(/sticker1.png)no-repeat ", backgroundSize: "contain" }}></Button>
            <Button onClick={() => setSticker(2)} variant="" className='btn-color' style={{ background: "url(/sticker2.png)no-repeat ", backgroundSize: "contain" }}></Button>
            <Button onClick={() => setSticker(3)} variant="" className='btn-color' style={{ background: "url(/sticker3.png)no-repeat ", backgroundSize: "contain" }}></Button>
            <Button onClick={() => setSticker(4)} variant="" className='btn-color' style={{ background: "url(/sticker4.png)no-repeat ", backgroundSize: "contain" }}></Button>
            <Button onClick={() => setSticker(5)} variant="" className='btn-color' style={{ background: "url(/sticker5.png)no-repeat ", backgroundSize: "contain" }}></Button>


            <Typography id="non-linear-slider" gutterBottom>

            </Typography>
            <Slider

              min={5}
              step={1}
              max={220}

              onChange={(e) => setX(e.target.value)}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
            <Typography id="non-linear-slider" gutterBottom>

            </Typography>
            <Slider

              min={5}
              step={1}
              max={220}

              onChange={(e) => setY(e.target.value)}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />



          </div>


          <div class="container">
            <div class="row">
              <div class="col">
                <div class="thumbnail">
                  <div className='car-wrapper' >

                    <div className='image-car relative left-0 top-0  ' ></div>
                    <div className='image-paint absolute  top-0  ' style={{ filter: `hue-rotate(${color}deg)` }} ></div>

                  </div>
                  <div className='image-sticker absolute   w-width h-height  ' style={{ backgroundImage: `url(/sticker${sticker}.png)`, left: `${900}px`, top: `${Y}px}` }}></div>

                </div>
              </div>
            </div>
            </div>
            </div>



          </main>
        </>
        )
}
