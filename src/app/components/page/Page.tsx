import { StoryblokServerComponent, SbBlokData } from "@storyblok/react/rsc";
import type { Page as PageType } from '../../../../.storyblok/types/296347399073305/storyblok-components'

type PageWithBlokData = PageType & SbBlokData;

interface ComponentProps {
    blok: PageWithBlokData;
}

export default function Page({ blok }: ComponentProps) {
    return (
        <main>
            {blok.body?.map((nestedBlok) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    );
}