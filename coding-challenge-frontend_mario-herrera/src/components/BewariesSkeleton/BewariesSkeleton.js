import React from "react"
import ContentLoader from "react-content-loader"

export const BewariesSkeleton = () => {
  return(
  <ContentLoader 
    speed={2}
    width={300}
    height={150}
    viewBox="0 0 400 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="205" y="58" rx="3" ry="3" width="142" height="24" /> 
    <rect x="6" y="57" rx="3" ry="3" width="178" height="119" /> 
    <rect x="206" y="116" rx="3" ry="3" width="142" height="16" /> 
    <rect x="206" y="144" rx="3" ry="3" width="142" height="16" />
  </ContentLoader>)
}