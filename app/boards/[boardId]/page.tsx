import React from 'react'
import { json } from 'stream/consumers'

export default function page({
    params,
    searchParams,
}: {
    params: { boardId: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {


  return (
    <div>
      Board Page
      <p>
        {params.boardId}
      </p>
      <p>{JSON.stringify(searchParams)}</p>
    </div>
  )
}
