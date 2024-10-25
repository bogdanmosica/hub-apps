import { z } from 'zod';
import { AlignEnd } from './align-end';
import { DownloadButton } from './download-button';
import { ErrorComp } from './error';
import { ProgressBar } from './progress-bar';
import Spacing from './spacing';
import { Input } from '@hub/shadcn-ui/ui/input';
import { Button } from '@hub/shadcn-ui/ui/button';
import { CompositionDataResponseDto } from 'types/compositions';

export const RenderControls: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  inputProps: CompositionDataResponseDto;
}> = ({ text, setText, inputProps }) => {
  const { renderMedia, state, undo } = {
    renderMedia: () => {},
    state: { status: 'done', error: { message: 'error' }, progress: 1 },
    undo: () => {},
  };

  return (
    <div className='border border-unfocused-border-color p-geist rounded-geist bg-background flex flex-col'>
      {state.status === 'init' ||
      state.status === 'invoking' ||
      state.status === 'error' ? (
        <>
          <Input
            disabled={state.status === 'invoking'}
            onChange={(value) => setText(value.currentTarget.value)}
            value={text}
          ></Input>
          <Spacing></Spacing>
          <AlignEnd>
            <Button
              disabled={state.status === 'invoking'}
              //loading={state.status === 'invoking'}
              onClick={renderMedia}
            >
              Render video
            </Button>
          </AlignEnd>
          {state.status === 'error' ? (
            <ErrorComp message={state.error.message}></ErrorComp>
          ) : null}
        </>
      ) : null}
      {state.status === 'rendering' || state.status === 'done' ? (
        <>
          <ProgressBar
            progress={state.status === 'rendering' ? state.progress : 1}
          />
          <Spacing></Spacing>
          <AlignEnd>
            <DownloadButton undo={undo} state={state}></DownloadButton>
          </AlignEnd>
        </>
      ) : null}
    </div>
  );
};
