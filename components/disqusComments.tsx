import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post }) => {
  const disqusShortname = "nakayou"
  const disqusConfig = {
    url: "https://nakayou.vercel.app/blog",
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;