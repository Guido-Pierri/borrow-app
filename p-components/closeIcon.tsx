import { Router } from 'express'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import router from 'next/router'
import { Props } from 'next/script'

const CloseIcon = () => {
  return (
    <div>
      <Image
        src={'/kryss_annons.svg'}
        height={25}
        width={25}
        alt={'Kryss'}
        onClick={() => router.back()}
      ></Image>
    </div>
  )
}

export default CloseIcon
