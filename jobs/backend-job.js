import markdown from 'markdown-in-js'

const Content = () => markdown`
# Title
## Subtitle
### Subsubtitle
Paragram with also
- One
- nice
- list
[and a link](http://www.pointing.to/nowhere)
*Thank you*
`

export default Content