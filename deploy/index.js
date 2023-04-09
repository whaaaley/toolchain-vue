
import { serveDir } from 'https://deno.land/std@0.179.0/http/file_server.ts'
import { serve } from 'https://deno.land/std@0.179.0/http/server.ts'
import { extname, join } from 'https://deno.land/std@0.179.0/path/mod.ts'

const indexFile = await Deno.readFile('./deploy/public/index.html')
const dist = join(Deno.cwd(), './deploy/public')

serve(req => {
  const { pathname } = new URL(req.url)
  const ext = extname(pathname)

  try {
    if (ext === '') {
      return new Response(indexFile, {
        status: 200,
        headers: { 'content-type': 'text/html' }
      })
    } else {
      return serveDir(req, { fsRoot: dist })
    }
  } catch (err) {
    return new Response('Internal Server Error', { status: 500 })
  }
})
