import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from '@/lib/storyblok';
import { notFound } from "next/navigation";
import { connection } from "next/server";

type ComponentProps = {
    params: Promise<{ slug: string[] }>;
};

export default async function Page({ params }: ComponentProps) {
    const { slug } = await params;

    await connection();

    const fullSlug = slug ? slug.join("/") : "home";

    const storyblokApi = getStoryblokApi();

    let data;
    try {
        ({ data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
            version: "draft",
        }));
    } catch {
        notFound();
    }

    return <StoryblokStory story={data.story} />;
}