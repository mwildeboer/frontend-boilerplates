module.exports = {
  "presets": [
    [
      'next/babel',
      {
        "preset-env": {
          "useBuiltIns": "entry",
          "corejs": "3.4.0"
        }
      }
    ]
  ]
}