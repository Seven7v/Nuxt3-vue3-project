export interface PreviewContent {
  img?: String
  video?: String
  moreList?: Array<MoreListItem>
}

export interface MoreListItem {
  title: String
  desc: String
  img: String
  id: Number
}
