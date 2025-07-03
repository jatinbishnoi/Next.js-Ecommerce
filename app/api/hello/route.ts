export async function GET () {
    return new Response('hello from nextjs route handler',{
        status:200,
    });
}