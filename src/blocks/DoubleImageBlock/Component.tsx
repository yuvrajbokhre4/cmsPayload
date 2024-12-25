import type { StaticImageData } from 'next/image'
import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'
import { Media } from '../../components/Media'
import type { DoubleImageBlock as DoubleImageBlockProps } from '@/payload-types'

type Props = DoubleImageBlockProps & {
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage1?: StaticImageData
  staticImage2?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media1,
    media2,
    staticImage1,
    staticImage2,
    disableInnerContainer,
  } = props

  let caption1
  if (media1 && typeof media1 === 'object') caption1 = media1.caption
  let caption2
  if (media2 && typeof media2 === 'object') caption1 = media2.caption
  // const caption2 = isMediaObject(media1) ? media2.caption : null

  return (
    <div
      className={cn(
        '',
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {/* Render first image */}
      <Media
        imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
        resource={media1}
        src={staticImage1}
      />
      {caption1 && (
        <div
          className={cn(
            'mt-6',
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText data={caption1} enableGutter={false} />
        </div>
      )}

      {/* Render second image */}
      <Media
        imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
        resource={media2}
        src={staticImage2}
      />
      {caption2 && (
        <div
          className={cn(
            'mt-6',
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText data={caption2} enableGutter={false} />
        </div>
      )}
    </div>
  )
}
