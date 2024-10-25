import { Player } from '@remotion/player';
import {
  AbstractComposition,
  AbstractCompositionProps,
} from '@hub/remotion/abstract-composition';
import Spacing from './spacing';
import { RenderControls } from './render-controls';
import { Tips } from './tips';
import { useState } from 'react';
import { CompositionDataResponseDto } from 'types/compositions';

type CompositionPlayerProps = {
  composition: AbstractCompositionProps & CompositionDataResponseDto;
};
const CompositionPlayer = ({ composition }: CompositionPlayerProps) => {
  const [text, setText] = useState<string>(composition.texts[0] ?? 'some text');
  const inputProps = {
    name: composition.name,
    id: composition.id,
    userId: composition.userId,
    videoUrl: composition.videoUrl,
    musicUrl: composition.musicUrl,
    orientation: composition.orientation,
    animation: composition.animation,
    volume: composition.volume,
    audioUrl: composition.audioUrl,
    isMobile: composition.isMobile,
    texts: [...composition.texts], // Assuming texts is an array of strings
  };
  return (
    <div className='max-w-screen-md m-auto mb-5'>
      <div className='overflow-hidden rounded-geist shadow-[0_0_200px_rgba(0,0,0,0.15)] mb-10 mt-16'>
        <Player
          component={AbstractComposition}
          inputProps={inputProps}
          durationInFrames={20000}
          fps={30}
          compositionHeight={
            composition.orientation === 'portrait' ? 720 : 1280
          }
          compositionWidth={composition.orientation === 'portrait' ? 1280 : 720}
          style={{
            // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
            // but not over inline styles
            width: '100%',
          }}
          controls
          autoPlay
          loop
        />
      </div>
      <RenderControls
        text={text}
        setText={setText}
        inputProps={inputProps}
      ></RenderControls>
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Tips></Tips>
    </div>
  );
};
export default CompositionPlayer;
