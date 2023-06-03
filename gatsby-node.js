const path = require(`path`)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  for (let i = 1; i <= 80; i++) {
    createPage({
      path: `/play/${i}`,
      component: path.resolve("src/components/StepControl.jsx"),
      context: {
        step: i,
      },
    })
  }
}
