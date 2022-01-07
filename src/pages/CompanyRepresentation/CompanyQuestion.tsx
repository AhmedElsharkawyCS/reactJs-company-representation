import React from "react"
import { Text } from "../../components"

interface IProps {
  text?: string
}
export default function CompanyQuestion({ text }: IProps) {
  return <Text variant='body1'>{text || "Are you there any individuals with 25% or more onwership in the company?"} </Text>
}
