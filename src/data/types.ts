export type Experience = {
  position: string
  organization: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string
  link: string,
  imgSrc?: string
}

export type Project = {
  name: string,
  imgSrc: string,
  year: string,
  description: string,
  link: string,
}

export type Introduction = {
  title: string
  links: Link[]
  aboutMe: string
  headShot: string
}

export type Link = {
  name: string,
  link: string,
  imgSrc?: string,
}
