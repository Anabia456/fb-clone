import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Hiba Shahid",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/zof"
    },

    {
        name: "Maria Moiz",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },

    {
        name: "Iqra Azmair",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },

    {
        name: "Anabia Zeeshan",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Anabia Zeeshan",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {stories.map(story => (
            <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
        ))}
    </div>
  )
}

export default Stories