import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

function convertDataUriPngToBinary(relativePath) {
  const filePath = resolve(process.cwd(), relativePath)
  if (!existsSync(filePath)) return

  const content = readFileSync(filePath, 'utf8')
  if (!content.startsWith('data:image/png;base64,')) return

  const base64 = content.substring(content.indexOf(',') + 1).trim()
  const buffer = Buffer.from(base64, 'base64')
  writeFileSync(filePath, buffer)
  console.log(`[icons] Converted data URI to binary: ${relativePath}`)
}

convertDataUriPngToBinary('public/logo-192.png')
convertDataUriPngToBinary('public/logo-512.png')