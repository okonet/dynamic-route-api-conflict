export async function getStaticProps({params}) {
    const {collection, slug} = params
    return {
        props: {
            collection,
            slug,
        },
    }
}

export async function getStaticPaths() {
    return {
        // get all "pages"
        paths: [{
            params: {
                collection: "api",
                slug: "hello"
            },
        }],
        fallback: true,
    }
}

export default function SlugPage(props) {
    return <h1>This is a page with collection: {props.collection} and slug: {props.slug}</h1>
}
