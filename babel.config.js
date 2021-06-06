module.exports = {
    presets: [
        [
            "next/babel",
            {
                "preset-react": {
                    "importSource": "@emotion/react"
                }
            }
        ]
    ],
    plugins: ["@emotion/babel-plugin", "inline-react-svg"]
}