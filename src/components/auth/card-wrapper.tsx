'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Social } from './Social'
import BackButton from './back-button'
import { Header } from './header'
import { Separator } from '../ui/separator'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="sm:w-[400px] w-full shadow-md rounded-none sm:rounded-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <Separator className="mb-6 w-11/12 mx-auto" />
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}
