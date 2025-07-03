export async function GET () {
    return new Response('hello from nextjs route handler',{
        status:200,
    });
}

export async function POST() {
    return new Response ('Thank u for the post')
}