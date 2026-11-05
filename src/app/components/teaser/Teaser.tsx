import { SbBlokData } from "@storyblok/react/rsc";
import type { Teaser as TeaserType } from '../../../../.storyblok/types/296347399073305/storyblok-components'
import Test from "./../test/Test";


type TeaserWithBlokData = TeaserType & SbBlokData;

interface ComponentProps {
    blok: TeaserWithBlokData;
}

export default function Teaser({ blok }: ComponentProps) {
  return (
    <div className="teaser">
      <h2>{blok.headline}</h2>
      <Test />
    </div>
  );
}