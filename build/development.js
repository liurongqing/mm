require('esbuild')
  .serve(
    {
      servedir: 'www'
    },
    {
      entryPoints: ['src/main.tsx'],
      outdir: 'www/js',
      inject: ['src/shim/react.ts'],
      bundle: true
    }
  )
  .then((server) => {
    console.log(`运行中： http://${server.host}:${server.port}`)
  })
