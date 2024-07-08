import Card from "./components/Card";

function Posts() {
    return (
        <>
            <div className="px-12 py-5 relative">
                <button className="btn btn-neutral rounded-full absolute right-0 top-0 my-5 mx-12">
                    Post <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                </button>
                <h1 className="text-3xl font-bold mb-8">Posts</h1>
                <div className="w-full flex flex-wrap relative gap-5 justify-between items-center">
                    <Card topic="Topic" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reprehenderit." point="hidden" />
                    <Card topic="Topic" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reprehenderit." point="hidden" />
                    <Card topic="Topic" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reprehenderit." point="hidden" />
                    <Card topic="Topic" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reprehenderit." point="hidden" />
                    <Card topic="Topic" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reprehenderit." point="hidden" />
                    <Card topic="Topic" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reprehenderit." point="hidden" />
                    <Card topic="Topic" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reprehenderit." point="hidden" />
                    <Card topic="Topic" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reprehenderit." point="hidden" />
                    <Card topic="Topic" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui reprehenderit." point="hidden" />
                </div>
            </div>
        </>
    )
}
export default Posts;