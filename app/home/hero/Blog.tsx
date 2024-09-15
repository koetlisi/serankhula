import Image from 'next/image';

export default function BlogSection() {
    const blogs = [
        {
            id: 1,
            title: 'Scope, Scope Chain, and Lexical Environment In JavaScript',
            url: 'https://prakashnaikwadi.hashnode.dev/scope-scope-chain-and-lexical-environment-in-javascript',
            imgSrc: 'https://prakashnaikwadi.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1663508430657%2Fp1beVYGQb.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
            description: 'It provides extra security to our variables by avoiding unwanted modifications from other parts of the program. It also gives us the pow...',
        },
        {
            id: 2,
            title: 'How JavaScript Code Executes Internally - Execution Context',
            url: 'https://prakashnaikwadi.hashnode.dev/how-javascript-code-executes-internally-sneak-peek-to-the-execution-context',
            imgSrc: 'https://prakashnaikwadi.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1662648808570%2FH_N9dTVIK.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
            description: 'JavaScript is a scripting language and it requires a runtime environment to run and that runtime environment would be a web browser.',
        },
        {
            id: 3,
            title: 'Learn MarkDown in 5 min',
            url: 'https://prakashnaikwadi.hashnode.dev/learn-markdown-in-5-min',
            imgSrc: 'https://prakashnaikwadi.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1662212270192%2F_uUfFd1Hf.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
            description: 'We have all seen GitHub repositories readme.md file used for project explanation. In today\'s world, we should explain our code through our readme files as no one...',
        },
    ];

    return (
        <section className="px-7 sm:px-14 py-16 max-w-screen-xl mx-auto" id="blogs">
            <div className="flex items-center justify-center gap-12 pb-12">
                <div className="h-px flex-1 bg-[#309543] hidden sm:block"></div>
                <h2 className="text-4xl font-bold">Blogs</h2>
                <div className="h-px flex-1 bg-[#309543] hidden sm:block"></div>
            </div>

           {/* <div className="flex justify-center gap-1 flex-wrap lg:justify-between">
                {blogs.map((blog) => (
                    <div key={blog.id} className="md:max-w-[70%] lg:max-w-[30%] xl:max-w-sm bg-[#021227] rounded-lg border border-gray-800 shadow-md">
                        <a href={blog.url} target="_blank" rel="noopener noreferrer">
                            <Image className="rounded-t-lg" src={blog.imgSrc} alt={blog.title} width={1920} height={840} />
                        </a>
                        <div className="p-5">
                            <a href={blog.url} target="_blank" rel="noopener noreferrer">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{blog.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 text-sm" style={{ fontFamily: 'Roboto, monospace' }}>
                                {blog.description}
                            </p>
                            <a href={blog.url} className="inline-flex items-center text-sm font-medium text-[#309543] transition-all hover:text-[#30954232]" target="_blank" rel="noopener noreferrer">
                                Read more
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>*/}

            <div className="text-end">
                <a href="https://prakashnaikwadi.hashnode.dev/" className="inline-flex items-center pt-2 md:pr-[120px] lg:pr-0 text-xl font-medium text-[#309543] transition-all hover:text-[#30954232]" target="_blank" rel="noopener noreferrer">
                    More Blogs
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
}
