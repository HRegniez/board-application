import React from 'react'
import { PropsWithChildren } from 'react'

export default function layoutBoard({
    params,
    children
}: PropsWithChildren <{
    params: { boardId: string }
    searchParams: { [key: string]: string | string[] | undefined }
}> ) {
 
  return (
    <div>
        <h2>
            Boards ({params.boardId})
        </h2>
        {children}
    </div>
  )
}
