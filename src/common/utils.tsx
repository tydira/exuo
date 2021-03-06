/*
 * Copyright © 2020 Ty Dira <ty@dira.dev>

 * This file is part of Exuo.

 * Exuo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * Exuo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with Exuo.  If not, see <https://www.gnu.org/licenses/>.
 */

import { makeUrl } from 'exuo/src/route'

export function saveBlob(blob: Blob, name?: string): void {
  const url = URL.createObjectURL(blob)
  const el = document.createElement('a')

  el.href = url
  el.download = name ?? ''
  el.setAttribute('style', "'display: 'none'")

  document.body.appendChild(el)
  el.click()
  document.body.removeChild(el)
  URL.revokeObjectURL(url)
}

export function selectFile(
  accept: string,
  callback: (files: FileList) => void,
): void {
  const el = document.createElement('input')

  el.type = 'file'
  el.accept = accept
  el.setAttribute('style', 'display: none')

  el.oninput = () => {
    if (el.files?.length) {
      callback(el.files)
    }
  }

  document.body.appendChild(el)
  el.click()
  document.body.removeChild(el)
}

export const isRootPath = (): boolean =>
  window.location.pathname === makeUrl('/') ||
  window.location.pathname === makeUrl()
