import rss from "@astrojs/rss"

const postImportResults = import.meta.globEager("./blogs/*.md");
const posts = Object.values(postImportResults);

export const get = () => rss({
    title: "AB's Thoughts",
    description: "A peaceful blog about student life especially for computer science students and students aiming to study abroad",
    site: "https://absthoughts.netlify.app",
    items: posts.map(post => ({
        link: post.url,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date
    }))
})