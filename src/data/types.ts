export type Experience = {
  position: string
  organization: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string
  imgSrc?: string
}

export type Introduction = {
  title: string
  links: Link[]
  aboutMe: string
}

export type Link = {
  name: string,
  link: string,
  imgSrc?: string,
}